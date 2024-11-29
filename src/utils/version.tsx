import DeviceInfo from 'react-native-device-info';

/**
 * Fetches the app version using react-native-device-info.
 *
 * @returns {Promise<string>} A promise resolving to the app version string.
 */
export async function appVersion(): Promise<string> {
  try {
    const version: string = DeviceInfo.getVersion(); // Gets the version number
    return version;
  } catch (error) {
    console.error('Failed to fetch app version:', error);
    throw new Error('Failed to fetch app version');
  }
}
