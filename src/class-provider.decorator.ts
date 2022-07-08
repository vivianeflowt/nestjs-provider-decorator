import { Scope, Type, Contructor, Token } from './types'

export function ClassProvider<T = any>({
  provide,
  value,
  scope = Scope.TRANSIENT,
}: {
  provide: Token
  value: Type<T>
  scope?: Scope
}) {
  return function <T extends Contructor>(target: T) {
    return class extends target {
      private constructor(...args: any[]) {
        super(...args)
        Reflect.isExtensible(this) && Reflect.preventExtensions(this)
        throw new Error('you can not instantiate a class provider')
      }

      static readonly provide = provide
      static readonly useClass = value
      static readonly scope = scope
    }
  }
}

export default ClassProvider
