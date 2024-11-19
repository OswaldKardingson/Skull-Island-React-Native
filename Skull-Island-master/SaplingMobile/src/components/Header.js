import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Header Component</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: 'blue' },
  title: { color: 'white', fontSize: 20 }
});

export default Header;
