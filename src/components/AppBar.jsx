import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';
import links from '../links';

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    paddingVertical: 20,
    paddingHorizontal: theme.padding.default,
    backgroundColor: theme.colors.barBackground,
  },
  scroll: {
    flexGrow: 1,
    justifyContent: 'space-around'
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.scroll}>
        <AppBarTab title='Respositories' link={links.main} />
        <AppBarTab title='Sign In' link={links.signIn} />
      </ScrollView>
    </View>
  );
};

export default AppBar;