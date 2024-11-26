import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Header = ({ title, backgroundColor, textColor }) => (
  <View style={[styles.container, { backgroundColor }]}>
    <Text style={[styles.title, { color: textColor }]} accessibilityLabel="Header Title">
      {title}
    </Text>
  </View>
);

Header.defaultProps = {
  title: 'Header Component',
  backgroundColor: '#0000FF', // Default blue background
  textColor: '#FFFFFF', // Default white text color
};

Header.propTypes = {
  title: PropTypes.string,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC', // Subtle border for separation
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Header;
