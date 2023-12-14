import { formatFiles, formatFileItem } from "./dtos/data-formatter.js";
import { handleRequestError, httpClient } from "../helpers/index.js";

const getAllFiles = async(_, res) => {
  const MESSAGE = 'GET FILES';

  try {
    const { files } = await httpClient.get('/files');
    const fileDataPromises  = files.map(fileName => httpClient.get(`/file/${fileName}`));

    const filesData = await Promise.allSettled(fileDataPromises);
    const formattedData = formatFiles(filesData);

    res.send(formattedData);
  } catch (error) {
    handleRequestError(error, MESSAGE, res);
  }
}

const getFileByName = async(req, res) => {
  const { fileName } = req.query;
  const MESSAGE = `GET FILE BY NAME ${fileName}`;

  try {
    const file = await httpClient.get(`/file/${fileName}`);
    const formattedData = formatFileItem(file);

    res.send(formattedData);
  } catch (error) {
    handleRequestError(error, MESSAGE, res);
  }
}

const getFiles = async(req, res) => {
  const { fileName } = req.query;
  fileName ? getFileByName(req, res) : getAllFiles(req, res);
};

const getFileList = async(_, res) => {
  const MESSAGE = 'GET FILE LIST';

  try {
    const { files } = await httpClient.get('/files');
    res.status(200).send(files);
  } catch (error) {
    handleRequestError(error, MESSAGE, res);
  }
};

export { getFiles, getFileList };
