// __tests__/components/Card.test.js
import React from 'react';
import { render } from '@testing-library/react-native';
import Card from '../../src/components/Card';

describe('Card Component', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<Card title="Card Title" />);
    expect(getByText('Card Title')).toBeTruthy();
  });

  it('handles optional props like image', () => {
    const { getByTestId } = render(<Card title="Card Title" image="test-image.png" />);
    expect(getByTestId('card-image')).toBeTruthy();
  });

  it('renders a button if action is provided', () => {
    const { getByText } = render(<Card title="Card Title" buttonText="Click Me" />);
    expect(getByText('Click Me')).toBeTruthy();
  });
});
