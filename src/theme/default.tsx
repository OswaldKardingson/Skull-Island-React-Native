import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

// Define the shape of the theme properties
export interface Theme {
  height: number;
  width: number;
  topBuffer: number;
  bottomBuffer: number;
}

// Define the screen size constants
export const SCREEN_SIZE = {
  height: (props: { theme: Theme }) => props.theme.height,
  width: (props: { theme: Theme }) => props.theme.width,
  topBuffer: (props: { theme: Theme }) => props.theme.topBuffer,
  bottomBuffer: (props: { theme: Theme }) => props.theme.bottomBuffer,
};

// Example Component for demonstration
interface ScreenProps {
  theme: Theme; // Props should include the theme
  testID?: string; // Optional testID for testing
}

const Screen: React.FC<ScreenProps> = ({ theme, testID = 'screen-component' }) => {
  return (
    <View style={styles.container} testID={testID}>
      <Text testID={`${testID}-height`}>Height: {SCREEN_SIZE.height({ theme })}</Text>
      <Text testID={`${testID}-width`}>Width: {SCREEN_SIZE.width({ theme })}</Text>
      <Text testID={`${testID}-topBuffer`}>Top Buffer: {SCREEN_SIZE.topBuffer({ theme })}</Text>
      <Text testID={`${testID}-bottomBuffer`}>Bottom Buffer: {SCREEN_SIZE.bottomBuffer({ theme })}</Text>
    </View>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  } as TextStyle,
});

export default Screen;
