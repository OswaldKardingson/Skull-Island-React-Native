import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { lightTheme, darkTheme } from '../theme';

// Define the shape of the context
interface ThemeContextProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

// Helper noop function
const noop = () => {};

// Create the context with a default value
const ThemeContext = createContext<ThemeContextProps>({
  isDarkMode: false,
  toggleTheme: noop,
});

// Custom hook for accessing the theme context
export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeContextProvider');
  }
  return context;
};

// Define props for ThemeContextProvider
interface ThemeContextProviderProps {
  children: React.ReactNode;
}

// Provider component to manage theme state
export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
