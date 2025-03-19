import axios from 'axios';

const baseURI = `${import.meta.env.VITE_SERVER_URI}`;
const prefix = `${import.meta.env.VITE_ROUTES_PREFIX}`;

const marvelAPI = axios.create({
  baseURL: `${baseURI}${prefix}`,
  params: {
    ts: 1,
    apikey: '20a66ff0acf78ffaf5e065eb098413e8',
    hash: 'c62412f2be464f19d928813ef90f8b8e',
  },
});

export const axiosInstance = async (endpoint = '', params = {}) => {
  try {
    const response = await marvelAPI.get(endpoint, { params });
    return response.data;
  } catch (error) {
    throw new Error(`Some fetching error: ${error}`);
  }
};
