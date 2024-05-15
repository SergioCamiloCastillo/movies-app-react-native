import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {MovieDBCastResponse} from '../../../infrastructure/interfaces/movie-db.responses';
import {CastMapper} from '../../../infrastructure/mappers/cast.mapper';
import {CastEntity} from '../../entities/cast.entity';

export const getCastUseCase = async (
  fetcher: HttpAdapter,
  movieId: number,
): Promise<CastEntity[]> => {
  try {
    const {cast} = await fetcher.get<MovieDBCastResponse>(
      `/${movieId}/credits`,
    );
    const actors = cast.map(actor => CastMapper.fromMovieDBCastToEntity(actor));
    return actors;
  } catch (error) {
    throw new Error(`Error getting cast: ${error}`);
  }
};
