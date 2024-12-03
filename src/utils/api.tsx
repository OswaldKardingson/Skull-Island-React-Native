import liteServers from '@config/liteServersTypes'; // Import the liteServers configuration
import AsyncStorage from '@react-native-async-storage/async-storage'; // For saving sync progress
import { AppState } from 'react-native'; // App state handling
import activateKeepAwake from 'react-native-keep-awake'; // Prevent screen sleep
import BackgroundFetch from 'react-native-background-fetch'; // Background sync
import { generateMerkleTree, verifyMerkleProof } from '@utils/merklehelpers'; // Merkle helpers

// Global variable to track the current server being used
let currentServerIndex = 0;

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
  testID?: string;  // Optional testID for testing
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

    // Check for HTTP errors
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    // Parse the JSON response
    const data: T = await response.json();
    return { data };
  } catch (error) {
    console.error('Error fetching data:', error);

    // Explicitly handle 'unknown' error type
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    rotateServer(); // Switch to the next server
    return { data: null, error: errorMessage };
  }
};

// **1. Persist Sync Progress**
async function saveSyncProgress(progress: number) {
  await AsyncStorage.setItem('syncProgress', progress.toString());
}

async function getSyncProgress(): Promise<number> {
  const progress = await AsyncStorage.getItem('syncProgress');
  return progress ? parseInt(progress, 10) : 0; // Default to 0 if no progress is saved
}

// **2. Lifecycle Handling**
AppState.addEventListener('change', (nextAppState) => {
  if (nextAppState === 'background') {
    console.log('App moved to background. Pausing sync.');
  } else if (nextAppState === 'active') {
    console.log('App moved to foreground. Resuming sync.');
  }
});

// **3. Chunked Syncing**
async function syncBlocks(startBlock: number, endBlock: number): Promise<void> {
  for (let i = startBlock; i <= endBlock; i += 100) {
    const batchEnd = Math.min(i + 99, endBlock);

    // Fetch blocks with retry logic
    const blocksResponse = await fetchBlocksWithRetry(i, batchEnd);

    // Extract the blocks array from the response object
    const { blocks } = blocksResponse;

    // Pass the blocks array to processBlocks
    await processBlocks(blocks);

    // Save progress after each batch
    await saveSyncProgress(batchEnd);
  }
}

/**
 * Process blocks to handle fetched data.
 * @param {string[]} blocks - Array of blocks to process.
 */
async function processBlocks(blocks: string[]): Promise<void> {
  for (const block of blocks) {
    // Replace this with actual block processing logic (e.g., validation or saving)
    console.log(`Processing block: ${block}`);
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

// **4. User Feedback**
async function showSyncProgress(currentBlock: number, totalBlocks: number) {
  const progressPercentage = (currentBlock / totalBlocks) * 100;
  console.log(`Sync Progress: ${progressPercentage.toFixed(2)}%`);
}

// **5. Background Sync**
BackgroundFetch.configure(
  { minimumFetchInterval: 15 }, // Sync every 15 minutes
  async (taskId) => {
    console.log('[BackgroundFetch] Start');
    const progress = await getSyncProgress();
    await syncBlocks(progress, 10000); // Replace 10000 with total blocks
    BackgroundFetch.finish(taskId);
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

    // Explicitly handle 'unknown' error type
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    rotateServer();
    return localData;
  }
}
