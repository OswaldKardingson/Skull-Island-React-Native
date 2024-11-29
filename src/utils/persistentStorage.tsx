import RNFS from 'react-native-fs';

export const PIRATE_MOBILE_SAVE_PATH = `${RNFS.DocumentDirectoryPath}/zero_wallet.json`;
export const PIRATE_MOBILE_CONTACTS_PATH = `${RNFS.DocumentDirectoryPath}/zero_wallet_contacts.json`;

export const SERVERS_SAVE_PATH = `${RNFS.DocumentDirectoryPath}/liteservers.json`;
export const SERVERS_DOWNLOAD_PATH =
  'https://raw.githubusercontent.com/PirateNetwork/Skull-Island/litewallet_rebase/options/liteservers.json';

// Interfaces for return types
export interface FileOperationResult {
  success: boolean;
  path: string;
}

// Download server list to local storage
export async function downloadServerList(): Promise<FileOperationResult> {
  try {
    const response = await fetch(SERVERS_DOWNLOAD_PATH);
    if (!response.ok) {
      throw new Error(`Failed to fetch server list. Status: ${response.status}`);
    }

    const data = await response.text();
    await RNFS.writeFile(SERVERS_SAVE_PATH, data, 'utf8');
    return { success: true, path: SERVERS_SAVE_PATH };
  } catch (error) {
    throw new Error(`Failed to download server list: ${(error as Error).message}`);
  }
}

// Read file content from local storage
export async function readFromFile(fileName: string): Promise<string> {
  const pathToFile = `${RNFS.DocumentDirectoryPath}/${fileName}`;
  try {
    const fileExists = await RNFS.exists(pathToFile);
    if (!fileExists) {
      throw new Error('File does not exist');
    }

    const fileContent = await RNFS.readFile(pathToFile, 'utf8');
    return fileContent;
  } catch (error) {
    throw new Error(`Failed to read file: ${(error as Error).message}`);
  }
}

// Write data to a file
export async function writeDataToFile(fileName: string, data: any): Promise<FileOperationResult> {
  const pathToFile = `${RNFS.DocumentDirectoryPath}/${fileName}`;
  try {
    const jsonData = JSON.stringify(data, null, '\t');
    await RNFS.writeFile(pathToFile, jsonData, 'utf8');
    return { success: true, path: pathToFile };
  } catch (error) {
    throw new Error(`Failed to write data to file: ${(error as Error).message}`);
  }
}

// Get the local file system path (Documents Directory)
export function getLocalFileSystemURL(): string {
  return RNFS.DocumentDirectoryPath;
}
