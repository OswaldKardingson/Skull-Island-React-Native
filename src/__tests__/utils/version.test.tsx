import { appVersion } from '@utils/version';
import DeviceInfo from 'react-native-device-info';

jest.mock('react-native-device-info', () => ({
  getVersion: jest.fn(),
}));

describe('appVersion', () => {
  it('returns the app version successfully', async () => {
    (DeviceInfo.getVersion as jest.Mock).mockReturnValue('1.0.0'); // Mock return value

    const version = await appVersion();
    expect(version).toBe('1.0.0');
  });

  it('throws an error if fetching version fails', async () => {
    (DeviceInfo.getVersion as jest.Mock).mockImplementation(() => {
      throw new Error('Mock error');
    });

    await expect(appVersion()).rejects.toThrow('Failed to fetch app version');
  });
});
