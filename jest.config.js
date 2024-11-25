module.exports = {
  preset: 'react-native', // Use React Native preset for Jest
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest', // Use Babel to transform JS, JSX, TS, and TSX files
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@react-native-async-storage|react-native-safe-area-context)/)', // Ensure React Native dependencies are transformed
  ],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'], // Recognize these file extensions
  testEnvironment: 'jsdom', // Use jsdom for DOM-related testing
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Include additional Jest setup
};
