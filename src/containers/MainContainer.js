import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const MainContainer = ({ children, style }) => (
  <View style={[styles.container, style]}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000', // Default background color, can be customized via props
  },
});

MainContainer.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object, // Accepts additional custom styles
};

MainContainer.defaultProps = {
  style: {}, // Default to an empty object if no styles are provided
};

export default MainContainer;
