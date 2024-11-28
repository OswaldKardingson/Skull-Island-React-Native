import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ZMain from '@components/zmain';

describe('ZMain Component', () => {
  const mockMenuPress = jest.fn();
  const mockSendPress = jest.fn();
  const mockReceivePress = jest.fn();
  const mockCenterPress = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the ZMain component when visible is true', () => {
    const { getByTestId } = render(
      <ZMain
        visible={true}
        qrScanningOpacity={0.5}
        synced={true}
        onMenuPress={mockMenuPress}
        onSendPress={mockSendPress}
        onReceivePress={mockReceivePress}
        onCenterPress={mockCenterPress}
      />
    );

    expect(getByTestId('zmain-black-background')).toBeTruthy();
    expect(getByTestId('zmain-menu-button')).toBeTruthy();
    expect(getByTestId('zmain-send-button')).toBeTruthy();
    expect(getByTestId('zmain-receive-button')).toBeTruthy();
    expect(getByTestId('zmain-center-button')).toBeTruthy();
  });

  it('does not render the ZMain component when visible is false', () => {
    const { queryByTestId } = render(
      <ZMain
        visible={false}
        qrScanningOpacity={0.5}
        synced={true}
        onMenuPress={mockMenuPress}
        onSendPress={mockSendPress}
        onReceivePress={mockReceivePress}
        onCenterPress={mockCenterPress}
      />
    );

    expect(queryByTestId('zmain-black-background')).toBeNull();
    expect(queryByTestId('zmain-menu-button')).toBeNull();
    expect(queryByTestId('zmain-send-button')).toBeNull();
    expect(queryByTestId('zmain-receive-button')).toBeNull();
    expect(queryByTestId('zmain-center-button')).toBeNull();
  });

  it('calls the onMenuPress function when the menu button is pressed', () => {
    const { getByTestId } = render(
      <ZMain
        visible={true}
        qrScanningOpacity={0.5}
        synced={true}
        onMenuPress={mockMenuPress}
        onSendPress={mockSendPress}
        onReceivePress={mockReceivePress}
        onCenterPress={mockCenterPress}
      />
    );

    fireEvent.press(getByTestId('zmain-menu-button'));
    expect(mockMenuPress).toHaveBeenCalledTimes(1);
  });

  it('calls the onSendPress function when the send button is pressed', () => {
    const { getByTestId } = render(
      <ZMain
        visible={true}
        qrScanningOpacity={0.5}
        synced={true}
        onMenuPress={mockMenuPress}
        onSendPress={mockSendPress}
        onReceivePress={mockReceivePress}
        onCenterPress={mockCenterPress}
      />
    );

    fireEvent.press(getByTestId('zmain-send-button'));
    expect(mockSendPress).toHaveBeenCalledTimes(1);
  });

  it('calls the onReceivePress function when the receive button is pressed', () => {
    const { getByTestId } = render(
      <ZMain
        visible={true}
        qrScanningOpacity={0.5}
        synced={true}
        onMenuPress={mockMenuPress}
        onSendPress={mockSendPress}
        onReceivePress={mockReceivePress}
        onCenterPress={mockCenterPress}
      />
    );

    fireEvent.press(getByTestId('zmain-receive-button'));
    expect(mockReceivePress).toHaveBeenCalledTimes(1);
  });

  it('calls the onCenterPress function when the center button is pressed', () => {
    const { getByTestId } = render(
      <ZMain
        visible={true}
        qrScanningOpacity={0.5}
        synced={true}
        onMenuPress={mockMenuPress}
        onSendPress={mockSendPress}
        onReceivePress={mockReceivePress}
        onCenterPress={mockCenterPress}
      />
    );

    fireEvent.press(getByTestId('zmain-center-button'));
    expect(mockCenterPress).toHaveBeenCalledTimes(1);
  });

  it('displays the correct sync status text', () => {
    const { getByText, rerender } = render(
      <ZMain
        visible={true}
        qrScanningOpacity={0.5}
        synced={true}
        onMenuPress={mockMenuPress}
        onSendPress={mockSendPress}
        onReceivePress={mockReceivePress}
        onCenterPress={mockCenterPress}
      />
    );

    expect(getByText('Synced')).toBeTruthy();

    rerender(
      <ZMain
        visible={true}
        qrScanningOpacity={0.5}
        synced={false}
        onMenuPress={mockMenuPress}
        onSendPress={mockSendPress}
        onReceivePress={mockReceivePress}
        onCenterPress={mockCenterPress}
      />
    );

    expect(getByText('Not Synced')).toBeTruthy();
  });

  it('renders QR background with correct opacity', () => {
    const { getByTestId } = render(
      <ZMain
        visible={true}
        qrScanningOpacity={0.8}
        synced={true}
        onMenuPress={mockMenuPress}
        onSendPress={mockSendPress}
        onReceivePress={mockReceivePress}
        onCenterPress={mockCenterPress}
      />
    );

    const blackBackground = getByTestId('zmain-black-background');
    expect(blackBackground.props.style[1].opacity).toBe(0.8);
  });
});
