import { useFetch } from './useFetch';

import { fetchCharacters } from 'core/services/charactersService';
import { Character } from 'core/types';

export const useFetchCharacters = (nameStartsWith?: string) => {
  const nameFilter = nameStartsWith === '' ? undefined : nameStartsWith;

  return useFetch<Character[]>(() => fetchCharacters(nameFilter), [nameFilter]);
};
