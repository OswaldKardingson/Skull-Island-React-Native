import { helperFunction } from '@utils/helper';

describe('Helper Function', () => {
  it('should return the correct string', () => {
    const result = helperFunction();
    expect(result).toBe('Helper Function');
  });
});
