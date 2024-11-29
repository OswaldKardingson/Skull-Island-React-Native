import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TextStyle,
  ImageStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// Dimensions for responsive styling
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

// Props for generic children components
interface ChildrenProps {
  children: React.ReactNode;
}

// Props for button components
interface ButtonProps {
  onPress: () => void;
  label: string;
}

// Props for input components
interface InputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

// Props for QR background
interface QRBackgroundProps extends ChildrenProps {
  opacity: number;
}

// GlobalDiv Component (Text container for font-related styles)
const GlobalDiv: React.FC<ChildrenProps> = ({ children }) => {
  return <View style={styles.globalDiv}><Text>{children}</Text></View>;
};

// BlackBackground Component
const BlackBackground: React.FC<ChildrenProps> = ({ children }) => {
  return <View style={styles.blackBackground}>{children}</View>;
};

// AppBody Component
const AppBody: React.FC<ChildrenProps> = ({ children }) => {
  return <View style={styles.appBody}>{children}</View>;
};

// MainBody Component
const MainBody: React.FC<ChildrenProps> = ({ children }) => {
  return <View style={styles.mainBody}>{children}</View>;
};

// BlackBackgroundQR Component
const BlackBackgroundQR: React.FC<QRBackgroundProps> = ({ opacity, children }) => {
  return <View style={[styles.blackBackgroundQR, { opacity }]}>{children}</View>;
};

// GradientBackground Component
const GradientBackground: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <LinearGradient
      colors={['#bb9645', '#000000', '#000000', '#000000']}
      style={styles.gradientBackground}
    >
      {children}
    </LinearGradient>
  );
};

// SkullHeading Component
const SkullHeading: React.FC<ChildrenProps> = ({ children }) => {
  return <View style={styles.skullHeading}><Text>{children}</Text></View>;
};

// SkullCenteredDiv Component
const SkullCenteredDiv: React.FC<ChildrenProps> = ({ children }) => {
  return <View style={styles.skullCenteredDiv}>{children}</View>;
};

// SkullImg Component
const SkullImg: React.FC<{ source: any }> = ({ source }) => {
  return <Image style={styles.skullImg} source={source} />;
};

// DarkYellowButton Component
const DarkYellowButton: React.FC<ButtonProps> = ({ onPress, label }) => {
  return (
    <TouchableOpacity style={styles.darkYellowButton} onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

// DarkGreyButton Component
const DarkGreyButton: React.FC<ButtonProps> = ({ onPress, label }) => {
  return (
    <TouchableOpacity style={styles.darkGreyButton} onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

// BottomDashedArea Component
const BottomDashedArea: React.FC<ChildrenProps> = ({ children }) => {
  return <View style={styles.bottomDashedArea}>{children}</View>;
};

// BottomDashedInput Component
const BottomDashedInput: React.FC<InputProps> = ({ value, onChangeText, placeholder }) => {
  return (
    <TextInput
      style={styles.bottomDashedInput}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor="#bb9645"
    />
  );
};

// Stylesheet for the components
const styles = StyleSheet.create({
  globalDiv: {
    fontFamily: 'IBM Plex Mono', // Not valid for View, use Text wrapper
  } as TextStyle,
  blackBackground: {
    backgroundColor: '#000000',
    position: 'absolute',
    top: 0,
    left: 0,
    height,
    width,
  } as ViewStyle,
  appBody: {
    position: 'absolute',
    top: height * 0.05,
    left: 0,
    height: height * 0.9,
    width,
  } as ViewStyle,
  mainBody: {
    position: 'absolute',
    top: 0,
    left: 0,
    height,
    width,
  } as ViewStyle,
  blackBackgroundQR: {
    backgroundColor: '#000000',
    position: 'absolute',
    top: 0,
    left: 0,
    height,
    width,
    opacity: 1,
  } as ViewStyle,
  gradientBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    height,
    width,
  } as ViewStyle,
  skullHeading: {
    position: 'absolute',
    width,
    height: height * 0.15,
    top: height * 0.15,
    alignItems: 'center',
  } as ViewStyle,
  skullCenteredDiv: {
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
  skullImg: {
    width: width * 0.2,
    height: width * 0.2,
  } as ImageStyle,
  darkYellowButton: {
    position: 'absolute',
    backgroundColor: '#bb9645',
    width: width * 0.85,
    height: height * 0.075,
    left: width * 0.075,
    top: height * 0.74,
    borderRadius: height * 0.075 * 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
  darkGreyButton: {
    position: 'absolute',
    backgroundColor: '#303133',
    width: width * 0.85,
    height: height * 0.075,
    left: width * 0.075,
    top: height * 0.85,
    borderRadius: height * 0.075 * 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
  buttonText: {
    fontSize: height * 0.025,
    color: 'white',
  } as TextStyle,
  bottomDashedArea: {
    position: 'absolute',
    left: width * 0.025,
    top: height * 0.4,
    backgroundColor: '#4a3c1b',
    width: width * 0.95,
    height: height * 0.055,
  } as ViewStyle,
  bottomDashedInput: {
    position: 'absolute',
    left: width * 0.025,
    top: 0,
    color: '#ffffff',
    backgroundColor: '#4a3c1b',
    width: width * 0.9,
    height: height * 0.04,
    borderWidth: 0,
    borderBottomWidth: 2,
    borderColor: '#bb9645',
    fontSize: height * 0.025,
    textAlign: 'center',
  } as TextStyle,
});

export {
  GlobalDiv,
  BlackBackground,
  AppBody,
  MainBody,
  BlackBackgroundQR,
  GradientBackground,
  SkullHeading,
  SkullCenteredDiv,
  SkullImg,
  DarkYellowButton,
  DarkGreyButton,
  BottomDashedArea,
  BottomDashedInput,
};
