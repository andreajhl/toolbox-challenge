import { httpClient, logErrors } from '../helpers';

const getFileNameListService = async() => {
  const LOG_MESSAGE = 'GET FILE LIST';
  const path = 'files/list';

  try {
    console.info(LOG_MESSAGE);

    return await httpClient.get(path);
  } catch (error) {
    logErrors(error, LOG_MESSAGE);
  };
};

const getFileByNameService = async(name) => {
  const LOG_MESSAGE = `GET FILE BY NAME ${name?.toUpperCase()}`;
  const path = `files/data?fileName=${name}`;

  try {
    console.info(LOG_MESSAGE);

    return await httpClient.get(path);
  } catch (error) {
    logErrors(error, LOG_MESSAGE);
    throw error;
  };
};

const getFileListService = async() => {
  const LOG_MESSAGE = 'GET FILES';
  const path = 'files/data';

  try {
    console.info(LOG_MESSAGE);

    return await httpClient.get(path);
  } catch (error) {
    logErrors(error, LOG_MESSAGE);
  };
};

export {
  getFileListService,
  getFileByNameService,
  getFileNameListService,
};
