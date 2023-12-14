import axios from 'axios';
import { URL } from '../../constants/server';

const httpClient = {
  get: async(path) => {
    const { data } = await axios.get(`${URL}/${path}`);
    return data;
  },
};

export { httpClient };
