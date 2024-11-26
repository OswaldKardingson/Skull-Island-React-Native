module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest', // Transform JS, JSX, TS, TSX using Babel
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@react-native-async-storage|react-native-safe-area-context|react-navigation|react-native-vector-icons|react-native-reanimated|@react-native/polyfills|react-native-svg)/)',
  ],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'], // File extensions Jest recognizes
  testEnvironment: 'jsdom', // Emulates browser-like testing
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Setup for after environment initialization
  setupFiles: [
    '<rootDir>/node_modules/react-native-gesture-handler/jestSetup.js', // Setup gesture handler mock
  ],
  globals: {
    __DEV__: true, // Enable __DEV__ global variable
  },
  verbose: true, // Show detailed test results in the console
  moduleNameMapper: {
    '^react-native$': 'react-native-web', // Map React Native to web
    '^@/(.*)$': '<rootDir>/src/$1', // Alias for importing from src
    '^src/(.*)$': '<rootDir>/src/$1', // Add mapping for 'src' alias
    '\\.css$': 'identity-obj-proxy', // Mock CSS imports
  },
  resetMocks: true, // Reset mocks before each test
  clearMocks: true, // Clear mock calls and instances between tests
  collectCoverage: true, // Enable test coverage collection
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}', // Include source files
    '!**/node_modules/**', // Exclude node_modules
    '!**/jest.setup.js', // Exclude setup file
    '!src/**/*.d.ts', // Exclude TypeScript declaration files
  ],
  coverageDirectory: '<rootDir>/coverage', // Directory for coverage reports
  cacheDirectory: '<rootDir>/tmp/jest_cache', // Cache directory for Jest
  fakeTimers: {
    enableGlobally: true, // Enable modern fake timers globally
  },
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: './jest_results',
        outputName: 'jest-junit.xml',
      },
    ],
  ],
  testTimeout: 30000, // Increased timeout for potentially long-running tests
  watchPathIgnorePatterns: ['<rootDir>/node_modules/'], // Ignore watching node_modules
};
