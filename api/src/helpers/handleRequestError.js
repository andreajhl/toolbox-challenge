import { logErrors } from "./logErrors.js";

const handleRequestError = (error, message, res) => {
  logErrors(error, message);
  res.status(error.response?.status || 500).send(error.response?.data || 'Internal Server Error');
};

export { handleRequestError };
