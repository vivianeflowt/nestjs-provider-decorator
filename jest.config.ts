import 'jest-extended'

export default {
  preset: 'ts-jest',
  testMatch: ['**/*.test.[jt]s?(x)', '**/*.spec.[jt]s?(x)'],
  testEnvironment: 'node',
  collectCoverage: false,
  verbose: true,
  collectCoverageFrom: [
    'packages/**/*.ts',
    '!packages/**/*.d.ts',
    '!packages/**/*.test.ts',
    '!packages/**/*.spec.ts',
  ],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    'index.ts',
    'debug.ts',
    'constanks.ts',
    '/types/.+',
    '/__tests__/.+',
    '/__mocks__/.+',
    '/__fixtures__/.+',
  ],
  testTimeout: 4 * 60 * 1000, // 4 minutes
  setupFilesAfterEnv: ['jest-extended/all'],
}
