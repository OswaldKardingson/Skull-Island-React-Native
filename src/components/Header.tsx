import React from 'react';
import { View, Text, StyleSheet, StyleProp, ViewStyle, TextStyle } from 'react-native';

interface HeaderProps {
  title?: string; // Optional title for the header
  backgroundColor?: string; // Optional background color for the header
  textColor?: string; // Optional text color for the title
}

const Header: React.FC<HeaderProps> = ({
  title = 'Header Component',
  backgroundColor = '#0000FF', // Default blue background
  textColor = '#FFFFFF', // Default white text color
}) => (
  <View
    style={[styles.container, { backgroundColor }]}
    testID="header-container"
  >
    <Text
      style={[styles.title, { color: textColor }]}
      testID="header-title"
      accessibilityLabel="Header Title"
    >
      {title}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC', // Subtle border for separation
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Header;
