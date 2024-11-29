// src/@types/bip32.d.ts

declare module 'bip32' {
    import { Network } from 'bitcoinjs-lib';
  
    export interface BIP32Interface {
      derivePath(path: string): BIP32Interface;
      derive(index: number): BIP32Interface;
      publicKey: Buffer;
      privateKey?: Buffer | undefined;
      toWIF(): string;
    }
  
    export function fromSeed(seed: Buffer, network?: Network): BIP32Interface;
  }
  