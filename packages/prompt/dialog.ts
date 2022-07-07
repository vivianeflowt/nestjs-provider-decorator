// import Bluebird from "bluebird";
import chalk from 'chalk'
import { promisify } from 'util'
import fs from 'fs'
import f from 'lodash/fp'
import path from 'path'

const { log } = console

// const c = chalk;

class Dialog {
  colors = {
    text: chalk.whiteBright,
    success: chalk.greenBright,
    error: chalk.red,
    info: chalk.blueBright,
    warn: chalk.yellow,
    bold: chalk.bold,
    underline: chalk.underline,
    dim: chalk.white.dim,
    reset: chalk.reset,
    debug: chalk.magenta,
  }

  success(message: string) {
    log(this.colors.success(` OK`), message)
  }

  error(message: string) {
    log(this.colors.error(` Erro`), message)
  }

  info(message: string) {
    // info charcode
    log(this.colors.info(` ℹ`), message)
  }

  warn(message: string) {
    // warn charcode
    log(this.colors.warn(`☀`), message)
  }

  debug(message: string) {
    this.success(message)
    this.error(message)
    this.info(message)
    this.warn(message)
  }
}

const dialog = new Dialog()

dialog.debug('Hello World')
