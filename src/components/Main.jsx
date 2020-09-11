import React from 'react';
import { StyleSheet, View } from 'react-native';
import RepositoryList from './Repository/RespositoryList';
import AppBar from './AppBar';
import theme from '../theme';
import { Route, Switch, Redirect } from 'react-router-native';
import SignIn from './SignIn';
import links from '../links';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.contentBackground
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route path={links.main} exact>
          <RepositoryList />
        </Route>
        <Route path={links.signIn}>
          <SignIn />
        </Route>
        <Redirect to={links.main} />
      </Switch>
    </View>
  );
};

export default Main;