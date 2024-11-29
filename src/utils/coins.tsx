// Importing assets
import pirateLogo from '@assets/pirate/logo.svg';
import pirateQrLogo from '@assets/pirate/qrlogo.svg';

// Define interfaces for coin structure
export interface BranchHeight {
  default: number;
  unused: number;
  overwinter: number;
  sapling: number;
}

export interface Coin {
  networkname: string;
  coinGeckoId: string;
  icon: string; // Path to the icon
  qrlogo: string; // Path to the QR logo
  explorer: string[];
  primaryservers: string[];
  backupservers: string[];
  tEnabled: boolean;
  branchHeight: BranchHeight;
}

// Define a structure for all coins
export interface Coins {
  [key: string]: Coin;
}

// Coins object with full type safety
export const coins: Coins = {
  pirate: {
    networkname: 'arrr',
    coinGeckoId: 'pirate-chain',
    icon: pirateLogo,
    qrlogo: pirateQrLogo,
    explorer: ['https://explorer.piratechain.com/'],
    primaryservers: [
      'https://lightd1.pirate.black:443/',
      'https://piratelightd.cryptoforge.cc:443/',
    ],
    backupservers: [
      'https://piratelightd1.cryptoforge.cc:443/',
      'https://piratelightd2.cryptoforge.cc:443/',
      'https://piratelightd3.cryptoforge.cc:443/',
      'https://piratelightd4.cryptoforge.cc:443/',
    ],
    tEnabled: false,
    branchHeight: {
      default: 0,
      unused: 0,
      overwinter: 0,
      sapling: 152855,
    },
  },
};
