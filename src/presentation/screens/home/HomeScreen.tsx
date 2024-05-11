import React from 'react';
import {Text} from 'react-native';
import {useMovies} from '../../hooks/useMovies';

export const HomeScreen = () => {
  const {} = useMovies();
  return <Text>Home Screen</Text>;
};
