declare module 'merkletreejs' {
    export class MerkleTree {
      constructor(leaves: Buffer[], hashFunction: (data: Buffer) => Buffer);
      getRoot(): Buffer;
      getProof(leaf: Buffer): Buffer[];
      static verify(proof: Buffer[], targetNode: Buffer, root: Buffer, hashFunction: (data: Buffer) => Buffer): boolean;
    }
  }
  