import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ThemeContextProvider, useTheme } from '@context/ThemeContext';
import { Text, Button } from 'react-native';

// Test component to consume the ThemeContext
const TestComponent = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <>
      <Text testID="theme-mode">{isDarkMode ? 'Dark Mode' : 'Light Mode'}</Text>
      <Button testID="toggle-theme" title="Toggle Theme" onPress={toggleTheme} />
    </>
  );
};

describe('ThemeContextProvider', () => {
  it('should provide the default theme as Light Mode', () => {
    const { getByTestId } = render(
      <ThemeContextProvider>
        <TestComponent />
      </ThemeContextProvider>
    );

    const themeModeText = getByTestId('theme-mode');
    expect(themeModeText.props.children).toBe('Light Mode');
  });

  it('should toggle the theme from Light Mode to Dark Mode', () => {
    const { getByTestId } = render(
      <ThemeContextProvider>
        <TestComponent />
      </ThemeContextProvider>
    );

    const themeModeText = getByTestId('theme-mode');
    const toggleButton = getByTestId('toggle-theme');

    // Default state should be Light Mode
    expect(themeModeText.props.children).toBe('Light Mode');

    // Toggle the theme
    fireEvent.press(toggleButton);

    // Should now be Dark Mode
    expect(themeModeText.props.children).toBe('Dark Mode');
  });

  it('should toggle the theme from Dark Mode back to Light Mode', () => {
    const { getByTestId } = render(
      <ThemeContextProvider>
        <TestComponent />
      </ThemeContextProvider>
    );

    const themeModeText = getByTestId('theme-mode');
    const toggleButton = getByTestId('toggle-theme');

    // Toggle to Dark Mode
    fireEvent.press(toggleButton);
    expect(themeModeText.props.children).toBe('Dark Mode');

    // Toggle back to Light Mode
    fireEvent.press(toggleButton);
    expect(themeModeText.props.children).toBe('Light Mode');
  });
});
