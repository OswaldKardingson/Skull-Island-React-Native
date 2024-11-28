import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';
import ZAddressList from '@components/zaddressList';

const theme = { width: 360, height: 640 };

const mockAddresses = [
  { id: '1', label: 'Home', value: '123 Main St', details: 'Primary Address' },
  { id: '2', label: 'Work', value: '456 Office Blvd', details: 'Secondary Address' },
];

describe('ZAddressList Component', () => {
  const mockOnAddressPress = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the address list container', () => {
    const { getByTestId } = render(
      <ZAddressList theme={theme} addresses={mockAddresses} onAddressPress={mockOnAddressPress} />
    );
    expect(getByTestId('z-address-list')).toBeTruthy();
  });

  it('renders each address item', () => {
    const { getByTestId } = render(
      <ZAddressList theme={theme} addresses={mockAddresses} onAddressPress={mockOnAddressPress} />
    );
    mockAddresses.forEach((address) => {
      expect(getByTestId(`z-address-list-item-${address.id}`)).toBeTruthy();
      expect(getByTestId(`z-address-list-label-${address.id}`)).toHaveTextContent(address.label);
      expect(getByTestId(`z-address-list-value-${address.id}`)).toHaveTextContent(address.value);
      expect(getByTestId(`z-address-list-details-${address.id}`)).toHaveTextContent(address.details);
    });
  });

  it('calls onAddressPress when an address is pressed', () => {
    const { getByTestId } = render(
      <ZAddressList theme={theme} addresses={mockAddresses} onAddressPress={mockOnAddressPress} />
    );
    fireEvent.press(getByTestId('z-address-list-item-1'));
    expect(mockOnAddressPress).toHaveBeenCalledWith(mockAddresses[0]);

    fireEvent.press(getByTestId('z-address-list-item-2'));
    expect(mockOnAddressPress).toHaveBeenCalledWith(mockAddresses[1]);
  });

  it('handles empty address list gracefully', () => {
    const { queryByTestId } = render(
      <ZAddressList theme={theme} addresses={[]} onAddressPress={mockOnAddressPress} />
    );
    expect(queryByTestId('z-address-list-list')).toBeTruthy();
  });
});
