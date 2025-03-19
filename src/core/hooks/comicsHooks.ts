import { useFetch } from './useFetch';

import { fetchComicById, fetchComics } from 'core/services/comicsService';
import { Comic } from 'core/types';

export const useFetchComics = () => {
  return useFetch<Comic[]>(fetchComics);
};

export const useFetchComicById = (id: number | string) => {
  return useFetch<Comic[]>(() => fetchComicById(id), [id]);
};
