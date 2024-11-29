/**
 * Metro configuration for React Native
 * https://github.com/facebook/metro
 *
 * @format
 */
const path = require('path');
const { getDefaultConfig } = require('@react-native/metro-config');

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig(__dirname);

  return {
    ...defaultConfig,
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'), // Add SVG transformer
    },
    resolver: {
      assetExts: defaultConfig.resolver.assetExts.filter((ext) => ext !== 'svg'), // Exclude SVG from assets
      sourceExts: [...defaultConfig.resolver.sourceExts, 'svg'], // Add SVG to source extensions
    },
    projectRoot: path.resolve(__dirname), // Set the correct project root
  };
})();
