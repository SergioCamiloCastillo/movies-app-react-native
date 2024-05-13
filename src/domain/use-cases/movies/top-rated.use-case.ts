import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {
  MoviesDBTopRatedResponse,
  NowPlayingResponse,
} from '../../../infrastructure/interfaces/movie-db.responses';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import {MovieEntity} from '../../entities/movie.entity';

export const topRatedMoviesUseCase = async (
  fetcher: HttpAdapter,
): Promise<MovieEntity[]> => {
  try {
    const topRatedMovies = await fetcher.get<MoviesDBTopRatedResponse>(
      '/top_rated',
    );
    return topRatedMovies.results.map(result =>
      MovieMapper.fromMovieDBResultToEntity(result),
    );
  } catch (error) {
    console.error(error);
    throw new Error('Error fetching top rated movies');
  }
};
