'use strict';
import crypto from 'crypto';

// Constants for salts
export const PwSalt: string =
  'b442d703357362b59017c9ea8823f6b8412bad33f1a6d8fec5e41a47689fd524';
export const KeySalt: string =
  '7b792df82bc433faa6913e3034d103f00c64360f081c7a88a8c8527652693dff';

/**
 * Hash password with sha512.
 * @function
 * @param {string} password - The password to hash.
 * @param {string} salt - The salt to use for hashing.
 * @returns {{ salt: string, passwordHash: string }} The salt and hashed password.
 */
const sha512 = (password: string, salt: string): { salt: string; passwordHash: string } => {
  const hash = crypto.createHmac('sha512', salt); // Hashing algorithm sha512
  hash.update(password);
  const value = hash.digest('hex');
  return {
    salt: salt,
    passwordHash: value,
  };
};

/**
 * Salt and hash the password.
 * @param {string} userpassword - The user's password.
 * @param {string} salt - The salt to use for hashing.
 * @returns {string} The hashed password.
 */
export function saltHashPassword(userpassword: string, salt: string): string {
  const passwordData = sha512(userpassword, salt);
  return passwordData.passwordHash;
}

/**
 * Encrypt text using AES-256-CBC.
 * @param {string} text - The text to encrypt.
 * @param {string} keyHash - The key used for encryption (128 bits IV + 256 bits key).
 * @returns {string} The encrypted text in hex format.
 */
export function encrypt(text: string, keyHash: string): string {
  const cipher = crypto.createCipheriv(
    'aes-256-cbc',
    Buffer.from(keyHash.slice(0, 64), 'hex'), // Key (256 bits)
    Buffer.from(keyHash.slice(64, 96), 'hex') // IV (128 bits)
  );
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return encrypted.toString('hex');
}

/**
 * Decrypt text using AES-256-CBC.
 * @param {string} text - The encrypted text in hex format.
 * @param {string} keyHash - The key used for decryption (128 bits IV + 256 bits key).
 * @returns {string} The decrypted text.
 */
export function decrypt(text: string, keyHash: string): string {
  const encryptedText = Buffer.from(text, 'hex');
  const decipher = crypto.createDecipheriv(
    'aes-256-cbc',
    Buffer.from(keyHash.slice(0, 64), 'hex'), // Key (256 bits)
    Buffer.from(keyHash.slice(64, 96), 'hex') // IV (128 bits)
  );
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
}
