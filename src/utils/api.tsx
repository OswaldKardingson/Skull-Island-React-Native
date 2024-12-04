import liteServers from '@config/liteServersTypes'; // Import the liteServers configuration
import AsyncStorage from '@react-native-async-storage/async-storage'; // For saving sync progress
import { AppState } from 'react-native'; // App state handling
import activateKeepAwake from 'react-native-keep-awake'; // Prevent screen sleep
import BackgroundFetch from 'react-native-background-fetch'; // Background sync
import { generateMerkleTree, verifyMerkleProof } from '@utils/merklehelpers'; // Merkle helpers

// Global variables
let currentServerIndex = 0;
let isBackgroundSync = false; // Prevents lifecycle conflicts during background sync
const DEFAULT_CHUNK_SIZE = 100;

/**
 * Get the current base URL for API calls.
 * Rotates through primaryservers and backupservers as needed.
 * @returns {string} - The base URL
 */
function getBaseUrl(): string {
  if (currentServerIndex < liteServers.primaryservers.length) {
    return liteServers.primaryservers[currentServerIndex];
  }
  const backupIndex = currentServerIndex - liteServers.primaryservers.length;
  return liteServers.backupservers[backupIndex] || liteServers.primaryservers[0];
}

/**
 * Rotate to the next server in the list.
 * Resets to the first server if all servers have been tried.
 */
function rotateServer() {
  currentServerIndex++;
  if (
    currentServerIndex >=
    liteServers.primaryservers.length + liteServers.backupservers.length
  ) {
    currentServerIndex = 0; // Reset if all servers fail
  }
}

// Interface for API response
export interface ApiResponse<T> {
  data: T | null; // API data of generic type T
  error?: string; // Optional error message
}

// Interface for fetchData function props
export interface FetchDataProps {
  endpoint: string; // API endpoint to call
  testID?: string; // Optional testID for testing
}

/**
 * Fetches data from the API.
 * Includes fallback logic to switch servers on failure.
 * @param {FetchDataProps} props - Props containing endpoint and optional testID.
 * @returns {Promise<ApiResponse<T>>} API response or an error.
 */
export const fetchData = async <T = any>({ endpoint, testID }: FetchDataProps): Promise<ApiResponse<T>> => {
  let baseUrl = getBaseUrl();

  try {
    console.log(`Fetching data from: ${baseUrl}${endpoint}${testID ? ` with testID: ${testID}` : ''}`);

    const response = await fetch(`${baseUrl}${endpoint}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const data: T = await response.json();
    return { data };
  } catch (error) {
    console.error('Error fetching data:', error);

    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    rotateServer();
    return { data: null, error: errorMessage };
  }
};

// **1. Persist Sync Progress**
async function saveSyncProgress(progress: number) {
  await AsyncStorage.setItem('syncProgress', progress.toString());
}

async function getSyncProgress(): Promise<number> {
  const progress = await AsyncStorage.getItem('syncProgress');
  return progress ? parseInt(progress, 10) : 0;
}

// **2. Lifecycle Handling**
AppState.addEventListener('change', (nextAppState) => {
  if (isBackgroundSync) return; // Skip lifecycle handling during background sync

  if (nextAppState === 'background') {
    console.log('App moved to background. Pausing sync.');
  } else if (nextAppState === 'active') {
    console.log('App moved to foreground. Resuming sync.');
  }
});

// **3. Incremental Sync Logic**
async function syncBlocksIncrementally(): Promise<void> {
  try {
    const progress = await getSyncProgress();
    const latestBlockResponse = await fetchData<{ latestBlock: number }>({
      endpoint: `latest-block`,
    });

    if (!latestBlockResponse.data || latestBlockResponse.error) {
      throw new Error(latestBlockResponse.error || 'Failed to fetch the latest block height');
    }

    const latestBlock = latestBlockResponse.data.latestBlock;

    console.log(`Starting sync from block ${progress + 1} to ${latestBlock}`);
    await syncBlocks(progress + 1, latestBlock);

    console.log('Synchronization completed successfully');
  } catch (error) {
    console.error('Error during incremental sync:', error);
  }
}

// **4. Chunked Syncing with Parallelization**
async function syncBlocks(startBlock: number, endBlock: number): Promise<void> {
  const chunkSize = DEFAULT_CHUNK_SIZE;
  const chunkPromises: Promise<{ blocks: string[] }>[] = [];

  for (let i = startBlock; i <= endBlock; i += chunkSize) {
    const batchEnd = Math.min(i + chunkSize - 1, endBlock);
    chunkPromises.push(fetchBlocksWithRetry(i, batchEnd));
  }

  try {
    const chunkResults = await Promise.all(chunkPromises);

    for (const chunkResult of chunkResults) {
      if (chunkResult.blocks) {
        const validBlocks = validateBlocks(chunkResult.blocks);
        await processBlocks(validBlocks);
      }
    }

    await saveSyncProgress(endBlock);
  } catch (error) {
    console.error('Error syncing blocks in parallel:', error);
  }
}

/**
 * Process blocks to handle fetched data.
 * @param {string[]} blocks - Array of blocks to process.
 */
async function processBlocks(blocks: string[]): Promise<void> {
  for (const block of blocks) {
    try {
      const blockData = JSON.parse(block);

      if (!blockData.hash || !blockData.transactions) {
        console.error(`Invalid block data: ${block}`);
        continue;
      }

      await saveBlockToStorage(blockData);

      for (const transaction of blockData.transactions) {
        await processTransaction(transaction);
      }
    } catch (error) {
      console.error(`Error processing block: ${block}`, error);
    }
  }
}

async function saveBlockToStorage(blockData: any): Promise<void> {
  try {
    await AsyncStorage.setItem(`block_${blockData.hash}`, JSON.stringify(blockData));
    console.log(`Saved block with hash: ${blockData.hash}`);
  } catch (error) {
    console.error(`Error saving block to storage: ${blockData.hash}`, error);
  }
}

async function processTransaction(transaction: any): Promise<void> {
  try {
    console.log(`Processing transaction: ${JSON.stringify(transaction)}`);
  } catch (error) {
    console.error(`Error processing transaction: ${transaction}`, error);
  }
}

/**
 * Fetch blocks with retry logic.
 * @param {number} start - The starting block index.
 * @param {number} end - The ending block index.
 * @param {number} retries - The number of retry attempts.
 * @returns {Promise<{ blocks: string[] }>} The fetched blocks response.
 */
async function fetchBlocksWithRetry(
  start: number,
  end: number,
  retries = 3
): Promise<{ blocks: string[] }> {
  let attempts = 0;
  while (attempts < retries) {
    try {
      const response = await fetchData<{ blocks: string[] }>({
        endpoint: `blocks?start=${start}&end=${end}`,
      });

      if (response.data) {
        return response.data;
      } else {
        throw new Error(response.error || 'Unknown error fetching blocks');
      }
    } catch (error) {
      attempts++;
      console.log(`Retrying... (${attempts}/${retries})`);
    }
  }
  throw new Error('Failed to fetch blocks after retries');
}

function validateBlocks(blocks: string[]): string[] {
  return blocks.filter((block) => {
    try {
      const parsedBlock = JSON.parse(block);
      return !!parsedBlock.hash && !!parsedBlock.transactions;
    } catch {
      return false;
    }
  });
}

// **5. Background Sync**
BackgroundFetch.configure(
  { minimumFetchInterval: 15 },
  async (taskId) => {
    console.log('[BackgroundFetch] Start');
    isBackgroundSync = true;
    try {
      await syncBlocksIncrementally();
    } catch (error) {
      console.error('[BackgroundFetch] Error during sync:', error);
    } finally {
      isBackgroundSync = false;
      BackgroundFetch.finish(taskId);
    }
  },
  (error) => {
    console.error('[BackgroundFetch] Failed to start', error);
  }
);

// **6. Optimize Sync Logic**
interface MerkleSyncResponse {
  serverRoot: string;
  deltas: string[];
  proof: Buffer[];
}

async function syncDataWithMerkle(localData: string[]): Promise<string[]> {
  try {
    const localTree = generateMerkleTree(localData);
    const localRoot = localTree.getRoot().toString('hex');
    const response = await fetchData<MerkleSyncResponse>({
      endpoint: `merkle/sync?root=${localRoot}`,
    });

    if (!response.data || response.error) {
      throw new Error(response.error || 'Failed to fetch Merkle sync data');
    }

    const { serverRoot, deltas, proof } = response.data;

    if (localRoot === serverRoot) {
      console.log('Local data is up-to-date');
      return localData;
    }

    const valid = deltas.every((delta) => verifyMerkleProof(delta, proof, serverRoot));
    if (!valid) {
      throw new Error('Merkle proof verification failed');
    }

    const updatedData = [...localData, ...deltas];
    console.log('Data synchronized successfully');
    return updatedData;
  } catch (error) {
    console.error('Error during Merkle synchronization:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    rotateServer();
    return localData;
  }
}
  