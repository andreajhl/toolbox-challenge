
import { expect } from 'chai';
import { createErrorLogMessage } from "../../helpers/index.js";

describe('logErrors', () => {
  describe('createErrorLogMessage', () => {
    it('should create an error log message with status and data', () => {
      const message = 'An error occurred';
      const response = {
        status: 500,
        data: { error: 'Internal Server Error' },
      };
  
      const logData = createErrorLogMessage(response, message);
  
      expect(logData).to.deep.equal({
        errorMessage: message,
        responseStatus: 500,
        responseData: '{"error":"Internal Server Error"}',
      });
    });
  
    it('should create an error log message without status and data', () => {
      const message = 'An error occurred';
      const logData = createErrorLogMessage(undefined, message);
  
      expect(logData).to.deep.equal({
        errorMessage: message,
        responseStatus: 400,
      });
    });
  });
});
