import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Transaction from '@components/transaction';

const theme = { width: 360, height: 640 };
const mockDetails = [
  { fieldName: 'Transaction ID', fieldData: '123456789' },
  { fieldName: 'Amount', fieldData: '$100.00' },
];

describe('Transaction Component', () => {
  it('renders the transaction container', () => {
    const { getByTestId } = render(
      <Transaction theme={theme} title="Transaction Details" details={mockDetails} onBackPress={jest.fn()} onExplorerPress={jest.fn()} />
    );
    expect(getByTestId('transaction-container')).toBeTruthy();
  });

  it('renders the title', () => {
    const { getByTestId } = render(
      <Transaction theme={theme} title="Transaction Details" details={mockDetails} onBackPress={jest.fn()} onExplorerPress={jest.fn()} />
    );
    expect(getByTestId('transaction-container-title').props.children).toBe('Transaction Details');
  });

  it('renders all details', () => {
    const { getByTestId } = render(
      <Transaction theme={theme} title="Transaction Details" details={mockDetails} onBackPress={jest.fn()} onExplorerPress={jest.fn()} />
    );
    mockDetails.forEach((detail, index) => {
      expect(getByTestId(`transaction-container-detail-${index}`).children).toBeTruthy();
    });
  });

  it('calls onBackPress when the back button is pressed', () => {
    const mockBackPress = jest.fn();
    const { getByTestId } = render(
      <Transaction theme={theme} title="Transaction Details" details={mockDetails} onBackPress={mockBackPress} onExplorerPress={jest.fn()} />
    );
    fireEvent.press(getByTestId('transaction-container-back-button'));
    expect(mockBackPress).toHaveBeenCalledTimes(1);
  });

  it('calls onExplorerPress when the explorer button is pressed', () => {
    const mockExplorerPress = jest.fn();
    const { getByTestId } = render(
      <Transaction theme={theme} title="Transaction Details" details={mockDetails} onBackPress={jest.fn()} onExplorerPress={mockExplorerPress} />
    );
    fireEvent.press(getByTestId('transaction-container-explorer-button'));
    expect(mockExplorerPress).toHaveBeenCalledTimes(1);
  });
});
