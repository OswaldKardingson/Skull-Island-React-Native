import { Platform, StatusBar } from 'react-native';
import { getStatusBarHeight } from '@utils/statusbar';

jest.mock('react-native', () => ({
  Platform: {
    OS: 'android',
  },
  StatusBar: {
    currentHeight: 24,
  },
}));

jest.mock('react-native-status-bar-height', () => ({
  getStatusBarHeight: jest.fn(() => 20), // Mock iOS status bar height
}));

describe('getStatusBarHeight', () => {
  it('returns the Android status bar height', async () => {
    Platform.OS = 'android';
    StatusBar.currentHeight = 24;

    const height = await getStatusBarHeight();
    expect(height).toBe(24);
  });

  it('returns the iOS status bar height', async () => {
    Platform.OS = 'ios';

    const height = await getStatusBarHeight();
    expect(height).toBe(20);
  });

  it('returns 0 when Android status bar height is unavailable', async () => {
    Platform.OS = 'android';
    StatusBar.currentHeight = undefined; // Simulate unavailable status bar height

    const height = await getStatusBarHeight();
    expect(height).toBe(0);
  });
});
