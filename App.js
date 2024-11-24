import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { AuthProvider } from './context/AuthContext';
import store from './store/store';
import AppNavigator from './navigation/AppNavigator'; // Assuming you have AppNavigator set up for navigation

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </AuthProvider>
    </Provider>
  );
};

export default App;
