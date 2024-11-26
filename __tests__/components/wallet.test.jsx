import React from 'react';
import { render } from '@testing-library/react-native';
import { Wallet } from '../../src/components/wallet';

describe('Wallet Component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Wallet />);
    expect(getByText('Wallet')).toBeTruthy();
  });
});
