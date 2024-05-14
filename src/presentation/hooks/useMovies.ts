import React, {useEffect, useState} from 'react';
import type {MovieEntity} from '../../domain/entities/movie.entity';
import * as UsesCases from '../../domain/use-cases';
import {movieDBFetcher} from '../../config/adapters/movieDB.adapter';
let popularPageNumber = 1;
export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [nowPlaying, setNowPlaying] = useState<MovieEntity[]>([]);
  const [popular, setPopular] = useState<MovieEntity[]>([]);
  const [topRated, setTopRated] = useState<MovieEntity[]>([]);
  const [upcoming, setUpcoming] = useState<MovieEntity[]>([]);
  useEffect(() => {
    initialLoad();
  }, []);
  const initialLoad = async () => {
    const nowPlayingMoviesPromise = await UsesCases.moviesNowPlayingUseCase(
      movieDBFetcher,
    );
    const popularMoviesPromise = await UsesCases.popularMoviesUseCase(
      movieDBFetcher,
      {page: popularPageNumber},
    );
    const topRatedMoviesPromise = await UsesCases.topRatedMoviesUseCase(
      movieDBFetcher,
    );
    const upcomingMoviesPromise = await UsesCases.upcomingMoviesUseCase(
      movieDBFetcher,
    );
    const [nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies] =
      await Promise.all([
        nowPlayingMoviesPromise,
        popularMoviesPromise,
        topRatedMoviesPromise,
        upcomingMoviesPromise,
      ]);
    setNowPlaying(nowPlayingMovies);
    setPopular(popularMovies);
    setTopRated(topRatedMovies);
    setUpcoming(upcomingMovies);
    setIsLoading(false);
  };

  return {
    isLoading,
    nowPlaying,
    popular,
    topRated,
    upcoming,
    popularNextPage: async () => {
      popularPageNumber++;
      const popularMovies = await UsesCases.popularMoviesUseCase(
        movieDBFetcher,
        {page: popularPageNumber},
      );
      setPopular(prev => [...prev, ...popularMovies]);
    },
  };
};
