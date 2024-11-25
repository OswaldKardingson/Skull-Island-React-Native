// __tests__/components/Header.test.js
import React from 'react';
import { render } from '@testing-library/react-native';
import Header from '../../src/components/Header';

describe('Header Component', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<Header title="Test Title" />);
    expect(getByText('Test Title')).toBeTruthy();
  });

  it('handles missing props gracefully', () => {
    const { queryByText } = render(<Header />);
    expect(queryByText('')).toBeNull();
  });
});
