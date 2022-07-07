#!/usr/bin/env node
import { log } from 'console'
import sh from 'shelljs'
import f from 'lodash/fp'
import chalk from 'chalk'
import sade from 'sade'
import terminalColumns from 'terminal-columns'

const COMMAND = 'npx gitignore'

export const getTypes = (): string[] => {
  const { stdout } = sh.exec(`${COMMAND} --types`)
  const list = f.pipe(
    f.replace(/Fetching available types.../g, ''),
    f.replace(/\,/g, ' '),
    f.split('\n'),
    f.map(f.replace(/^\s+|\s+$/g, ' ')),
    f.map(f.trim),
    f.compact
  )(stdout)
  return list
}

const CLI = sade('base-gi')

CLI.command('install <type>')
  .describe('Install a gitignore type')
  .alias('i')
  .action((typeList) => {
    let typesAll = getTypes()
    typeList = f.pipe(
      f.map(f.trim),
      f.compact,
      f.filter(f.includes([...typesAll])),
      f.uniq
    )([...typeList])

    if (typeList.length !== typesAll.length) {
      log(chalk.yellow('Some types are not available'))
      log(f.difference(typesAll, typeList))
      process.exit(1)
    }

    for (const type of typeList) {
      log(`Installing ${type}`)
      const { stdout } = sh.exec(`${COMMAND} ${type}`)
      log(stdout)
    }

    log(chalk.green('Done'))
    process.exit(0)
  })

CLI.command('list')
  .alias('l')
  .describe('List available gitignore types')
  .action(() => {
    const types = getTypes()

    const tableString = terminalColumns([
      ['Type', 'Description'],
      ...types.map((type) => [type, '']),
    ])
  })

CLI.parse(process.argv)
