import React, { createContext, useState, useContext, ReactNode } from 'react';
import { View } from 'react-native';

// Define the type for the user object
interface User {
  username: string;
}

// Define the context's value structure
interface AuthContextValue {
  user: User | null;
  login: (username: string) => void;
  logout: () => void;
}

// Create the AuthContext with a default null value
const AuthContext = createContext<AuthContextValue | undefined>(undefined);

// Define the props for the AuthProvider component
interface AuthProviderProps {
  children: ReactNode;
}

// Create the AuthProvider component
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (username: string) => setUser({ username });
  const logout = () => setUser(null);

  return (
    <View testID="auth-provider">
      <AuthContext.Provider value={{ user, login, logout }}>
        {children}
      </AuthContext.Provider>
    </View>
  );
};

// Custom hook to use the AuthContext
export const useAuth = (): AuthContextValue => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
