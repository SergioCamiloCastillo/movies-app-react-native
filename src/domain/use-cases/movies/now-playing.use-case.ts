import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {NowPlayingResponse} from '../../../infrastructure/interfaces/movie-db.responses';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import type {MovieEntity} from '../../entities/movie.entity';

export const moviesNowPlayingUseCase = async (
  fetcher: HttpAdapter,
): Promise<MovieEntity[]> => {
  try {
    const nowplaying = await fetcher.get<NowPlayingResponse>('/now_playing');

    return nowplaying.results.map(result =>
      MovieMapper.fromMovieDBResultToEntity(result),
    );
  } catch (error) {
    console.error(error);
    throw new Error('Error fetching now playing movies');
  }
};
