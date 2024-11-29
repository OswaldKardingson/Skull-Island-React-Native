import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import SetPasswordPage from '@pages/setpasswordpage';

const mockStore = configureStore([]);
const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockDispatch,
}));

jest.mock('../utils/hash', () => ({
  saltHashPassword: jest.fn((password, salt) => `hashed_${password}_${salt}`),
  PwSalt: 'test_salt',
}));

jest.mock('@actions/Settings', () => ({
  setWalletPassword: jest.fn((pwHash) => ({ type: 'SET_WALLET_PASSWORD', payload: pwHash })),
}));

jest.mock('@actions/Context', () => ({
  setActivePassword: jest.fn((password) => ({ type: 'SET_ACTIVE_PASSWORD', payload: password })),
}));

describe('SetPasswordPage', () => {
  let store: any;
  let onComplete: jest.Mock;

  beforeEach(() => {
    store = mockStore({
      context: {},
    });
    onComplete = jest.fn();
  });

  it('renders the component correctly', () => {
    const { getByText, getByPlaceholderText } = render(
      <Provider store={store}>
        <SetPasswordPage onComplete={onComplete} />
      </Provider>
    );

    expect(getByText('Set Wallet Password')).toBeTruthy();
    expect(getByPlaceholderText('Enter new password')).toBeTruthy();
    expect(getByPlaceholderText('Confirm password')).toBeTruthy();
  });

  it('validates password length correctly', () => {
    const { getByPlaceholderText, getByText } = render(
      <Provider store={store}>
        <SetPasswordPage onComplete={onComplete} />
      </Provider>
    );

    const newPasswordInput = getByPlaceholderText('Enter new password');
    fireEvent.changeText(newPasswordInput, 'short');

    expect(getByText('Must be at least 8 characters')).toBeTruthy();
  });

  it('confirms matching passwords correctly', () => {
    const { getByPlaceholderText, queryByText } = render(
      <Provider store={store}>
        <SetPasswordPage onComplete={onComplete} />
      </Provider>
    );

    const newPasswordInput = getByPlaceholderText('Enter new password');
    const confirmPasswordInput = getByPlaceholderText('Confirm password');

    fireEvent.changeText(newPasswordInput, 'validpassword');
    fireEvent.changeText(confirmPasswordInput, 'validpassword');

    expect(queryByText('Confirmation invalid')).toBeNull();
  });

  it('shows error when passwords do not match', () => {
    const { getByPlaceholderText, getByText } = render(
      <Provider store={store}>
        <SetPasswordPage onComplete={onComplete} />
      </Provider>
    );

    const newPasswordInput = getByPlaceholderText('Enter new password');
    const confirmPasswordInput = getByPlaceholderText('Confirm password');

    fireEvent.changeText(newPasswordInput, 'validpassword');
    fireEvent.changeText(confirmPasswordInput, 'wrongpassword');

    expect(getByText('Confirmation invalid')).toBeTruthy();
  });

  it('dispatches actions and calls onComplete when valid password is set', async () => {
    const { getByPlaceholderText, getByText } = render(
      <Provider store={store}>
        <SetPasswordPage onComplete={onComplete} />
      </Provider>
    );

    const newPasswordInput = getByPlaceholderText('Enter new password');
    const confirmPasswordInput = getByPlaceholderText('Confirm password');
    const setPasswordButton = getByText('Set Password');

    fireEvent.changeText(newPasswordInput, 'validpassword');
    fireEvent.changeText(confirmPasswordInput, 'validpassword');

    fireEvent.press(setPasswordButton);

    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledWith(
        expect.objectContaining({ type: 'SET_WALLET_PASSWORD' })
      );
      expect(mockDispatch).toHaveBeenCalledWith(
        expect.objectContaining({ type: 'SET_ACTIVE_PASSWORD' })
      );
      expect(onComplete).toHaveBeenCalled();
    });
  });

  it('toggles password visibility', () => {
    const { getByPlaceholderText, getByTestId } = render(
      <Provider store={store}>
        <SetPasswordPage onComplete={onComplete} />
      </Provider>
    );

    const newPasswordInput = getByPlaceholderText('Enter new password');
    const toggleButton = getByTestId('toggle-visibility');

    fireEvent.press(toggleButton);

    // Verify visibility toggles (secureTextEntry prop changes)
    expect(newPasswordInput.props.secureTextEntry).toBeFalsy();
  });
});
