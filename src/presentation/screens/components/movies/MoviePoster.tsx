import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {MovieEntity} from '../../../../domain/entities/movie.entity';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../../../navigation/Navigation';
interface Props {
  movie: MovieEntity;
  height?: number;
  width?: number;
}

export const MoviePoster = ({movie, height = 420, width = 300}: Props) => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  return (
    <Pressable
      onPress={() => navigation.navigate('Details', {movieId: movie.id})}
      style={({pressed}) => ({
        width,
        height,
        opacity: pressed ? 0.9 : 1,
        marginHorizontal: 5,
        paddingBottom: 20,
        paddingHorizontal: 10,
      })}>
      <View style={{...styles.imageContainer}}>
        <Image style={styles.image} source={{uri: movie.poster}} />
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 10,
  },
});
