import React from 'react';
import { render } from '@testing-library/react-native';
import { TransactionList } from '../../src/components/transactionList';

describe('TransactionList Component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<TransactionList />);
    expect(getByTestId('transaction-list')).toBeTruthy();
  });
});
