import { useFetch } from './useFetch';

import { fetchComicById, fetchComics } from 'core/services/comicsService';
import { Comics } from 'core/types';

export const useFetchComics = () => {
  return useFetch<Comics[]>(fetchComics);
};

export const useFetchComicsById = (id: number) => {
  return useFetch<Comics[]>(() => fetchComicById(id));
};
