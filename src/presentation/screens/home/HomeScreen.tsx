import React from 'react';
import {Text, View} from 'react-native';
import {useMovies} from '../../hooks/useMovies';
import {ScrollView} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PosterCarousel} from '../components/movies/PosterCarousel';
import {HorizontalCarousel} from '../components/HorizontalCarousel';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {isLoading, nowPlaying, popular, topRated, upcoming, popularNextPage} =
    useMovies();
  if (isLoading) {
    return <Text>Cargando...</Text>;
  }
  return (
    <ScrollView>
      <View style={{marginTop: top + 20, paddingBottom: 30}}>
        {/* Carouse with principal movies*/}
        <PosterCarousel movies={nowPlaying} />
        {/* Carouse with popular movies*/}
        <HorizontalCarousel
          movies={popular}
          title="Populares"
          loadNextPage={popularNextPage}
        />
        {/* Carouse with TopRated movies*/}
        <HorizontalCarousel movies={topRated} title="Mejor calificadas" />
        {/* Carouse with upcoming movies*/}
        <HorizontalCarousel movies={upcoming} title="Proximamente" />
      </View>
    </ScrollView>
  );
};
