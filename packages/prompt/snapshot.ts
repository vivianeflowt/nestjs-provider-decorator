import f from 'lodash/fp'
import 'reflect-metadata'
import { Mixin } from 'ts-mixer'

import Indexable from '../utils/indexable'

class Frame extends Mixin(Indexable) {
  constructor(arr: any[] = []) {
    super()
    arr.forEach((value, index) => {
      this[index] = value
    })
  }

  public clone(): Frame {
    return Frame.from(this.values())
  }

  public first(): any {
    return f.first(this.values())
  }

  static of(...args: any[]): Frame {
    return Frame.from(args)
  }

  public last(): any {
    return f.last(this.values())
  }

  public reverse(): Frame {
    return Frame.from(f.reverse(this.values()))
  }

  public shuffle(): Frame {
    return Frame.from(f.shuffle(this.values()))
  }

  public slice(start: number, end: number): Frame {
    return Frame.from(this.values().slice(start, end))
  }

  static from(list: any[]): Frame {
    return new Frame(list)
  }
}

export default Frame
