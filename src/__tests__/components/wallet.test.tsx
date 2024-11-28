import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Wallet from '@components/wallet';

const theme = { width: 360, height: 640 };

describe('Wallet Component', () => {
  const mockOnPassphraseChange = jest.fn();
  const mockOnHeightChange = jest.fn();
  const mockOnNewWalletPress = jest.fn();
  const mockOnRecoverWalletPress = jest.fn();

  const defaultProps = {
    theme,
    qrScanning: false,
    title: 'My Wallet',
    passphrase: '',
    heightValue: '',
    onPassphraseChange: mockOnPassphraseChange,
    onHeightChange: mockOnHeightChange,
    onNewWalletPress: mockOnNewWalletPress,
    onRecoverWalletPress: mockOnRecoverWalletPress,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the wallet container with title', () => {
    const { getByTestId } = render(<Wallet {...defaultProps} />);
    expect(getByTestId('wallet-container')).toBeTruthy();
    expect(getByTestId('wallet-container-title').props.children).toBe('My Wallet');
  });

  it('displays the passphrase input area', () => {
    const { getByTestId } = render(<Wallet {...defaultProps} />);
    const passphraseInput = getByTestId('wallet-container-passphrase-input');
    expect(passphraseInput).toBeTruthy();
    expect(passphraseInput.props.placeholder).toBe('Enter your passphrase');
  });

  it('calls onPassphraseChange when passphrase input changes', () => {
    const { getByTestId } = render(<Wallet {...defaultProps} />);
    const passphraseInput = getByTestId('wallet-container-passphrase-input');
    fireEvent.changeText(passphraseInput, 'New Passphrase');
    expect(mockOnPassphraseChange).toHaveBeenCalledWith('New Passphrase');
  });

  it('displays the height input area', () => {
    const { getByTestId } = render(<Wallet {...defaultProps} />);
    const heightInput = getByTestId('wallet-container-height-input');
    expect(heightInput).toBeTruthy();
    expect(heightInput.props.placeholder).toBe('Enter height');
  });

  it('calls onHeightChange when height input changes', () => {
    const { getByTestId } = render(<Wallet {...defaultProps} />);
    const heightInput = getByTestId('wallet-container-height-input');
    fireEvent.changeText(heightInput, '12345');
    expect(mockOnHeightChange).toHaveBeenCalledWith('12345');
  });

  it('renders the "Create New Wallet" button and triggers callback on press', () => {
    const { getByTestId } = render(<Wallet {...defaultProps} />);
    const newWalletButton = getByTestId('wallet-container-new-wallet');
    expect(newWalletButton).toBeTruthy();
    fireEvent.press(newWalletButton);
    expect(mockOnNewWalletPress).toHaveBeenCalledTimes(1);
  });

  it('renders the "Recover Wallet" button and triggers callback on press', () => {
    const { getByTestId } = render(<Wallet {...defaultProps} />);
    const recoverWalletButton = getByTestId('wallet-container-recover-wallet');
    expect(recoverWalletButton).toBeTruthy();
    fireEvent.press(recoverWalletButton);
    expect(mockOnRecoverWalletPress).toHaveBeenCalledTimes(1);
  });

  it('adjusts visibility based on qrScanning prop', () => {
    const { getByTestId, rerender } = render(<Wallet {...defaultProps} qrScanning={true} />);
    expect(getByTestId('wallet-container').props.style.display).toBe('flex');

    rerender(<Wallet {...defaultProps} qrScanning={false} />);
    expect(getByTestId('wallet-container').props.style.display).toBe('none');
  });
});
