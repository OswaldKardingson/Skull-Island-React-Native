import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, Button, View } from 'react-native';

import { AuthProvider } from './src/context/AuthContext';
import { ThemeContextProvider, useTheme } from './src/context/ThemeContext';
import store from './src/store/store';
import AppNavigator from './src/navigation/AppNavigator';

const ThemeToggleButton: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <View style={{ padding: 10 }}>
      <Button
        title={`Switch to ${isDarkMode ? 'Light' : 'Dark'} Mode`}
        onPress={toggleTheme}
      />
    </View>
  );
};

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <ThemeContextProvider>
          <NavigationContainer>
            <StatusBar
              barStyle="light-content"
              backgroundColor="#000000"
            />
            <ThemeToggleButton />
            <AppNavigator />
          </NavigationContainer>
        </ThemeContextProvider>
      </AuthProvider>
    </Provider>
  );
};

export default App;
