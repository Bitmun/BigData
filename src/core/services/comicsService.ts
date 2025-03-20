import { API_CONSTANSTS } from 'constants/apiConstants';
import { axiosInstance } from 'core/api';

export const fetchComics = async (offset?: number) => {
  return await axiosInstance('/comics', {
    limit: API_CONSTANSTS.limit,
    offset,
  });
};

export const fetchComicById = async (id: number | string) => {
  return await axiosInstance(`/comics/${id}`);
};
