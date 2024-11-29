import { saltHashPassword, encrypt, decrypt, PwSalt, KeySalt } from '@utils/hash';

describe('Hash Utility Functions', () => {
  it('should hash password with salt', () => {
    const password = 'testpassword';
    const hashedPassword = saltHashPassword(password, PwSalt);

    expect(hashedPassword).toBeDefined();
    expect(hashedPassword).not.toBe(password); // Ensure it's hashed
  });

  it('should encrypt and decrypt text correctly', () => {
    const text = 'This is a secret message';
    const keyHash = PwSalt + KeySalt; // Combine salts for the test
    const encrypted = encrypt(text, keyHash);

    expect(encrypted).toBeDefined();
    expect(typeof encrypted).toBe('string');

    const decrypted = decrypt(encrypted, keyHash);

    expect(decrypted).toBeDefined();
    expect(decrypted).toBe(text); // Ensure decryption works correctly
  });

  it('should throw error for invalid keyHash length', () => {
    const text = 'Another secret message';
    const invalidKeyHash = 'shortkeyhash'; // Invalid keyHash

    expect(() => encrypt(text, invalidKeyHash)).toThrow();
    expect(() => decrypt(text, invalidKeyHash)).toThrow();
  });
});
