module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'eslint:recommended', // Core ESLint recommended rules
    'prettier', // Use Prettier for code formatting
  ],
  plugins: ['@typescript-eslint', 'react', 'react-native'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Enable JSX syntax
    },
    ecmaVersion: 2020, // Use latest ECMAScript features
    sourceType: 'module',
  },
  rules: {
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // Ignore unused variables starting with _
    '@typescript-eslint/no-explicit-any': 'warn', // Warn on `any` type
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Turn off explicit return types for functions
    'react/prop-types': 'off', // Disable prop-types as we use TypeScript
    'react-native/no-inline-styles': 'warn', // Warn for inline styles
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the React version
    },
  },
};
