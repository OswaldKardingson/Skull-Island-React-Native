export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  text: string;
  background: string;
}

export interface ThemeDimensions {
  borderRadius: number;
}

export interface Theme {
  colors: ThemeColors;
  dimensions: ThemeDimensions;
}

// Light Theme
export const lightTheme: Theme = {
  colors: {
    primary: '#ffffff',
    secondary: '#111111',
    accent: '#bb9645',
    text: '#000000',
    background: '#f5f5f5',
  },
  dimensions: {
    borderRadius: 8,
  },
};

// Dark Theme
export const darkTheme: Theme = {
  colors: {
    primary: '#000000',
    secondary: '#222222',
    accent: '#ffd700',
    text: '#ffffff',
    background: '#121212',
  },
  dimensions: {
    borderRadius: 8,
  },
};

// Example Component to Demonstrate Usage
import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface ThemeProps {
  theme: Theme;
  testID?: string; // For testing purposes
}

const ThemePreview: React.FC<ThemeProps> = ({ theme, testID = 'theme-preview' }) => (
  <View style={[styles.container, { backgroundColor: theme.colors.background }]} testID={testID}>
    <Text style={[styles.text, { color: theme.colors.text }]} testID={`${testID}-primary`}>
      Primary Color: {theme.colors.primary}
    </Text>
    <Text style={[styles.text, { color: theme.colors.text }]} testID={`${testID}-accent`}>
      Accent Color: {theme.colors.accent}
    </Text>
    <Text style={[styles.text, { color: theme.colors.text }]} testID={`${testID}-background`}>
      Background Color: {theme.colors.background}
    </Text>
    <Text style={[styles.text, { color: theme.colors.text }]} testID={`${testID}-border-radius`}>
      Border Radius: {theme.dimensions.borderRadius}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 8,
  } as TextStyle,
});

export default ThemePreview;
