import { expect } from 'chai';
import {
  isValidHexadecimal32,
  isValidNumber,
  isValidText,
} from "../../helpers/index.js";

describe('validate', () => {
  describe('isValidNumber', () => {
    it('If value is a valid number, it returns true, otherwise false', () => {
      expect(isValidNumber('23')).to.equal(true);
      expect(isValidNumber('23o')).to.equal(false);
    });
  });

  describe('isValidText', () => {
    it('If value is a valid test, it returns true, otherwise false', () => {
      expect(isValidText('test')).to.equal(true);
      expect(isValidText('')).to.equal(false);
    });
  });

  describe('isValidHexadecimal32', () => {
    it('If value is a valid 32-digit hexadecimal, it returns true, otherwise false', () => {
      expect(isValidHexadecimal32('70ad29aacf0b690b0467fe2b2767f765')).to.equal(true);
      expect(isValidHexadecimal32('87tyfutgcvhu')).to.equal(false);
    });
  });
}); 
