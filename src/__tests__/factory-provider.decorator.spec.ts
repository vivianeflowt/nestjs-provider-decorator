import { Inject, Injectable } from '@nestjs/common'
import { Test, TestingModule } from '@nestjs/testing'

import FactoryProvider from '../factory-provider.decorator'
import { Scope } from '../types'

describe('Factory Provider Decorator', () => {
  let module: TestingModule
  let testService: TestService

  const TEST_VALUE = 'TEST_VALUE'

  @Injectable()
  class TestService {
    constructor(
      @Inject(TEST_VALUE)
      private readonly testValue: number
    ) {}

    test(): number {
      return this.testValue
    }
  }

  @FactoryProvider({ provide: TEST_VALUE, factory: () => 1 })
  class TestProvider {}

  beforeEach(async () => {
    module = await Test.createTestingModule({
      providers: [TestProvider, TestService],
    }).compile()

    await module.init()

    testService = module.get(TestService)
  })

  it('should be defined', () => {
    expect(FactoryProvider).toBeDefined()
  })

  it('should be function', () => {
    expect(FactoryProvider).toBeFunction()
  })

  it('should be return function', () => {
    expect(FactoryProvider).toBeFunction()
  })

  it('should throw when constructor called', () => {
    expect(() => {
      new TestProvider()
    }).toThrow()
  })

  it('should has injected properties ', () => {
    expect(TestProvider).toHaveProperty('provide')
    expect(TestProvider).toHaveProperty('useFactory')
    expect(TestProvider).toHaveProperty('scope')
    expect((TestProvider as any).provide).toEqual(TEST_VALUE)
    expect((TestProvider as any).useFactory).toBeFunction()
    expect((TestProvider as any).scope).toEqual(Scope.TRANSIENT)
  })

  it('should has injected values', () => {
    expect(testService.test()).toEqual(1)
  })
})
