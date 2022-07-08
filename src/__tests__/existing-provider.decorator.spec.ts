import { Inject, Injectable } from '@nestjs/common'
import { Test, TestingModule } from '@nestjs/testing'

import ExistingProvider from '../existing-provider.decorator'
import ValueProvider from '../value-provider.decorator'

describe('Existing Provider Decorator', () => {
  let module: TestingModule
  let testService: TestService

  const TEST_VALUE = 'TEST_VALUE'
  const TEST_VALUE2 = 'TEST_VALUE2'

  @Injectable()
  class TestService {
    constructor(
      @Inject(TEST_VALUE2)
      private readonly testValue: number
    ) {}

    test(): number {
      return this.testValue
    }
  }

  @ValueProvider({ provide: TEST_VALUE, value: 1 })
  class TestProvider {}

  @ExistingProvider({ provide: TEST_VALUE2, value: TEST_VALUE })
  class TestProvider2 {}

  beforeEach(async () => {
    module = await Test.createTestingModule({
      providers: [TestProvider, TestProvider2, TestService],
    }).compile()

    await module.init()

    testService = module.get(TestService)
  })

  it('should be defined', () => {
    expect(ExistingProvider).toBeDefined()
  })

  it('should be function', () => {
    expect(ExistingProvider).toBeFunction()
  })

  it('should be return function', () => {
    expect(ExistingProvider).toBeFunction()
  })

  it('should throw when constructor called', () => {
    expect(() => {
      new TestProvider2()
    }).toThrow()
  })

  it('should has injected properties ', () => {
    expect(TestProvider2).toHaveProperty('provide')
    expect(TestProvider2).toHaveProperty('useExisting')
    expect((TestProvider2 as any).provide).toEqual(TEST_VALUE2)
    expect((TestProvider2 as any).useExisting).toEqual(TEST_VALUE)
  })

  it('should has injected values', () => {
    expect(testService.test()).toEqual(1)
  })
})
