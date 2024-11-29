import { coins } from '@utils/coins';

describe('Coins Configuration', () => {
  it('should have a valid pirate coin configuration', () => {
    expect(coins.pirate).toBeDefined();
    expect(coins.pirate.networkname).toBe('arrr');
    expect(coins.pirate.coinGeckoId).toBe('pirate-chain');
    expect(coins.pirate.icon).toContain('pirate/logo.svg');
    expect(coins.pirate.qrlogo).toContain('pirate/qrlogo.svg');
    expect(coins.pirate.explorer).toContain('https://explorer.piratechain.com/');
    expect(coins.pirate.primaryservers.length).toBeGreaterThan(0);
    expect(coins.pirate.backupservers.length).toBeGreaterThan(0);
    expect(coins.pirate.tEnabled).toBe(false);
    expect(coins.pirate.branchHeight.sapling).toBe(152855);
  });

  it('should contain valid URLs for primary servers', () => {
    coins.pirate.primaryservers.forEach((server) => {
      expect(server).toMatch(/^https:\/\/.+$/);
    });
  });

  it('should contain valid URLs for backup servers', () => {
    coins.pirate.backupservers.forEach((server) => {
      expect(server).toMatch(/^https:\/\/.+$/);
    });
  });
});
