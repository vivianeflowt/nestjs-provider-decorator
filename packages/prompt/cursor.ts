import { stdout } from 'process'

export function cursor() {
  return {
    hide() {
      stdout.write('\x1B[?25l')
      return this
    },
    show() {
      stdout.write('\x1B[?25h')
      return this
    },
    goto(x: number, y: number) {
      stdout.write(`\x1B[${y};${x}H`)
      return this
    },
    eraseLine() {
      stdout.write('\x1B[2K')
      return this
    },
    eraseDown() {
      stdout.write('\x1B[J')
      return this
    },
    eraseUp() {
      stdout.write('\x1B[1J')
      return this
    },
    eraseScreen() {
      stdout.write('\x1B[2J')
      return this
    },
    beep() {
      stdout.write('\x07')
      return this
    },
    reset() {
      stdout.write('\x1Bc')
      return this
    },
    save() {
      stdout.write('\x1B7')
      return this
    },
    restore() {
      stdout.write('\x1B8')
      return this
    },
    moveUp(n: number) {
      stdout.write(`\x1B[${n}A`)
      return this
    },
    moveDown(n: number) {
      stdout.write(`\x1B[${n}B`)
      return this
    },
    moveRight(n: number) {
      stdout.write(`\x1B[${n}C`)
      return this
    },
    moveLeft(n: number) {
      stdout.write(`\x1B[${n}D`)
      return this
    },
    moveToEnd() {
      stdout.write('\x1B[999E')
      return this
    },
    moveToBeginning() {
      stdout.write('\x1B[1G')
      return this
    },
    moveTo(x: number, y: number) {
      stdout.write(`\x1B[${y};${x}H`)
      return this
    },
    moveToColumn(x: number) {
      stdout.write(`\x1B[${x}G`)
      return this
    },
    setScrollMargin(top: number, bottom: number) {
      stdout.write(`\x1B[${top};${bottom}r`)
      return this
    },
    setScrollRegion(top: number, bottom: number) {
      stdout.write(`\x1B[${top};${bottom}s`)
      return this
    },
    scrollUp(n: number) {
      stdout.write(`\x1B[${n}S`)
      return this
    },
    scrollDown(n: number) {
      stdout.write(`\x1B[${n}T`)
      return this
    },
    scrollToTop() {
      stdout.write('\x1B[1;1r')
      return this
    },
    scrollToBottom() {
      stdout.write('\x1B[999;999r')
      return this
    },
    scrollTo(x: number, y: number) {
      stdout.write(`\x1B[${y};${x}r`)
      return this
    },
  }
}

export default cursor
