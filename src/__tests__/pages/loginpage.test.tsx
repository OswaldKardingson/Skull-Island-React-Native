import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { useSelector, useDispatch } from 'react-redux';
import LoginPage from '@pages/loginpage';
import { setActivePassword } from '@actions/Context';

// Mock Redux
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

jest.mock('../utils/hash', () => ({
  saltHashPassword: jest.fn(() => 'hashedPassword'), // Mock the hash function
  PwSalt: 'mockSalt',
}));

jest.mock('../actions/Context', () => ({
  setActivePassword: jest.fn(),
}));

describe('LoginPage', () => {
  const mockDispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useDispatch as jest.MockedFunction<typeof useDispatch>).mockReturnValue(mockDispatch);
    (useSelector as jest.MockedFunction<typeof useSelector>).mockReturnValue({ password: 'hashedPassword' });
  });

  it('renders the LoginPage correctly', () => {
    const { getByTestId } = render(<LoginPage onComplete={jest.fn()} />);

    expect(getByTestId('login-page')).toBeTruthy();
    expect(getByTestId('login-title')).toHaveTextContent('Wallet Login');
    expect(getByTestId('password-title')).toHaveTextContent('Password:');
    expect(getByTestId('password-input')).toBeTruthy();
  });

  it('handles password input correctly', () => {
    const { getByTestId } = render(<LoginPage onComplete={jest.fn()} />);

    const passwordInput = getByTestId('password-input');
    fireEvent.changeText(passwordInput, 'mypassword');

    expect(passwordInput.props.value).toBe('mypassword');
  });

  it('shows an error for invalid passwords', () => {
    const { getByTestId, queryByTestId } = render(<LoginPage onComplete={jest.fn()} />);

    const passwordInput = getByTestId('password-input');
    fireEvent.changeText(passwordInput, 'wrongpassword');

    const invalidPasswordText = queryByTestId('invalid-password-text');
    expect(invalidPasswordText).toBeTruthy();
    expect(invalidPasswordText).toHaveTextContent('Invalid Password. Try Again.');
  });

  it('calls onComplete on successful login', () => {
    const mockOnComplete = jest.fn();
    const { getByTestId } = render(<LoginPage onComplete={mockOnComplete} />);

    const passwordInput = getByTestId('password-input');
    fireEvent.changeText(passwordInput, 'correctpassword');

    const loginButton = getByTestId('login-button');
    fireEvent.press(loginButton);

    expect(mockOnComplete).toHaveBeenCalledTimes(1);
    expect(mockDispatch).toHaveBeenCalledWith(setActivePassword('correctpassword'));
  });

  it('does not call onComplete for mismatched passwords', () => {
    const mockOnComplete = jest.fn();
    const { getByTestId } = render(<LoginPage onComplete={mockOnComplete} />);

    const passwordInput = getByTestId('password-input');
    fireEvent.changeText(passwordInput, 'password1');

    const loginButton = getByTestId('login-button');
    fireEvent.press(loginButton);

    expect(mockOnComplete).not.toHaveBeenCalled();
    expect(mockDispatch).not.toHaveBeenCalled();
  });
});
