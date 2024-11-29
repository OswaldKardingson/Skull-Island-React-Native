import { formatDate } from '@utils/helpers';

describe('formatDate Function', () => {
  it('should format a Date object correctly', () => {
    const date = new Date('2024-11-29');
    expect(formatDate(date)).toBe('29/11/2024');
  });

  it('should format a timestamp correctly', () => {
    const timestamp = Date.parse('2024-11-29');
    expect(formatDate(timestamp)).toBe('29/11/2024');
  });

  it('should format a date string correctly', () => {
    const dateString = '2024-11-29';
    expect(formatDate(dateString)).toBe('29/11/2024');
  });

  it('should handle invalid dates gracefully', () => {
    expect(() => formatDate('invalid-date')).toThrowError(
      'Invalid time value'
    );
  });
});
