import React from 'react';
import { Formik } from 'formik';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import Text from './Text';
import FormikTextInput from './FormikTextInput';
import theme from '../theme';
import * as yup from 'yup';

const initialValues = {
  username: '',
  password: ''
};

const styles = StyleSheet.create({
  form: {
    backgroundColor: 'white'
  },
  submitButton: {
    margin: 10,
    backgroundColor: theme.colors.primary,
    color: 'white',
    padding: 15,
    borderRadius: 5
  }
});

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required')
});

const Form = ({ onSubmit }) => (
  <View style={styles.form}>
    <FormikTextInput name='username' placeholder='Username' />
    <FormikTextInput name='password' placeholder='Password' secureTextEntry />
    <TouchableWithoutFeedback onPress={onSubmit}>
      <Text fontWeight='bold' center fontSize='subheading' style={styles.submitButton} >Sign In</Text>
    </TouchableWithoutFeedback>
  </View>
);

const SignInForm = () => {
  const onSubmit = values => {
    console.log('Username: ', values.username);
    console.log('Password: ', values.password);
  };

  return (
    <Formik 
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <Form onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignInForm;