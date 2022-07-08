import 'reflect-metadata'

import ClassProvider from './class-provider.decorator'
import ExistingProvider from './existing-provider.decorator'
import FactoryProvider from './factory-provider.decorator'
import ValueProvider from './value-provider.decorator'

export { ValueProvider, ClassProvider, FactoryProvider, ExistingProvider }

export * from './types'

export default {
  ValueProvider,
  ClassProvider,
  FactoryProvider,
  ExistingProvider,
}
