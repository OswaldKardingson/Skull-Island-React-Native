import { Platform, StatusBar } from 'react-native';
import { getStatusBarHeight as getRNStatusBarHeight } from 'react-native-status-bar-height';

/**
 * Returns the height of the status bar.
 * Handles platform-specific logic for Android and iOS.
 *
 * @returns {Promise<number>} A promise resolving to the height of the status bar in pixels.
 */
export function getStatusBarHeight(): Promise<number> {
  return new Promise((resolve) => {
    const height: number =
      Platform.OS === 'android'
        ? StatusBar.currentHeight || 0
        : getRNStatusBarHeight(); // Handles iOS status bar height dynamically
    resolve(height);
  });
}
