import React from 'react';
import { render } from '@testing-library/react-native';
import { Transaction } from '../../src/components/transaction';

describe('Transaction Component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Transaction />);
    expect(getByText('Transaction')).toBeTruthy();
  });
});
