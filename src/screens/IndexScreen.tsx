import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface IndexScreenProps {
  testID?: string; // Optional testID for testing purposes
}

const IndexScreen: React.FC<IndexScreenProps> = ({ testID }) => {
  return (
    <View style={styles.container} testID={testID}>
      <Text style={styles.title}>Welcome to Skull Island</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Bai Jamjuree',
    textAlign: 'center',
  },
});

export default IndexScreen;
