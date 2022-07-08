import { Contructor, OptionalFactoryDependency, Scope, Token } from './types'

export function FactoryProvider<T = any>({
  provide,
  factory,
  inject = [],
  scope = Scope.TRANSIENT,
}: {
  provide: Token
  factory: (...args: any[]) => T | Promise<T>
  inject?: Array<Token | OptionalFactoryDependency>
  scope?: Scope
}) {
  return function <T extends Contructor>(target: T) {
    return class extends target {
      private constructor(...args: any[]) {
        super(...args)
        Reflect.isExtensible(this) && Reflect.preventExtensions(this)
        throw new Error('you can not instantiate class provider')
      }

      static readonly provide = provide
      static readonly useFactory = factory
      static readonly scope = scope
      static readonly inject = inject
    }
  }
}

export default FactoryProvider
