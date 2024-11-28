import React from 'react';
import { TouchableOpacity, Text, StyleSheet, StyleProp, TextStyle, ViewStyle } from 'react-native';

// Define props for the Button component
interface ButtonProps {
  onPress: () => void; // Function to handle button press
  title: string;       // Text to display inside the button
  style?: StyleProp<ViewStyle>;   // Optional custom styles for the button
  textStyle?: StyleProp<TextStyle>; // Optional custom styles for the text
}

const Button: React.FC<ButtonProps> = ({ onPress, title, style, textStyle }) => (
  <TouchableOpacity
    testID="button" // Add testID for TouchableOpacity
    style={[styles.button, style]}
    onPress={onPress}
  >
    <Text testID="button-text" style={[styles.text, textStyle]}>{title}</Text> {/* Add testID for Text */}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#1e90ff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Button;
