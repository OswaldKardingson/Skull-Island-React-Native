import React from 'react';
import { render } from '@testing-library/react-native';
import Screen, { Theme } from '@theme/default';

describe('Screen Component', () => {
  const mockTheme: Theme = {
    height: 800,
    width: 400,
    topBuffer: 50,
    bottomBuffer: 20,
  };

  it('renders correctly and displays theme properties', () => {
    const { getByTestId } = render(<Screen theme={mockTheme} testID="test-screen" />);

    expect(getByTestId('test-screen-height').props.children).toContain(800);
    expect(getByTestId('test-screen-width').props.children).toContain(400);
    expect(getByTestId('test-screen-topBuffer').props.children).toContain(50);
    expect(getByTestId('test-screen-bottomBuffer').props.children).toContain(20);
  });
});
