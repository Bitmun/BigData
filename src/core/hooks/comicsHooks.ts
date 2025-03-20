import { useFetch } from './useFetch';

import { fetchComicById, fetchComics } from 'core/services/comicsService';
import { Comic } from 'core/types';

export const useFetchComics = (offset?: number) => {
  return useFetch<Comic[]>(() => fetchComics(offset), [offset]);
};

export const useFetchComicById = (id: number | string) => {
  return useFetch<Comic[]>(() => fetchComicById(id), [id]);
};
