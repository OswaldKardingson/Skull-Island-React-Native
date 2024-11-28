import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// Import assets
const skullImage = require('../assets/Pirate_Logo_Skull_Gold.png');
const pirateImage = require('../assets/pirate/logo.svg');
const mobileImage = require('../assets/pirate/qrlogo.svg');
const footerImage = require('../assets/svg/footer.svg');

interface SplashProps {
  theme: {
    width: number;
    height: number;
  };
  loaderText?: string;
  copyrightText?: string;
  testID?: string;
}

const Splash: React.FC<SplashProps> = ({
  theme,
  loaderText = 'Loading...',
  copyrightText = '© 2025 Pirate Chain',
  testID = 'splash-container',
}) => {
  const { width, height } = theme;

  return (
    <View style={[styles.container, { width, height }]} testID={testID}>
      {/* Header Gradient */}
      <LinearGradient
        colors={['rgba(187,150,69,1)', 'rgba(0,0,0,1)']}
        style={[styles.headerFade, { height: height * 0.25, width }]}
        testID={`${testID}-header-fade`}
      />

      {/* Transition Gradient */}
      <LinearGradient
        colors={['rgba(0,0,0,1)', 'rgba(0,0,0,0)']}
        style={[styles.transitionFade, { top: height * 0.2475, height: height * 0.05, width }]}
        testID={`${testID}-transition-fade`}
      />

      {/* Skull Image */}
      <Image
        source={skullImage}
        style={[
          styles.skullImage,
          { top: height * 0.25, left: width * 0.375, width: width * 0.25, height: width * 0.25 },
        ]}
        testID={`${testID}-skull-img`}
      />

      {/* Pirate Image */}
      <Image
        source={pirateImage}
        style={[
          styles.pirateImage,
          {
            top: height * 0.265 + width * 0.25,
            width,
            height: height * 0.045,
          },
        ]}
        testID={`${testID}-pirate-img`}
      />

      {/* Loader */}
      <Text
        style={[
          styles.loader,
          {
            top: height * 0.425 + width * 0.25,
            left: width * 0.5,
          },
        ]}
        testID={`${testID}-loader`}
      >
        {loaderText}
      </Text>

      {/* Mobile Image */}
      <Image
        source={mobileImage}
        style={[
          styles.mobileImage,
          {
            top: height * 0.32 + width * 0.25,
            width,
            height: height * 0.06,
          },
        ]}
        testID={`${testID}-mobile-img`}
      />

      {/* Footer Image */}
      <Image
        source={footerImage}
        style={[
          styles.footerImage,
          {
            bottom: height * 0.18,
            width,
          },
        ]}
        testID={`${testID}-footer-img`}
      />

      {/* Footer */}
      <View
        style={[
          styles.footer,
          { height: height * 0.2, width },
        ]}
        testID={`${testID}-footer`}
      />

      {/* Copyright */}
      <Text
        style={[
          styles.copyright,
          { bottom: width * 0.05, width },
        ]}
        testID={`${testID}-copyright`}
      >
        {copyrightText}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    textAlign: 'center',
  },
  headerFade: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  transitionFade: {
    position: 'absolute',
    left: 0,
  },
  skullImage: {
    position: 'absolute',
  },
  pirateImage: {
    position: 'absolute',
  },
  loader: {
    position: 'absolute',
    textAlign: 'center',
    color: 'white',
  },
  mobileImage: {
    position: 'absolute',
  },
  footerImage: {
    position: 'absolute',
  },
  footer: {
    position: 'absolute',
    left: 0,
    backgroundColor: 'rgba(187,150,69,1)',
  },
  copyright: {
    position: 'absolute',
    textAlign: 'center',
    color: 'white',
  },
});

export default Splash;
