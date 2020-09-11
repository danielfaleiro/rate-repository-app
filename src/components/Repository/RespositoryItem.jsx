import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Text from '../Text';
import theme from '../../theme';
import RepositoryCount from './RepositoryCount';

const styles = StyleSheet.create({
  container: {
    padding: theme.padding.default,
    marginBottom: 5,
    backgroundColor: 'white'
  },
  repHeader: {
    paddingHorizontal: 10,
  },
  repHeaderText: {
    paddingBottom: 5
  },
  logo: {
    resizeMode: 'cover',
    width: 45,
    height: 45
  },
  flexRow: {
    flexDirection: 'row'
  },
  repInfo: {
    justifyContent: 'space-evenly',
    paddingTop: 10
  },
  tag: {
    backgroundColor: theme.colors.primary,
    color: 'white',
    padding: 5,
    marginVertical: 5,
    borderRadius: 5,
    alignSelf: 'flex-start'
  }
});

const RepositoryItem = (props) => (
  <View style={styles.container}>
    <View style={styles.flexRow}>
      <Image
        style={styles.logo}
        source={{ uri: props.ownerAvatarUrl }}
      />
      <View style={styles.repHeader}>
        <Text
          fontWeight='bold' 
          fontSize='subheading'
          style={styles.repHeaderText}
        >
          {props.fullName}
        </Text>
        <Text color='textSecondary' style={styles.repHeaderText}>{props.description}</Text>
        <Text style={styles.tag}>{props.language}</Text>
      </View>
    </View>
    <View style={[styles.flexRow, styles.repInfo]}>
      <RepositoryCount
        count={props.stargazersCount}
        title='Stars'
      />
      <RepositoryCount
        count={props.forksCount}
        title='Forks'
      />
      <RepositoryCount
        count={props.reviewCount}
        title='Reviews'
      />
      <RepositoryCount
        count={props.ratingAverage}
        title='Rating'
      />
    </View>
  </View>
);

export default RepositoryItem;
