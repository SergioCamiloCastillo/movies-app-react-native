import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {
  MoviesDBPopularResult,
  NowPlayingResponse,
} from '../../../infrastructure/interfaces/movie-db.responses';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import {MovieEntity} from '../../entities/movie.entity';

export const popularMoviesUseCase = async (
  fetcher: HttpAdapter,
): Promise<MovieEntity[]> => {
  try {
    const popularMovies = await fetcher.get<MoviesDBPopularResult>('/popular');
    return popularMovies.results.map(result =>
      MovieMapper.fromMovieDBResultToEntity(result),
    );
  } catch (error) {
    console.error(error);
    throw new Error('Error fetching popular movies');
  }
};
