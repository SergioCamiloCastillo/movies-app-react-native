import React, {useEffect, useState} from 'react';

export const useMovie = (movieId: number) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {}, [movieId]);
  const loadMovie = () => {};
  return {isLoading};
};
