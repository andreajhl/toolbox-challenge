import { expect } from 'chai';
import { formatFiles, formatFileItem } from '../../../controllers/dtos/data-formatter.js';

describe('Helpers', () => {
  const fileContent = 'file,text,number,hex\nfile1.csv,someText,123,ed2efcbe42345f1e0254e4c5c54345e2';

  describe('formatFileItem', () => {
    it('should format file item correctly', () => {
      const result = formatFileItem(fileContent);
      expect(result).to.deep.equal({
        file: 'file1.csv',
        lines: [
          { text: 'someText', number: '123', hex: 'ed2efcbe42345f1e0254e4c5c54345e2' },
        ],
      });
    });
  });

  describe('formatFiles', () => {
    it('should format multiple files correctly', () => {
      const filesRequest = [
        { status: 'rejected' },
        { status: 'fulfilled', value: fileContent}
      ];

      const result = formatFiles(filesRequest);
      expect(result).to.deep.equal([
        {
          file: 'file1.csv',
          lines: [
            { text: 'someText', number: '123', hex: 'ed2efcbe42345f1e0254e4c5c54345e2' },
          ],
        },
      ]);
    });
  });
});
