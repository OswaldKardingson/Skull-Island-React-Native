module.exports = {
  presets: [
    'module:metro-react-native-babel-preset', // Required for React Native
    '@babel/preset-env',                      // For modern JavaScript
    '@babel/preset-react',                    // For React/JSX
    '@babel/preset-typescript'                // For TypeScript compatibility
  ],
  plugins: [
    ['@babel/plugin-transform-class-properties', { loose: true }],
    ['@babel/plugin-transform-private-methods', { loose: true }],
    ['@babel/plugin-transform-private-property-in-object', { loose: true }],
  ],
  env: {
    test: {
      presets: [
        '@babel/preset-env',                  // For Jest compatibility
        '@babel/preset-react',                // For React/JSX in tests
        '@babel/preset-typescript'            // Handles TypeScript in tests
      ],
      plugins: [
        ['@babel/plugin-transform-class-properties', { loose: true }],
        ['@babel/plugin-transform-private-methods', { loose: true }],
        ['@babel/plugin-transform-private-property-in-object', { loose: true }],
      ],
    },
  },
};
