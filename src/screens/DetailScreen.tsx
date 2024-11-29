import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

// Define props interface
interface DetailScreenProps {
  title: string;
  testID?: string; // Optional prop for test ID
}

// Component
const DetailScreen: React.FC<DetailScreenProps> = ({ title, testID = 'detail-screen' }) => (
  <View style={styles.container} testID={testID}>
    <Text style={styles.text}>{title}</Text>
  </View>
);

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle, // Explicit typing for ViewStyle

  text: {
    fontSize: 18,
    fontWeight: 'bold',
  } as TextStyle, // Explicit typing for TextStyle
});

export default DetailScreen;
