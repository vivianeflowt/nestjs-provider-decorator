import { Inject, Injectable } from '@nestjs/common'
import { Test, TestingModule } from '@nestjs/testing'
import ClassProvider from '../class-provider.decorator'

import { Scope } from '../types'

describe('Class Provider Decorator', () => {
  let module: TestingModule
  let testService: TestService

  const TEST_VALUE = 'TEST_VALUE'

  @Injectable()
  class Hello {
    constructor() {}

    test(): string {
      return 'Hello'
    }
  }

  @Injectable()
  class TestService {
    constructor(
      @Inject(TEST_VALUE)
      private readonly hello: Hello
    ) {}

    test(): string {
      return this.hello.test()
    }
  }

  @ClassProvider({ provide: TEST_VALUE, value: Hello })
  class HelloProvider {}

  beforeEach(async () => {
    module = await Test.createTestingModule({
      providers: [HelloProvider, TestService],
    }).compile()

    await module.init()

    testService = module.get(TestService)
  })

  it('should be defined', () => {
    expect(ClassProvider).toBeDefined()
  })

  it('should be function', () => {
    expect(ClassProvider).toBeFunction()
  })

  it('should be return function', () => {
    expect(ClassProvider).toBeFunction()
  })

  it('should throw when constructor called', () => {
    expect(() => {
      new HelloProvider()
    }).toThrow()
  })

  it('should has injected properties ', () => {
    expect(HelloProvider).toHaveProperty('provide')
    expect(HelloProvider).toHaveProperty('useClass')
    expect(HelloProvider).toHaveProperty('scope')
    expect((HelloProvider as any).provide).toEqual(TEST_VALUE)
    expect((HelloProvider as any).useClass).toEqual(Hello)
    expect((HelloProvider as any).scope).toEqual(Scope.TRANSIENT)
  })

  it('should has injected values', () => {
    expect(testService.test()).toEqual('Hello')
  })
})
