import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import { AuthProvider } from './src/context/AuthContext'; // Update path as needed
import store from './src/store/store'; // Update path as needed
import AppNavigator from './src/navigation/AppNavigator'; // Update path as needed

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <NavigationContainer>
          <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
          <AppNavigator />
        </NavigationContainer>
      </AuthProvider>
    </Provider>
  );
};

export default App;
