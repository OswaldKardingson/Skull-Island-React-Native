module.exports = {
  preset: 'react-native', // Use React Native preset for Jest
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest', // Use Babel to transform JS, JSX, TS, and TSX files
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@react-native-async-storage|react-native-safe-area-context|react-navigation|react-native-vector-icons|react-native-reanimated)/)', // Ensure React Native dependencies are transformed
  ],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'], // Recognize these file extensions
  testEnvironment: 'jsdom', // Use jsdom for DOM-related testing
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Include additional Jest setup
  globals: {
    __DEV__: true, // Ensure __DEV__ global is defined for React Native
  },
  verbose: true, // Enable verbose test results
  moduleNameMapper: {
    '^react-native$': 'react-native-web', // Optional for projects also targeting web
    '^@/(.*)$': '<rootDir>/src/$1', // Adjust to your alias (if applicable)
  },
  resetMocks: true, // Reset all mocks after each test
  clearMocks: true, // Automatically clear mock calls and instances between tests
  collectCoverage: true, // Collect test coverage
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}', // Target files for coverage
    '!**/node_modules/**',
    '!**/jest.setup.js', // Ignore the setup file
  ],
  coverageDirectory: '<rootDir>/coverage', // Output directory for coverage
};
