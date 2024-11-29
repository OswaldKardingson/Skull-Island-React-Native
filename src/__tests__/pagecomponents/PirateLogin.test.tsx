import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import PirateLogin from '@pagecomponents/PirateLogin';

describe('PirateLogin Component', () => {
  const mockOnLogin = jest.fn();

  it('renders correctly', () => {
    const { getByTestId, getByText } = render(
      <PirateLogin onLogin={mockOnLogin} errorMessage="" />
    );

    expect(getByTestId('pirate-login')).toBeTruthy();
    expect(getByTestId('login-title')).toHaveTextContent('Pirate Login');
    expect(getByTestId('login-description')).toHaveTextContent(
      'Enter your password to access your account.'
    );
    expect(getByTestId('password-input')).toBeTruthy();
    expect(getByTestId('confirm-password-input')).toBeTruthy();
    expect(getByTestId('login-button')).toBeTruthy();
    expect(getByText('Login')).toBeTruthy();
  });

  it('toggles password visibility', () => {
    const { getByTestId, getByLabelText } = render(
      <PirateLogin onLogin={mockOnLogin} errorMessage="" />
    );

    const toggleButton = getByTestId('toggle-password-visibility');
    expect(toggleButton).toBeTruthy();

    fireEvent.press(toggleButton);
    // Add assertions if needed to check visibility
  });

  it('calls onLogin when passwords match', () => {
    const { getByTestId } = render(
      <PirateLogin onLogin={mockOnLogin} errorMessage="" />
    );

    const passwordInput = getByTestId('password-input');
    const confirmPasswordInput = getByTestId('confirm-password-input');
    const loginButton = getByTestId('login-button');

    fireEvent.changeText(passwordInput, 'testPassword');
    fireEvent.changeText(confirmPasswordInput, 'testPassword');
    fireEvent.press(loginButton);

    expect(mockOnLogin).toHaveBeenCalledWith('testPassword');
  });

  it('does not call onLogin when passwords do not match', () => {
    const { getByTestId } = render(
      <PirateLogin onLogin={mockOnLogin} errorMessage="" />
    );

    const passwordInput = getByTestId('password-input');
    const confirmPasswordInput = getByTestId('confirm-password-input');
    const loginButton = getByTestId('login-button');

    fireEvent.changeText(passwordInput, 'testPassword');
    fireEvent.changeText(confirmPasswordInput, 'differentPassword');
    fireEvent.press(loginButton);

    expect(mockOnLogin).not.toHaveBeenCalled();
  });

  it('displays error message when provided', () => {
    const errorMessage = 'Invalid Password. Try Again.';
    const { getByTestId } = render(
      <PirateLogin onLogin={mockOnLogin} errorMessage={errorMessage} />
    );

    const errorText = getByTestId('error-message');
    expect(errorText).toBeTruthy();
    expect(errorText).toHaveTextContent(errorMessage);
  });
});
