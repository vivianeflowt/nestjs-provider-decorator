import { Contructor, Token } from './types'

export function ExistingProvider<T = any>({
  provide,
  value,
}: {
  provide: Token
  value: T
}) {
  return function <C extends Contructor>(target: C) {
    return class extends target {
      private constructor(...args: any[]) {
        super(...args)
        Reflect.isExtensible(this) && Reflect.preventExtensions(this)
        throw new Error('you can not instantiate a existing provider')
      }

      static readonly provide = provide
      static readonly useExisting = value
    }
  }
}

export default ExistingProvider
