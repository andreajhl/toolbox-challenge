const isValidNumber = (value) => Boolean(Number(value));
const isValidText = (text) => !!text?.length;
const isValidHexadecimal32 = (hex) => hex?.length === 32;

export {
  isValidNumber,
  isValidText,
  isValidHexadecimal32,
};
