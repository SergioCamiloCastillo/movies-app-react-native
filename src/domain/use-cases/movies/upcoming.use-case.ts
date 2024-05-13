import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {UpcomingDBResponse} from '../../../infrastructure/interfaces/movie-db.responses';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';

export const upcomingMoviesUseCase = async (fetcher: HttpAdapter) => {
  try {
    const upcomingMovies = await fetcher.get<UpcomingDBResponse>('/upcoming');
    return upcomingMovies.results.map(result =>
      MovieMapper.fromMovieDBResultToEntity(result),
    );
  } catch (error) {
    console.error(error);
    throw new Error('Error fetching upcoming movies');
  }
};
