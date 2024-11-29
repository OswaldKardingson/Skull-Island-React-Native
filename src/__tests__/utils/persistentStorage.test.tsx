import RNFS from 'react-native-fs';
import {
  downloadServerList,
  readFromFile,
  writeDataToFile,
  getLocalFileSystemURL,
  SERVERS_SAVE_PATH,
  SERVERS_DOWNLOAD_PATH,
} from '@utils/persistentStorage';

jest.mock('react-native-fs', () => ({
  DocumentDirectoryPath: '/mocked/documents',
  writeFile: jest.fn(),
  readFile: jest.fn(),
  exists: jest.fn(),
}));

describe('Persistent Storage Utilities', () => {
  it('should download and save server list', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        text: () => Promise.resolve('mocked server list'),
      })
    ) as jest.Mock;

    await expect(downloadServerList()).resolves.toEqual({
      success: true,
      path: SERVERS_SAVE_PATH,
    });

    expect(fetch).toHaveBeenCalledWith(SERVERS_DOWNLOAD_PATH);
    expect(RNFS.writeFile).toHaveBeenCalledWith(SERVERS_SAVE_PATH, 'mocked server list', 'utf8');
  });

  it('should throw an error when server list download fails', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        status: 404,
      })
    ) as jest.Mock;

    await expect(downloadServerList()).rejects.toThrow('Failed to fetch server list. Status: 404');
  });

  it('should read from a file if it exists', async () => {
    (RNFS.exists as jest.Mock).mockResolvedValue(true);
    (RNFS.readFile as jest.Mock).mockResolvedValue('mocked file content');

    await expect(readFromFile('mockedFile.json')).resolves.toBe('mocked file content');
    expect(RNFS.exists).toHaveBeenCalledWith('/mocked/documents/mockedFile.json');
    expect(RNFS.readFile).toHaveBeenCalledWith('/mocked/documents/mockedFile.json', 'utf8');
  });

  it('should throw an error if file does not exist', async () => {
    (RNFS.exists as jest.Mock).mockResolvedValue(false);

    await expect(readFromFile('nonexistentFile.json')).rejects.toThrow('File does not exist');
    expect(RNFS.exists).toHaveBeenCalledWith('/mocked/documents/nonexistentFile.json');
  });

  it('should write data to a file', async () => {
    await expect(writeDataToFile('mockedFile.json', { key: 'value' })).resolves.toEqual({
      success: true,
      path: '/mocked/documents/mockedFile.json',
    });

    expect(RNFS.writeFile).toHaveBeenCalledWith(
      '/mocked/documents/mockedFile.json',
      JSON.stringify({ key: 'value' }, null, '\t'),
      'utf8'
    );
  });

  it('should return the local file system path', () => {
    expect(getLocalFileSystemURL()).toBe('/mocked/documents');
  });
});
