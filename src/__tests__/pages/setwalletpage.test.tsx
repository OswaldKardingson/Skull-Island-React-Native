import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import SetWalletPage from '@pages/setwalletpage';

const mockStore = configureStore([]);
const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockDispatch,
}));

jest.mock('react-native-qrcode-scanner', () => {
  const MockQRCodeScanner = ({ onRead }: { onRead: (event: { data: string }) => void }) => {
    return (
      <button
        data-testid="mock-qr-scanner"
        onClick={() =>
          onRead({
            data: JSON.stringify({ passphrase: 'mock passphrase', height: 100 }),
          })
        }
      >
        Mock QR Scanner
      </button>
    );
  };
  return MockQRCodeScanner;
});

jest.mock('react-native-spinkit', () => {
  const MockSpinner = () => <div data-testid="mock-spinner">Mock Spinner</div>;
  return MockSpinner;
});

describe('SetWalletPage', () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({
      context: { qrScanning: false, activeServer: 'mockServer', activePassword: 'mockPassword' },
      settings: { currentCoin: 'mockCoin' },
      secrets: { seedPhrase: '', birthday: 0 },
    });
  });

  it('renders the component correctly', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <SetWalletPage />
      </Provider>
    );

    expect(getByTestId('new-wallet-button')).toBeTruthy();
    expect(getByTestId('recover-wallet-button')).toBeTruthy();
  });

  it('handles QR code scanning correctly', () => {
    store = mockStore({
      ...store,
      context: { qrScanning: true },
    });

    const { getByTestId } = render(
      <Provider store={store}>
        <SetWalletPage />
      </Provider>
    );

    expect(getByTestId('mock-qr-scanner')).toBeTruthy();
  });

  it('generates a new passphrase correctly', async () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <SetWalletPage />
      </Provider>
    );

    fireEvent.press(getByTestId('new-wallet-button'));
    fireEvent.press(getByTestId('generate-new-phrase-button'));

    // Assuming the mock will set a seed phrase
    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalled();
    });
  });

  it('restores the wallet correctly', async () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <SetWalletPage />
      </Provider>
    );

    fireEvent.press(getByTestId('new-wallet-button'));
    fireEvent.press(getByTestId('create-wallet-button'));

    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalled();
    });
  });

  it('handles back navigation correctly', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <SetWalletPage />
      </Provider>
    );

    fireEvent.press(getByTestId('new-wallet-button'));
    fireEvent.press(getByTestId('back-button'));

    expect(getByTestId('new-wallet-button')).toBeTruthy();
  });

  it('renders the spinner when loading', () => {
    store = mockStore({
      ...store,
      context: { qrScanning: false },
    });

    const { getByTestId } = render(
      <Provider store={store}>
        <SetWalletPage />
      </Provider>
    );

    fireEvent.press(getByTestId('new-wallet-button'));
    fireEvent.press(getByTestId('create-wallet-button'));

    expect(getByTestId('mock-spinner')).toBeTruthy();
  });
});
