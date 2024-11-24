import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Sidebar = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Sidebar Navigation</Text>
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
