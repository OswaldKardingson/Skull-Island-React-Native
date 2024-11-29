import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { AuthProvider, useAuth } from '@context/AuthContext';
import { Text, Button } from 'react-native';

const TestComponent = () => {
  const { user, login, logout } = useAuth();

  return (
    <>
      <Text testID="user-display">
        {user ? `Logged in as: ${user.username}` : 'Not logged in'}
      </Text>
      <Button title="Login" testID="login-button" onPress={() => login('TestUser')} />
      <Button title="Logout" testID="logout-button" onPress={logout} />
    </>
  );
};

describe('AuthContext', () => {
  it('should log in and log out a user', () => {
    const { getByTestId } = render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    const userDisplay = getByTestId('user-display');
    const loginButton = getByTestId('login-button');
    const logoutButton = getByTestId('logout-button');

    // Initially, no user should be logged in
    expect(userDisplay.props.children).toBe('Not logged in');

    // Log in
    fireEvent.press(loginButton);
    expect(userDisplay.props.children).toBe('Logged in as: TestUser');

    // Log out
    fireEvent.press(logoutButton);
    expect(userDisplay.props.children).toBe('Not logged in');
  });
});
