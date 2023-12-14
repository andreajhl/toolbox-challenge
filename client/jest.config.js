module.exports = {
  collectCoverage: true,
  testEnvironment: 'jsdom',
  coverageDirectory: '<rootDir>/coverage/',
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  collectCoverageFrom: [
    '**/src/**/*.spec.{js,jsx}',
  ],
  transformIgnorePatterns: [
    '/node_modules/',
    '^.*\\.scss$',
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/src/wordings/',
    '<rootDir>/src/constants/',
  ],
};
