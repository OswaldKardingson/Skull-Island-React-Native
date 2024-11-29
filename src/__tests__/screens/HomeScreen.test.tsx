import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '@screens/HomeScreen';

// Define navigation types
type RootStackParamList = {
  Detail: undefined;
};

// Mock navigation
const mockNavigate = jest.fn();

// Mock navigation prop
const mockNavigation: StackNavigationProp<RootStackParamList, 'Detail'> = {
  navigate: mockNavigate,
  goBack: jest.fn(),
  replace: jest.fn(),
  reset: jest.fn(),
  setParams: jest.fn(),
  dispatch: jest.fn(),
  addListener: jest.fn(),
  canGoBack: jest.fn(),
  isFocused: jest.fn(),
  removeListener: jest.fn(),
  getParent: jest.fn(),
} as unknown as StackNavigationProp<RootStackParamList, 'Detail'>;

describe('HomeScreen', () => {
  it('renders correctly', () => {
    const { getByText } = render(<HomeScreen navigation={mockNavigation} />);
    expect(getByText('Home Screen')).toBeTruthy();
  });

  it('navigates to Detail screen on button press', () => {
    const { getByText } = render(<HomeScreen navigation={mockNavigation} />);
    fireEvent.press(getByText('Go to Details'));
    expect(mockNavigate).toHaveBeenCalledWith('Detail');
  });

  it('includes the correct testID', () => {
    const { getByTestId } = render(<HomeScreen navigation={mockNavigation} testID="home-test-id" />);
    expect(getByTestId('home-test-id')).toBeTruthy();
  });
});
