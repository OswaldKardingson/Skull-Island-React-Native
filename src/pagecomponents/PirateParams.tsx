import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

// Screen dimensions for layout calculations
const { width, height } = Dimensions.get('window');

// Props interface for ParamInfo customization
interface ParamInfoProps {
  vPosition: number; // Vertical position multiplier for alignment
  text: string; // Text content to display
  testID?: string; // Optional test ID for testing purposes
}

// ParamHeaderFade Component
const ParamHeaderFade: React.FC = () => {
  return <View style={styles.paramHeaderFade} testID="param-header-fade" />;
};

// ParamFade Component
const ParamFade: React.FC = () => {
  return <View style={styles.paramFade} testID="param-fade" />;
};

// ParamTitle Component
const ParamTitle: React.FC<{ title: string; testID?: string }> = ({ title, testID = 'param-title' }) => {
  return (
    <Text style={styles.paramTitle} testID={testID}>
      {title}
    </Text>
  );
};

// ParamInfo Component
const ParamInfo: React.FC<ParamInfoProps> = ({ vPosition, text, testID = 'param-info' }) => {
  return (
    <View
      style={[
        styles.paramInfo,
        {
          top: height * vPosition, // Dynamic vertical position
        },
      ]}
      testID={testID}
    >
      <Text style={styles.paramInfoText}>{text}</Text>
    </View>
  );
};

// Stylesheet for all components
const styles = StyleSheet.create({
  paramHeaderFade: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: height * 0.2,
    width,
    backgroundColor: 'rgba(187,150,69,1)',
  },
  paramFade: {
    position: 'absolute',
    top: height * 0.1975,
    left: 0,
    height: height * 0.01,
    width,
    backgroundColor: 'rgba(0,0,0,1)',
  },
  paramTitle: {
    position: 'absolute',
    bottom: height * 0.025,
    left: 0,
    color: '#bb9645',
    height: width * (1.5 / 21), // Title font size based on the original ratio
    width,
    fontFamily: 'Bai Jamjuree',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: width * (1.5 / 21),
    textAlign: 'center',
    zIndex: 2,
  },
  paramInfo: {
    position: 'absolute',
    left: width * 0.025,
    width: width * 0.95,
  },
  paramInfoText: {
    color: '#bb9645',
    fontSize: height * 0.03, // Dynamic font size based on screen height
  },
});

export { ParamHeaderFade, ParamFade, ParamTitle, ParamInfo };
