/**
 * Appends a parameter to a URL.
 * Ensures the URL ends with a '/' before appending.
 * @param {string} url - The base URL.
 * @param {string} param - The parameter to append.
 * @returns {string} The updated URL.
 */
export function urlAppend(url: string, param: string): string {
  if (!url.endsWith('/')) {
    url += '/';
  }
  return `${url}${param}`;
}

/**
 * Checks if a value is a valid decimal number.
 * If the input is invalid, truncates the last character.
 * @param {string} v - The input value to validate.
 * @returns {string} The validated decimal string.
 */
export function checkDec(v: string): string {
  const decimalRegex = /^[0-9]+\.?[0-9]*$/;
  if (!decimalRegex.test(v)) {
    v = v.substring(0, v.length - 1);
  }
  return v;
}

/**
 * Formats a number to a specific number of decimal places.
 * Defaults to 5 decimal places if not specified.
 * @param {number | string} v - The value to format.
 * @param {number} [decimalPlaces=5] - The number of decimal places.
 * @returns {string} The formatted number as a string.
 */
export function prettyFormatPrices(v: number | string, decimalPlaces = 5): string {
  const parsedValue = typeof v === 'string' ? parseFloat(v) : v;
  return parsedValue.toFixed(decimalPlaces);
}
