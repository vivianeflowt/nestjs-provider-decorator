import { spawn } from 'child_process'

export async function openExplorer(path: string): Promise<void> {
  path = path || '/'
  const child = spawn('xdg-open', [path])
  child.on('error', (err: any) => {
    child.kill()
    console.error(err.message)
    process.exit(1)
  })
}

export async function sleep(seconds: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000)
  })
}
