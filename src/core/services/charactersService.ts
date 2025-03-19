import { axiosInstance } from 'core/api';

export const fetchCharacters = async (nameStartsWith?: string) => {
  return await axiosInstance('/characters', {
    nameStartsWith,
  });
};
