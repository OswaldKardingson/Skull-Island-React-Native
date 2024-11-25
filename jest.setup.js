// jest.setup.js

import '@testing-library/jest-native/extend-expect'; // Adds custom matchers for React Native testing
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';

// Mock AsyncStorage for testing components using local storage
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

// Mock SafeAreaContext to handle components using SafeAreaProvider
jest.mock('react-native-safe-area-context', () => mockSafeAreaContext);

// Mock React Navigation dependencies
jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: jest.fn(),
    useRoute: jest.fn(),
  };
});

// Suppress Animated NativeDriver warnings during tests
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

// Optional: Mock third-party libraries used in the project (if applicable)
// Example:
// jest.mock('third-party-library', () => ({ mockFunction: jest.fn() }));

// Silence specific warnings (e.g., deprecated methods) to declutter test logs
const originalConsoleWarn = console.warn;
console.warn = (...args) => {
  if (args[0]?.includes('deprecated')) {
    return;
  }
  originalConsoleWarn(...args);
};
