import * as LiteWallet from '@utils/litewallet';

jest.mock('./litewallet', () => ({
  wrapLiteWalletMethod: jest.fn((methodName: string, ...args: any[]) => {
    if (methodName === 'checkserver') return Promise.resolve(true);
    if (methodName === 'balance') return Promise.resolve(1000);
    if (methodName === 'sync') return Promise.resolve();
    return Promise.reject(new Error('Method not implemented'));
  }),
}));

describe('LiteWallet Functions', () => {
  it('should check server status', async () => {
    const response = await LiteWallet.checkServer('test-server');
    expect(response).toBe(true);
  });

  it('should retrieve balance', async () => {
    const balance = await LiteWallet.balance();
    expect(balance).toBe(1000);
  });

  it('should handle sync successfully', async () => {
    await expect(LiteWallet.sync()).resolves.toBeUndefined();
  });

  it('should throw an error for unsupported methods', async () => {
    await expect(LiteWallet.newWallet('url')).rejects.toThrow('Method not implemented');
  });
});
