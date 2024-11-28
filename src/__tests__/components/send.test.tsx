import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import { View } from 'react-native';
import Send from '@components/send';

// Mock Theme
const mockTheme = {
  width: 400,
  height: 800,
  primaryColor: '#bb9645',
};

// Mock Props
const mockProps = {
  onSend: jest.fn(),
  disabled: false,
  visible: true,
  mlength: 10,
  message: 'Hello World',
  errorMessage: '',
  loading: false,
};

jest.mock('./Spinner', () => {
  return {
    __esModule: true,
    default: () => <View testID="spinner" />,
  };
});

describe('Send Component', () => {
  it('should render without crashing', () => {
    render(
      <ThemeProvider theme={mockTheme}>
        <Send {...mockProps} />
      </ThemeProvider>
    );
    expect(screen.getByTestId('container')).toBeTruthy();
  });

  it('should hide components when not visible', () => {
    render(
      <ThemeProvider theme={mockTheme}>
        <Send {...mockProps} visible={false} />
      </ThemeProvider>
    );
    expect(screen.queryByTestId('container')).toBeNull();
  });

  it('should call onSend when the button is pressed', () => {
    render(
      <ThemeProvider theme={mockTheme}>
        <Send {...mockProps} />
      </ThemeProvider>
    );
    const button = screen.getByTestId('send-button');
    fireEvent.press(button);
    expect(mockProps.onSend).toHaveBeenCalled();
  });

  it('should display the spinner when loading is true', () => {
    render(
      <ThemeProvider theme={mockTheme}>
        <Send {...mockProps} loading={true} />
      </ThemeProvider>
    );
    expect(screen.getByTestId('spinner')).toBeTruthy();
  });

  it('should render the correct message text', () => {
    const customProps = {
      ...mockProps,
      message: 'Test Message',
    };
    render(
      <ThemeProvider theme={mockTheme}>
        <Send {...customProps} />
      </ThemeProvider>
    );
    expect(screen.getByText('Test Message')).toBeTruthy();
  });

  it('should render the error message when provided', () => {
    const customProps = {
      ...mockProps,
      errorMessage: 'Error occurred!',
    };
    render(
      <ThemeProvider theme={mockTheme}>
        <Send {...customProps} />
      </ThemeProvider>
    );
    expect(screen.getByText('Error occurred!')).toBeTruthy();
  });
});
