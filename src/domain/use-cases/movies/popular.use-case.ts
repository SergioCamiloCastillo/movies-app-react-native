import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {
  MoviesDBPopularResult,
  NowPlayingResponse,
} from '../../../infrastructure/interfaces/movie-db.responses';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import {MovieEntity} from '../../entities/movie.entity';
interface Options {
  page?: number;
  limit?: number;
}
export const popularMoviesUseCase = async (
  fetcher: HttpAdapter,
  {page, limit}: Options,
): Promise<MovieEntity[]> => {
  try {
    const popularMovies = await fetcher.get<MoviesDBPopularResult>('/popular', {
      params: {page: page ?? 1, limit},
    });
    return popularMovies.results.map(result =>
      MovieMapper.fromMovieDBResultToEntity(result),
    );
  } catch (error) {
    console.error(error);
    throw new Error('Error fetching popular movies');
  }
};
