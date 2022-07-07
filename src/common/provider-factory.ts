/* eslint-disable @typescript-eslint/ban-types */

import {
  Abstract,
  ClassProvider,
  ExistingProvider,
  FactoryProvider,
  Scope,
  Type,
  ValueProvider,
} from '@nestjs/common';

export type Token = string | symbol | Type<any> | Abstract<any> | Function;

export class ProviderFactory {
  public static createClassProvider<TInterface, TImpl extends TInterface>(
    token: Token,
    clazz: Type<TImpl>,
    scope?: Scope,
  ): ClassProvider {
    return {
      provide: token,
      useClass: clazz,
      scope,
    };
  }

  public static createFactoryProvider<TInterface, TImpl extends TInterface>(
    token: Token,
    factory: (...args: any[]) => TImpl | Promise<TImpl>,
    inject?: Array<string | symbol | Function | Type<any> | Abstract<any>>,
    scope?: Scope,
  ): FactoryProvider {
    return {
      provide: token,
      useFactory: factory,
      inject,
      scope,
    };
  }

  public static createExistingProvider<TInterface, TImpl extends TInterface>(
    token: Token,
    existing: TImpl,
  ): ExistingProvider {
    return {
      provide: token,
      useExisting: existing,
    };
  }

  public static createValueProvider<TValue>(
    token: Token,
    value: TValue,
  ): ValueProvider {
    return {
      provide: token,
      useValue: value,
    };
  }
}
