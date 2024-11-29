/**
 * Formats a given date into a string in the format DD/MM/YYYY.
 * @param {string | number | Date} date - The date to format. Can be a string, timestamp, or Date object.
 * @returns {string} The formatted date string.
 */
export const formatDate = (date: string | number | Date): string => {
  const d = new Date(date);
  return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
};
