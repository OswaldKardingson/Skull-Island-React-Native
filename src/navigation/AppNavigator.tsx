import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';

// Define type for stack navigator parameters
export type RootStackParamList = {
  Home: undefined; // No params for Home
  Detail: { id: number }; // Example param for Detail screen
};

const Stack = createStackNavigator<RootStackParamList>();

// Props for AppNavigator (can be extended if needed)
interface AppNavigatorProps {
  initialRouteName?: keyof RootStackParamList; // Optional initial route
}

const AppNavigator: React.FC<AppNavigatorProps> = ({ initialRouteName = 'Home' }) => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        headerShown: true, // Default options, can be customized
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Home Screen', headerTestID: 'home-header' }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={({ route }) => ({
          title: `Detail Screen - ${route.params?.id || ''}`, // Display ID if passed
          headerTestID: 'detail-header',
        })}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
