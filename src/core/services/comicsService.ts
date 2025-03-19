import { API_CONSTANSTS } from 'constants/apiConstants';
import { axiosInstance } from 'core/api';

export const fetchComics = async () => {
  return await axiosInstance('/comics', {
    limit: API_CONSTANSTS.limit,
  });
};

export const fetchComicById = async (id: number) => {
  return await axiosInstance(`/comics/${id}`);
};
