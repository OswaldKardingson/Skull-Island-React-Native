import { urlAppend, checkDec, prettyFormatPrices } from '@utils/index';

describe('Utility Functions', () => {
  describe('urlAppend', () => {
    it('should append a parameter to a URL ending with a slash', () => {
      expect(urlAppend('https://example.com/', 'endpoint')).toBe('https://example.com/endpoint');
    });

    it('should append a parameter to a URL without a trailing slash', () => {
      expect(urlAppend('https://example.com', 'endpoint')).toBe('https://example.com/endpoint');
    });
  });

  describe('checkDec', () => {
    it('should return the input if it is a valid decimal', () => {
      expect(checkDec('123.45')).toBe('123.45');
    });

    it('should truncate the last character if input is invalid', () => {
      expect(checkDec('123.45a')).toBe('123.45');
    });

    it('should handle integers correctly', () => {
      expect(checkDec('123')).toBe('123');
    });
  });

  describe('prettyFormatPrices', () => {
    it('should format a number to 5 decimal places by default', () => {
      expect(prettyFormatPrices(123.456789)).toBe('123.45679');
    });

    it('should format a string to 5 decimal places by default', () => {
      expect(prettyFormatPrices('123.456789')).toBe('123.45679');
    });

    it('should format to a specified number of decimal places', () => {
      expect(prettyFormatPrices(123.456789, 2)).toBe('123.46');
    });

    it('should handle integers correctly', () => {
      expect(prettyFormatPrices(123)).toBe('123.00000');
    });
  });
});
