import { Platform, StatusBar } from 'react-native';
import { getStatusBarHeight as getRNStatusBarHeight } from 'react-native-status-bar-height';

// Returns the height of the status bar
export function getStatusBarHeight() {
  return new Promise((resolve) => {
    const height =
      Platform.OS === 'android'
        ? StatusBar.currentHeight || 0
        : getRNStatusBarHeight(); // Handles iOS status bar height dynamically
    resolve(height);
  });
}
