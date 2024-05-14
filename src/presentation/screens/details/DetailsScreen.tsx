import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Text} from 'react-native';
import {RootStackParams} from '../../navigation/Navigation';
interface Props extends StackScreenProps<RootStackParams, 'Details'> {}
export const DetailsScreen = ({route}: Props) => {
  const {movieId} = route.params;
  return <Text>Details Screen {movieId}</Text>;
};
