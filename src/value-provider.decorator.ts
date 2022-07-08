import { Contructor, Scope, Token } from './types'

export function ValueProvider<T = any>({
  provide,
  value,
  scope = Scope.TRANSIENT,
}: {
  provide: Token
  value: T
  scope?: Scope
}) {
  return function <C extends Contructor>(target: C) {
    return class extends target {
      private constructor(...args: any[]) {
        super(...args)
        Reflect.isExtensible(this) && Reflect.preventExtensions(this)
        throw new Error('you can not instantiate a value provider')
      }

      static readonly provide = provide
      static readonly useValue = value
      static readonly scope = scope
    }
  }
}

export default ValueProvider
