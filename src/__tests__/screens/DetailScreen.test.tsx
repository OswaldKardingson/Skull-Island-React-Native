import React from 'react';
import { render } from '@testing-library/react-native';
import DetailScreen from '@screens/DetailScreen';

describe('DetailScreen', () => {
  it('renders the title correctly', () => {
    const { getByText } = render(<DetailScreen title="Test Title" />);
    expect(getByText('Test Title')).toBeTruthy();
  });

  it('includes the correct testID', () => {
    const { getByTestId } = render(<DetailScreen title="Test Title" testID="test-detail-screen" />);
    expect(getByTestId('test-detail-screen')).toBeTruthy();
  });
});
