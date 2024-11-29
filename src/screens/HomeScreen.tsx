import React from 'react';
import { View, Text, Button, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

// Define the navigation stack type
type RootStackParamList = {
  Detail: undefined;
};

// Define props for HomeScreen
interface HomeScreenProps {
  navigation: StackNavigationProp<RootStackParamList, 'Detail'>;
  testID?: string; // Optional test ID prop for testing
}

// Component
const HomeScreen: React.FC<HomeScreenProps> = ({ navigation, testID = 'home-screen' }) => (
  <View style={styles.container} testID={testID}>
    <Text style={styles.text}>Home Screen</Text>
    <Button title="Go to Details" onPress={() => navigation.navigate('Detail')} />
  </View>
);

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,

  text: {
    fontSize: 18,
    fontWeight: 'bold',
  } as TextStyle,
});

export default HomeScreen;
