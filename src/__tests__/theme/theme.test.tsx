import React from 'react';
import { render } from '@testing-library/react-native';
import ThemePreview, { lightTheme, darkTheme } from '@theme/theme';

describe('ThemePreview Component', () => {
  it('renders the light theme correctly', () => {
    const { getByTestId } = render(<ThemePreview theme={lightTheme} testID="light-theme" />);

    expect(getByTestId('light-theme-primary').props.children).toContain(lightTheme.colors.primary);
    expect(getByTestId('light-theme-accent').props.children).toContain(lightTheme.colors.accent);
    expect(getByTestId('light-theme-background').props.children).toContain(lightTheme.colors.background);
    expect(getByTestId('light-theme-border-radius').props.children).toContain(
      lightTheme.dimensions.borderRadius
    );
  });

  it('renders the dark theme correctly', () => {
    const { getByTestId } = render(<ThemePreview theme={darkTheme} testID="dark-theme" />);

    expect(getByTestId('dark-theme-primary').props.children).toContain(darkTheme.colors.primary);
    expect(getByTestId('dark-theme-accent').props.children).toContain(darkTheme.colors.accent);
    expect(getByTestId('dark-theme-background').props.children).toContain(darkTheme.colors.background);
    expect(getByTestId('dark-theme-border-radius').props.children).toContain(
      darkTheme.dimensions.borderRadius
    );
  });
});
