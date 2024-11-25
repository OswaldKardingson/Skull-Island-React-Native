// __tests__/components/Footer.test.js
import React from 'react';
import { render } from '@testing-library/react-native';
import Footer from '../../src/components/Footer';

describe('Footer Component', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<Footer />);
    expect(getByText(/©/)).toBeTruthy();
  });

  it('displays the correct year dynamically', () => {
    const year = new Date().getFullYear();
    const { getByText } = render(<Footer />);
    expect(getByText(`© ${year}`)).toBeTruthy();
  });
});
