import React from 'react';
import { View } from 'react-native';
import { render } from '@testing-library/react-native';
import * as Redux from 'react-redux';
import MainPage from '@pages/mainpage';

// Mock the components that MainPage uses
jest.mock('../containers/chainsync', () => () => <View testID="chainsync" />);
jest.mock('../containers/lowerbar', () => () => <View testID="lowerbar" />);
jest.mock('../containers/zmain', () => () => <View testID="zmain" />);
jest.mock('../containers/send', () => () => <View testID="send" />);
jest.mock('../containers/receive', () => () => <View testID="receive" />);
jest.mock('../containers/privatekey', () => () => <View testID="privatekey" />);
jest.mock('../containers/passphrase', () => () => <View testID="passphrase" />);
jest.mock('../containers/reindex', () => () => <View testID="reindex" />);
jest.mock('../containers/qr', () => () => <View testID="qr" />);
jest.mock('../containers/ztransaction', () => () => <View testID="ztransaction" />);
jest.mock('../containers/reconnect', () => () => <View testID="reconnect" />);

// Mock react-redux hooks with proper typings
const mockUseSelector = jest.spyOn(Redux, 'useSelector');
const mockUseDispatch = jest.spyOn(Redux, 'useDispatch');

describe('MainPage Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the main page with ChainOps and ZMain when mainPage is visible', () => {
    mockUseSelector
      .mockReturnValueOnce({ qrScanning: false }) // Mock context
      .mockReturnValueOnce({ mainPage: 'visible' }); // Mock mainSubPage

    const { getByTestId } = render(<MainPage />);

    expect(getByTestId('chainsync')).toBeTruthy();
    expect(getByTestId('zmain')).toBeTruthy();
    expect(getByTestId('lowerbar')).toBeTruthy();
    expect(getByTestId('send')).toBeTruthy();
  });

  it('renders the receive page when receivePage is visible', () => {
    mockUseSelector
      .mockReturnValueOnce({ qrScanning: false }) // Mock context
      .mockReturnValueOnce({ receivePage: 'visible' }); // Mock mainSubPage

    const { getByTestId } = render(<MainPage />);

    expect(getByTestId('receive')).toBeTruthy();
  });

  it('renders the private key page when privateKeyPage is visible', () => {
    mockUseSelector
      .mockReturnValueOnce({ qrScanning: false }) // Mock context
      .mockReturnValueOnce({ privateKeyPage: 'visible' }); // Mock mainSubPage

    const { getByTestId } = render(<MainPage />);

    expect(getByTestId('privatekey')).toBeTruthy();
  });

  it('renders the passphrase page when passPhrasePage is visible', () => {
    mockUseSelector
      .mockReturnValueOnce({ qrScanning: false }) // Mock context
      .mockReturnValueOnce({ passPhrasePage: 'visible' }); // Mock mainSubPage

    const { getByTestId } = render(<MainPage />);

    expect(getByTestId('passphrase')).toBeTruthy();
  });

  it('renders the reindex page when reindexPage is visible', () => {
    mockUseSelector
      .mockReturnValueOnce({ qrScanning: false }) // Mock context
      .mockReturnValueOnce({ reindexPage: 'visible' }); // Mock mainSubPage

    const { getByTestId } = render(<MainPage />);

    expect(getByTestId('reindex')).toBeTruthy();
  });

  it('renders the transaction page when transactionPage is visible', () => {
    mockUseSelector
      .mockReturnValueOnce({ qrScanning: false }) // Mock context
      .mockReturnValueOnce({ transactionPage: 'visible' }); // Mock mainSubPage

    const { getByTestId } = render(<MainPage />);

    expect(getByTestId('ztransaction')).toBeTruthy();
  });

  it('renders the reconnect page when reconnectPage is visible', () => {
    mockUseSelector
      .mockReturnValueOnce({ qrScanning: false }) // Mock context
      .mockReturnValueOnce({ reconnectPage: 'visible' }); // Mock mainSubPage

    const { getByTestId } = render(<MainPage />);

    expect(getByTestId('reconnect')).toBeTruthy();
  });

  it('renders the QR component always', () => {
    mockUseSelector
      .mockReturnValueOnce({ qrScanning: false }) // Mock context
      .mockReturnValueOnce({ mainPage: 'visible' }); // Mock mainSubPage

    const { getByTestId } = render(<MainPage />);

    expect(getByTestId('qr')).toBeTruthy();
  });

  it('hides the main body when qrScanning is true', () => {
    mockUseSelector
      .mockReturnValueOnce({ qrScanning: true }) // Mock context
      .mockReturnValueOnce({ mainPage: 'visible' }); // Mock mainSubPage

    const { queryByTestId } = render(<MainPage />);

    expect(queryByTestId('chainsync')).toBeNull(); // Should not render main body components
  });
});
