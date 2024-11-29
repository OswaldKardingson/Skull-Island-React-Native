import React from 'react';
import { render } from '@testing-library/react-native';
import IndexScreen from '@screens/IndexScreen';

describe('IndexScreen', () => {
  it('renders correctly', () => {
    const { getByText } = render(<IndexScreen />);
    expect(getByText('Welcome to Skull Island')).toBeTruthy();
  });

  it('renders with the provided testID', () => {
    const { getByTestId } = render(<IndexScreen testID="index-screen" />);
    expect(getByTestId('index-screen')).toBeTruthy();
  });
});
