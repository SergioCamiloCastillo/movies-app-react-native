import React, {useEffect, useState} from 'react';
import type {MovieEntity} from '../../domain/entities/movie.entity';
import * as UsesCases from '../../domain/use-cases';
import {movieDBFetcher} from '../../config/adapters/movieDB.adapter';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [nowPlaying, setNowPlaying] = useState<MovieEntity[]>([]);
  useEffect(() => {
    initialLoad();
  }, []);
  const initialLoad = async () => {
    const nowPlayingMovies = await UsesCases.moviesNowPlayingUseCase(
      movieDBFetcher,
    );
  };

  return {isLoading, nowPlaying};
};
