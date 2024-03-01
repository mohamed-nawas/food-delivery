module.exports = {
  roots: ['<rootDir>/src/__tests__'],
  collectCoverage: true,
  coverageReporters: ['text', 'lcov', 'html'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.tsx',
    '!<rootDir>/src/__tests__/**/*.tsx',
  ],
  preset: 'ts-jest',
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};
