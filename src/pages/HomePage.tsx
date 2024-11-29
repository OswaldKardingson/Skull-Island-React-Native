import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface HomePageProps {
  testID?: string;
}

const HomePage: React.FC<HomePageProps> = ({ testID = 'home-page' }) => (
  <View style={styles.container} testID={testID}>
    <Text style={styles.text} testID="home-page-text">
      Welcome to the Home Page
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: '#000',
  },
});

export default HomePage;
