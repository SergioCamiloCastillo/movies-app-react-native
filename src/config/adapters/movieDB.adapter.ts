import {AxiosAdapter} from './http/axios.adapter';

export const movieDBFetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'c90564b1c86cc2cf06e6752b1087eeba',
    language: 'es',
  },
});
