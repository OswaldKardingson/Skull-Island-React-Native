import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Define the props interface
interface NavBarProps {
  title?: string; // Optional title for the NavBar
  backgroundColor?: string; // Optional background color
  textColor?: string; // Optional text color
  testID?: string; // Optional test ID for testing
}

const NavBar: React.FC<NavBarProps> = ({
  title = 'NavBar',
  backgroundColor = 'gray',
  textColor = 'white',
  testID = 'navbar',
}) => (
  <View style={[styles.container, { backgroundColor }]} testID={testID}>
    <Text style={[styles.text, { color: textColor }]} testID={`${testID}-title`}>
      {title}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default NavBar;
