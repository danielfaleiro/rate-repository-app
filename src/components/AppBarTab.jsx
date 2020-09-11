import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, TouchableOpacity, Text } from 'react-native';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  barItems: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  }
});

const AppBarTab = ({ title, link }) => (
  <TouchableWithoutFeedback>
    <Link to={link} component={TouchableOpacity} activeOpacity={0.8}>
      <Text style={styles.barItems}>
        {title}
      </Text>
    </Link>
  </TouchableWithoutFeedback>
);

export default AppBarTab;