const ansiRegex =
  /[\u001B\u009B][[\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\d/#&.:=?%@~_]+)*|[a-zA-Z\d]+(?:;[-a-zA-Z\d\/#&.:=?%@~_]*)*)?\u0007)|(?:(?:\d{1,4}(?:;\d{0,4})*)?[\dA-PR-TZcf-nq-uy=><~]))/g

export function stringWidth(str: string): number {
  return str.replace(ansiRegex, '').length
}
export function stripAnsi(str: string): string {
  return str.replace(ansiRegex, '')
}
