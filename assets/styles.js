import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#bb9645',
  secondary: '#303133',
  background: '#000000',
  textPrimary: '#ffffff',
  textSecondary: '#737373',
  error: '#e54212',
  success: '#95c623',
  warning: '#ffd700',
};

export const fonts = {
  default: 'System',
  heading: 'Arial-BoldMT',
  body: 'Arial',
  monospace: 'CourierNewPS-BoldMT',
};

export const fontSizes = {
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
};

export const spacings = {
  xSmall: 4,
  small: 8,
  medium: 16,
  large: 24,
  xLarge: 32,
};

export const borderRadii = {
  small: 4,
  medium: 8,
  large: 16,
};

export const elevations = {
  low: 2,
  medium: 4,
  high: 8,
};

export const dimensions = {
  buttonHeight: 50,
  inputHeight: 40,
  iconSize: 24,
};

// Create StyleSheet object for React Native
export const styles = StyleSheet.create({
  button: {
    height: dimensions.buttonHeight,
    backgroundColor: colors.primary,
    borderRadius: borderRadii.medium,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: elevations.medium,
  },
  textPrimary: {
    color: colors.textPrimary,
    fontSize: fontSizes.medium,
    fontFamily: fonts.default,
  },
  textSecondary: {
    color: colors.textSecondary,
    fontSize: fontSizes.small,
    fontFamily: fonts.body,
  },
  input: {
    height: dimensions.inputHeight,
    borderColor: colors.secondary,
    borderWidth: 1,
    borderRadius: borderRadii.small,
    paddingHorizontal: spacings.small,
    color: colors.textPrimary,
    fontSize: fontSizes.medium,
  },
});
