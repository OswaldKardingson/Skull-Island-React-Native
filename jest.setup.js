// jest.setup.js
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

// Suppress Animated NativeDriver warnings during tests
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper', () => ({
  addListener: jest.fn(),
  removeListeners: jest.fn(),
}));

// Silence console warnings for deprecated methods
const originalConsoleWarn = console.warn;
console.warn = (...args) => {
  if (args[0]?.includes('deprecated')) {
    return;
  }
  originalConsoleWarn(...args);
};

// Silence errors for missing modules
const originalConsoleError = console.error;
console.error = (...args) => {
  if (args[0]?.includes('NativeAnimatedHelper')) {
    return;
  }
  originalConsoleError(...args);
};
