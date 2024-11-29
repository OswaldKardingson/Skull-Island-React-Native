import '@testing-library/jest-native/extend-expect';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';

// Mock AsyncStorage
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

// Mock SafeAreaContext with a custom implementation
jest.mock('react-native-safe-area-context', () => {
  return {
    SafeAreaProvider: ({ children }: { children: ReactNode }) => (
      <View style={styles.mockContainer}>{children}</View>
    ),
    SafeAreaConsumer: ({
      children,
    }: {
      children: (insets: { insets: { top: number; bottom: number; left: number; right: number } }) => ReactNode;
    }) =>
      children({
        insets: { top: 0, bottom: 0, left: 0, right: 0 },
      }),
    useSafeAreaInsets: () => ({
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    }),
    useSafeAreaFrame: () => ({
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    }),
  };
});

// Mock Modal
jest.mock('react-native/Libraries/Modal/Modal', () => {
  return ({ children }: { children: ReactNode }) => (
    <View style={styles.mockContainer}>{children}</View>
  );
});

// Mock React Navigation dependencies
jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: jest.fn(),
    useRoute: jest.fn(),
    NavigationContainer: ({ children }: { children: ReactNode }) => (
      <View style={styles.mockContainer}>{children}</View>
    ),
  };
});

// Mock Reanimated
jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = jest.fn(); // Override `call` method
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

// Mock gesture handler
jest.mock('react-native-gesture-handler', () => {
  const {
    View,
    TouchableOpacity,
    ScrollView,
    TextInput,
  } = require('react-native');
  return {
    Swipeable: jest.fn(),
    DrawerLayout: jest.fn(),
    State: {},
    GestureHandlerRootView: ({ children }: { children: ReactNode }) => (
      <View style={styles.mockContainer}>{children}</View>
    ),
    TouchableHighlight: TouchableOpacity,
    TouchableOpacity,
    TouchableNativeFeedback: TouchableOpacity,
    TouchableWithoutFeedback: TouchableOpacity,
    ScrollView,
    TextInput,
    FlatList: ScrollView,
    BaseButton: jest.fn(),
    RectButton: jest.fn(),
    BorderlessButton: jest.fn(),
  };
});

// Silence warnings and errors
console.warn = (...args: any[]) => {
  if (args[0]?.includes('deprecated')) return;
  console.warn(...args);
};

console.error = (...args: any[]) => {
  if (
    args[0]?.includes('NativeSafeAreaContext') ||
    args[0]?.includes('AnotherWarningToIgnore')
  )
    return;
  console.error(...args);
};

// Styles for mocked components
const styles = StyleSheet.create({
  mockContainer: {
    flex: 1,
  },
});
