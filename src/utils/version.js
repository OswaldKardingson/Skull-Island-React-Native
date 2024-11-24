import DeviceInfo from 'react-native-device-info';

// Fetches the app version using react-native-device-info
export function appVersion() {
  return new Promise((resolve, reject) => {
    try {
      const version = DeviceInfo.getVersion(); // Gets the version number
      resolve(version);
    } catch (error) {
      reject(error);
    }
  });
}
