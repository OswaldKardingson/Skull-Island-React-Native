import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Header = ({ title }) => (
  <View style={styles.container}>
    <Text style={styles.title} accessibilityLabel="Header Title">
      {title}
    </Text>
  </View>
);

Header.defaultProps = {
  title: 'Header Component',
};

Header.propTypes = {
  title: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'blue',
  },
  title: {
    color: 'white',
    fontSize: 20,
  },
});

export default Header;
