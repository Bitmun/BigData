import { useFetch } from './useFetch';

import { fetchCharacters } from 'core/services/charactersService';
import { Character } from 'core/types';

export const useFetchCharacters = (nameStartsWith?: string) => {
  return useFetch<Character[]>(() => fetchCharacters(nameStartsWith), [nameStartsWith]);
};
