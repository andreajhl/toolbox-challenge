import axios from 'axios';
import { httpClient } from '.';
import { URL } from '../../constants/server';

describe('httpClient', () => {
  const path = 'files/data';

  it('should make a successful GET request', async () => {
    jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: 'test' });

    const result = await httpClient.get(path);

    expect(axios.get).toHaveBeenCalledWith(`${URL}/${path}`);
    expect(result).toEqual('test');
  });

  it('should handle errors during GET request', async () => {
    jest.spyOn(axios, 'get').mockRejectedValueOnce({ status: 500 });

    try {
      await httpClient.get(path);
    } catch (error) {
      expect(axios.get).toHaveBeenCalledWith(`${URL}/${path}`);
      expect(error.status).toEqual(500);
    }
  });
});

