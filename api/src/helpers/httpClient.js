import axios from "axios";
import { URL } from "../constants/index.js";

const httpClient = {
  get: async(path) => {
    const { data } = await axios.get(`${URL}/${path}`, {
      headers: {
        'authorization': 'Bearer aSuperSecretKey',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });

    return data;
  },
};

export { httpClient };
