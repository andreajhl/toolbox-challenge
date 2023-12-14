import { isValidHexadecimal32, isValidNumber, isValidText, filterFulfilledRequests } from "../../helpers/index.js";

const extractFileName = ([fileName]) => fileName.split(',').shift();

const extractFileItems = (fileContent) => fileContent.includes('\n') ? fileContent.split('\n').slice(1) : [];

const extractDataLines = (lines) => (

  lines.reduce((acc, line) => {
    const [, text, number, hex] = line.split(',');

    const isValidFileFormat = isValidText(text)
      && isValidNumber(number)
      && isValidHexadecimal32(hex);

    if(isValidFileFormat) {
      acc.push({ text, number, hex });
    }

    return acc;
  }, [])
);

const formatFileItem = (file) => {
  const fileItems = extractFileItems(file);

  if(fileItems.length) {
    return {
      file: extractFileName(fileItems),
      lines: extractDataLines(fileItems),
    };
  }
};

const formatFiles = (files) => {
  const filteredFiles = filterFulfilledRequests(files);

  return filteredFiles.reduce((acc, file) => {
    const formattedFileItem = formatFileItem(file);

    if(formattedFileItem) acc.push(formattedFileItem);
    return  acc;
  }, []);
};

export { formatFiles, formatFileItem };
