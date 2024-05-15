import React, {useEffect, useState} from 'react';
import * as UseCases from '../../domain/use-cases';
import {movieDBFetcher} from '../../config/adapters/movieDB.adapter';
import {FullMovie} from '../../domain/entities/movie.entity';
import {CastEntity} from '../../domain/entities/cast.entity';

export const useMovie = (movieId: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState<FullMovie>();
  const [cast, setCast] = useState<CastEntity[]>();

  useEffect(() => {
    loadMovie();
  }, [movieId]);
  const loadMovie = async () => {
    setIsLoading(true);
    const fullMoviePromise = UseCases.getByIdUseCase(movieDBFetcher, movieId);
    const castPromise = UseCases.getCastUseCase(movieDBFetcher, movieId);
    const [fullMovie, castMovie] = await Promise.all([
      fullMoviePromise,
      castPromise,
    ]);
    setMovie(fullMovie);
    setCast(castMovie);
    setIsLoading(false);
  };
  return {isLoading, movie, cast};
};
