/* eslint-disable @typescript-eslint/ban-types */

export type Token = string | symbol | Type<any> | Abstract<any> | Function

export type Contructor = { new (...args: any[]): {} }

export interface Type<T extends any> extends Function {
  new (...args: any[]): T
}

export interface Abstract<T> extends Function {
  prototype: T
}

export enum Scope {
  DEFAULT = 0,
  TRANSIENT = 1,
  REQUEST = 2,
}

export type OptionalFactoryDependency = {
  token: Token
  optional: boolean
}
