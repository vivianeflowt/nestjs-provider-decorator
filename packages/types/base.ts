export type Contructor = { new (...args: any[]): {} }

export interface Type<T = any> extends Function {
  new (...args: any[]): T
}

export interface Abstract<T> extends Function {
  prototype: T
}

export type Token = string | symbol | Type<any> | Abstract<any> | Function
