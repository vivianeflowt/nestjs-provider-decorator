// terminal color functions for console output

// color functions for console output with  escape sequences
export function red(text: string): string {
  return `\x1b[31m${text}\x1b[0m`
}

export function green(text: string): string {
  return `\x1b[32m${text}\x1b[0m`
}

export function yellow(text: string): string {
  return `\x1b[33m${text}\x1b[0m`
}

export function blue(text: string): string {
  return `\x1b[34m${text}\x1b[0m`
}

export function magenta(text: string): string {
  return `\x1b[35m${text}\x1b[0m`
}

export function cyan(text: string): string {
  return `\x1b[36m${text}\x1b[0m`
}

export function white(text: string): string {
  return `\x1b[37m${text}\x1b[0m`
}

export function gray(text: string): string {
  return `\x1b[90m${text}\x1b[0m`
}

export function bold(text: string): string {
  return `\x1b[1m${text}\x1b[0m`
}

export function underline(text: string): string {
  return `\x1b[4m${text}\x1b[0m`
}

export function inverse(text: string): string {
  return `\x1b[7m${text}\x1b[0m`
}

export function reset(text: string): string {
  return `\x1b[0m${text}\x1b[0m`
}

// color functions for console output with  escape sequences
export function redBright(text: string): string {
  return `\x1b[91m${text}\x1b[0m`
}

export function greenBright(text: string): string {
  return `\x1b[92m${text}\x1b[0m`
}

export function yellowBright(text: string): string {
  return `\x1b[93m${text}\x1b[0m`
}

export function blueBright(text: string): string {
  return `\x1b[94m${text}\x1b[0m`
}

export function magentaBright(text: string): string {
  return `\x1b[95m${text}\x1b[0m`
}

export function cyanBright(text: string): string {
  return `\x1b[96m${text}\x1b[0m`
}

export function whiteBright(text: string): string {
  return `\x1b[97m${text}\x1b[0m`
}

export function grayBright(text: string): string {
  return `\x1b[90;1m${text}\x1b[0m`
}

export function boldBright(text: string): string {
  return `\x1b[1;1m${text}\x1b[0m`
}

export function underlineBright(text: string): string {
  return `\x1b[4;1m${text}\x1b[0m`
}

export function resetBright(text: string): string {
  return `\x1b[0;1m${text}\x1b[0m`
}

// color functions for console output with  escape sequences
export function redBackground(text: string): string {
  return `\x1b[41m${text}\x1b[0m`
}

export function greenBackground(text: string): string {
  return `\x1b[42m${text}\x1b[0m`
}

export function yellowBackground(text: string): string {
  return `\x1b[43m${text}\x1b[0m`
}

export function blueBackground(text: string): string {
  return `\x1b[44m${text}\x1b[0m`
}

export function magentaBackground(text: string): string {
  return `\x1b[45m${text}\x1b[0m`
}

export function cyanBackground(text: string): string {
  return `\x1b[46m${text}\x1b[0m`
}

export function whiteBackground(text: string): string {
  return `\x1b[47m${text}\x1b[0m`
}

export function grayBackground(text: string): string {
  return `\x1b[100m${text}\x1b[0m`
}

export function boldBackground(text: string): string {
  return `\x1b[1;100m${text}\x1b[0m`
}

export function underlineBackground(text: string): string {
  return `\x1b[4;100m${text}\x1b[0m`
}

export function inverseBackground(text: string): string {
  return `\x1b[7;100m${text}\x1b[0m`
}

export function resetBackground(text: string): string {
  return `\x1b[0;100m${text}\x1b[0m`
}

// color functions for console output with  escape sequences
export function redBrightBackground(text: string): string {
  return `\x1b[101m${text}\x1b[0m`
}

export function greenBrightBackground(text: string): string {
  return `\x1b[102m${text}\x1b[0m`
}

export function yellowBrightBackground(text: string): string {
  return `\x1b[103m${text}\x1b[0m`
}

export function blueBrightBackground(text: string): string {
  return `\x1b[104m${text}\x1b[0m`
}

export function magentaBrightBackground(text: string): string {
  return `\x1b[105m${text}\x1b[0m`
}

export function cyanBrightBackground(text: string): string {
  return `\x1b[106m${text}\x1b[0m`
}

export function whiteBrightBackground(text: string): string {
  return `\x1b[107m${text}\x1b[0m`
}

export function grayBrightBackground(text: string): string {
  return `\x1b[90;1m${text}\x1b[0m`
}

export function boldBrightBackground(text: string): string {
  return `\x1b[1;1m${text}\x1b[0m`
}

export function underlineBrightBackground(text: string): string {
  return `\x1b[4;1m${text}\x1b[0m`
}

export function inverseBrightBackground(text: string): string {
  return `\x1b[7;1m${text}\x1b[0m`
}

export function resetBrightBackground(text: string): string {
  return `\x1b[0;1m${text}\x1b[0m`
}

// color functions for console output with  escape sequences
export function redBackgroundBright(text: string): string {
  return `\x1b[41;1m${text}\x1b[0m`
}

export function greenBackgroundBright(text: string): string {
  return `\x1b[42;1m${text}\x1b[0m`
}

export function yellowBackgroundBright(text: string): string {
  return `\x1b[43;1m${text}\x1b[0m`
}

export function blueBackgroundBright(text: string): string {
  return `\x1b[44;1m${text}\x1b[0m`
}

export function magentaBackgroundBright(text: string): string {
  return `\x1b[45;1m${text}\x1b[0m`
}

export function cyanBackgroundBright(text: string): string {
  return `\x1b[46;1m${text}\x1b[0m`
}

export function whiteBackgroundBright(text: string): string {
  return `\x1b[47;1m${text}\x1b[0m`
}

export function grayBackgroundBright(text: string): string {
  return `\x1b[100;1m${text}\x1b[0m`
}

export function boldBackgroundBright(text: string): string {
  return `\x1b[1;100m${text}\x1b[0m`
}

export function underlineBackgroundBright(text: string): string {
  return `\x1b[4;100m${text}\x1b[0m`
}

export function inverseBackgroundBright(text: string): string {
  return `\x1b[7;100m${text}\x1b[0m`
}

export function resetBackgroundBright(text: string): string {
  return `\x1b[0;100m${text}\x1b[0m`
}

// color functions for console output with  escape sequences
export function redBrightBackgroundBright(text: string): string {
  return `\x1b[101;1m${text}\x1b[0m`
}

export function greenBrightBackgroundBright(text: string): string {
  return `\x1b[102;1m${text}\x1b[0m`
}

export function yellowBrightBackgroundBright(text: string): string {
  return `\x1b[103;1m${text}\x1b[0m`
}

export function blueBrightBackgroundBright(text: string): string {
  return `\x1b[104;1m${text}\x1b[0m`
}

export function magentaBrightBackgroundBright(text: string): string {
  return `\x1b[105;1m${text}\x1b[0m`
}

export function cyanBrightBackgroundBright(text: string): string {
  return `\x1b[106;1m${text}\x1b[0m`
}

export function whiteBrightBackgroundBright(text: string): string {
  return `\x1b[107;1m${text}\x1b[0m`
}

export function grayBrightBackgroundBright(text: string): string {
  return `\x1b[90;2m${text}\x1b[0m`
}

export function boldBrightBackgroundBright(text: string): string {
  return `\x1b[1;2m${text}\x1b[0m`
}

export function underlineBrightBackgroundBright(text: string): string {
  return `\x1b[4;2m${text}\x1b[0m`
}
