module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest', // Use Babel for transforming JS, JSX, TS, and TSX files
  },
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|@react-native-community)/)', // Transform React Native dependencies
  ],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'], // Recognize these file extensions
  testEnvironment: 'jsdom', // For DOM-related testing, especially for React components
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Optional, for additional Jest configurations
};
