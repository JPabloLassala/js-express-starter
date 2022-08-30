module.exports = {
  testEnvironment: 'node',
  testEnvironmentOptions: {
    NODE_ENV: 'test',
  },
  testRegex: './__tests__/.*\\.(test|spec)?\\.js$',
  moduleFileExtensions: ['js', 'json', 'node'],
  roots: ['<rootDir>/__tests__'],
  restoreMocks: true,
  coveragePathIgnorePatterns: ['node_modules', 'src/config', 'src/app.js', 'tests', 'build'],
  coverageReporters: ['text', 'lcov', 'clover', 'html'],
  testPathIgnorePatterns: ['__tests__/factories'],
  setupFiles: ['dotenv/config'],
};
