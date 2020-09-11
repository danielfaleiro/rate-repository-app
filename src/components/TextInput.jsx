import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  textInput: {
    padding: 10,
    margin: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#BBBBBB'
  },
  error: {
    borderColor: theme.colors.error
  }
});

const TextInput = ({ style, error, ...props }) => {
  let textInputStyle;
  if (error) {
    textInputStyle = [styles.textInput, styles.error, style];
  } else {
    textInputStyle = [styles.textInput , style];
  }

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;