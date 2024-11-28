import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TransactionList from '@components/transactionList';


const theme = { width: 360, height: 640 };
const mockTransactions = [
  {
    id: '1',
    memo: 'Payment Received',
    inbound: true,
    amount: '$100',
    date: '2024-11-28',
    icon: 'https://example.com/inbound-icon.png',
  },
  {
    id: '2',
    memo: 'Bill Payment',
    inbound: false,
    amount: '$50',
    date: '2024-11-27',
    icon: null,
  },
];

describe('TransactionList Component', () => {
  it('renders the transaction list container', () => {
    const { getByTestId } = render(
      <TransactionList theme={theme} transactions={mockTransactions} onMemoPress={jest.fn()} />
    );
    expect(getByTestId('transaction-list-container')).toBeTruthy();
  });

  it('renders each transaction item', () => {
    const { getByTestId } = render(
      <TransactionList theme={theme} transactions={mockTransactions} onMemoPress={jest.fn()} />
    );
    mockTransactions.forEach((transaction) => {
      expect(
        getByTestId(`transaction-list-container-transaction-${transaction.id}`)
      ).toBeTruthy();
    });
  });

  it('renders transaction icons or placeholders', () => {
    const { getByTestId } = render(
      <TransactionList theme={theme} transactions={mockTransactions} onMemoPress={jest.fn()} />
    );
    expect(getByTestId('transaction-list-container-icon-1')).toBeTruthy();
    expect(getByTestId('transaction-list-container-placeholder-icon-2')).toBeTruthy();
  });

  it('calls onMemoPress when a transaction is pressed', () => {
    const mockOnMemoPress = jest.fn();
    const { getByTestId } = render(
      <TransactionList theme={theme} transactions={mockTransactions} onMemoPress={mockOnMemoPress} />
    );
    fireEvent.press(getByTestId('transaction-list-container-transaction-1'));
    expect(mockOnMemoPress).toHaveBeenCalledWith(mockTransactions[0]);
  });

  it('renders transaction details correctly', () => {
    const { getByText } = render(
      <TransactionList theme={theme} transactions={mockTransactions} onMemoPress={jest.fn()} />
    );
    mockTransactions.forEach((transaction) => {
      expect(getByText(transaction.memo)).toBeTruthy();
      expect(getByText(transaction.amount)).toBeTruthy();
      expect(getByText(transaction.date)).toBeTruthy();
    });
  });
});
