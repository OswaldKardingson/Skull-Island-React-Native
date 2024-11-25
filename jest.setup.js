import '@testing-library/jest-native/extend-expect';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';

// Mock AsyncStorage
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

// Mock SafeAreaContext
jest.mock('react-native-safe-area-context', () => mockSafeAreaContext);

// Mock React Navigation dependencies
jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: jest.fn(),
    useRoute: jest.fn(),
    NavigationContainer: jest.fn(({ children }) => children),
  };
});

// Mock Reanimated
jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  // Override the `call` method as it is not implemented in the mock
  Reanimated.default.call = jest.fn();

  return Reanimated;
});

// Mock theme provider
jest.mock('src/theme/default', () => ({
  theme: {
    height: 800,
    width: 600,
    topBuffer: 20,
    bottomBuffer: 20,
  },
}));

// Silence console warnings for deprecated methods
const originalConsoleWarn = console.warn;
console.warn = (...args) => {
  if (args[0]?.includes('deprecated')) {
    return;
  }
  originalConsoleWarn(...args);
};

// Silence errors for specific warnings
const originalConsoleError = console.error;
console.error = (...args) => {
  if (args[0]?.includes('SpecificWarningToIgnore')) {
    return;
  }
  originalConsoleError(...args);
};
