import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

// Define props interface for Sidebar
interface SidebarProps {
  title?: string; // Customizable title for the Sidebar
  containerStyle?: ViewStyle; // Allow overriding container styles
  textStyle?: TextStyle; // Allow overriding text styles
  testID?: string; // Identifier for testing
}

const Sidebar: React.FC<SidebarProps> = ({
  title = 'Sidebar Navigation',
  containerStyle,
  textStyle,
  testID = 'sidebar-container',
}) => (
  <View style={[styles.container, containerStyle]} testID={testID}>
    <Text style={[styles.text, textStyle]} testID={`${testID}-title`}>
      {title}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e90ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default Sidebar;
