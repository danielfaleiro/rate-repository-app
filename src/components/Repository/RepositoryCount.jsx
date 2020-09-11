import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../Text';

const styles = StyleSheet.create({
  text: {
    textAlign: 'center'
  }
});

const RepositoryCount = ({ count, title }) => {
  if (count >= 1000) {
    count = `${Math.round(count/1000 * 10)/10}k`;
  }
  return (
    <View>
      <Text style={styles.text}>{count}</Text>
      <Text color='textSecondary' style={styles.text} fontWeight='bold'>{title}</Text>
    </View>
  );
};

export default RepositoryCount;