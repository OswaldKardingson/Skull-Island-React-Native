import { createHash } from 'crypto';
import { MerkleTree } from 'merkletreejs';

/**
 * Hashing function using sha256
 * @param {Buffer} data - Input buffer
 * @returns {Buffer} - Hashed output as a Buffer
 */
function sha256(data: Buffer): Buffer {
  return createHash('sha256').update(data).digest();
}

/**
 * Generate a Merkle tree from data
 * @param {string[]} data - Array of string leaves
 * @returns {MerkleTree} - Generated MerkleTree instance
 */
export function generateMerkleTree(data: string[]): MerkleTree {
  const leaves = data.map((item) => sha256(Buffer.from(item)));
  return new MerkleTree(leaves, sha256);
}

/**
 * Verify a Merkle proof
 * @param {string} leaf - Leaf node as a string
 * @param {Buffer[]} proof - Proof array (Buffer[])
 * @param {string} root - Root hash as a hex string
 * @returns {boolean} - Verification result
 */
export function verifyMerkleProof(leaf: string, proof: Buffer[], root: string): boolean {
  const leafHash = sha256(Buffer.from(leaf));
  return MerkleTree.verify(proof, leafHash, Buffer.from(root, 'hex'), sha256);
}
