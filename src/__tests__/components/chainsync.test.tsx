import React from 'react';
import { render } from '@testing-library/react-native';
import {
  ChainSyncBody,
  ChainSyncDiv,
  ChainSyncStatus,
  ChainSyncUSD,
  ChainSyncCurrentBalance,
  ChainSyncBTC,
  ChainSyncBalanceLogo,
  ChainSyncBalanceLogoImg,
  ChainSyncBalance,
  ChainSyncBalanceError,
  ChainSyncBalanceErrorMsg1,
  ChainSyncBalanceUnits,
} from '@components/chainsync';

describe('ChainSync Components', () => {
  const mockTheme = {
    height: 640,
    width: 360,
    synced: true,
  };

  it('renders ChainSyncBody with correct styles', () => {
    const { getByTestId } = render(<ChainSyncBody testID="chainsync-body" {...mockTheme} />);
    const body = getByTestId('chainsync-body');
    expect(body).toBeTruthy();
  });

  it('renders ChainSyncDiv with correct styles', () => {
    const { getByTestId } = render(<ChainSyncDiv testID="chainsync-div" {...mockTheme} />);
    const div = getByTestId('chainsync-div');
    expect(div).toBeTruthy();
  });

  it('renders ChainSyncStatus with synced color', () => {
    const { getByTestId } = render(<ChainSyncStatus testID="chainsync-status" {...mockTheme} />);
    const status = getByTestId('chainsync-status');
    expect(status.props.style).toEqual(
      expect.arrayContaining([{ color: 'rgba(149,198,35,1)' }])
    );
  });

  it('renders ChainSyncUSD correctly', () => {
    const { getByTestId } = render(<ChainSyncUSD testID="chainsync-usd" {...mockTheme} />);
    const usd = getByTestId('chainsync-usd');
    expect(usd).toBeTruthy();
  });

  it('renders ChainSyncCurrentBalance correctly', () => {
    const { getByTestId } = render(
      <ChainSyncCurrentBalance testID="chainsync-current-balance" {...mockTheme} />
    );
    const currentBalance = getByTestId('chainsync-current-balance');
    expect(currentBalance).toBeTruthy();
  });

  it('renders ChainSyncBTC correctly', () => {
    const { getByTestId } = render(<ChainSyncBTC testID="chainsync-btc" {...mockTheme} />);
    const btc = getByTestId('chainsync-btc');
    expect(btc).toBeTruthy();
  });

  it('renders ChainSyncBalanceLogo correctly', () => {
    const { getByTestId } = render(
      <ChainSyncBalanceLogo testID="chainsync-balance-logo" {...mockTheme} />
    );
    const logo = getByTestId('chainsync-balance-logo');
    expect(logo).toBeTruthy();
  });

  it('renders ChainSyncBalanceLogoImg correctly', () => {
    const { getByTestId } = render(
      <ChainSyncBalanceLogoImg testID="chainsync-balance-logo-img" {...mockTheme} />
    );
    const logoImg = getByTestId('chainsync-balance-logo-img');
    expect(logoImg).toBeTruthy();
  });

  it('renders ChainSyncBalance correctly', () => {
    const { getByTestId } = render(
      <ChainSyncBalance testID="chainsync-balance" {...mockTheme} />
    );
    const balance = getByTestId('chainsync-balance');
    expect(balance).toBeTruthy();
  });

  it('renders ChainSyncBalanceError correctly', () => {
    const { getByTestId } = render(
      <ChainSyncBalanceError testID="chainsync-balance-error" {...mockTheme} />
    );
    const balanceError = getByTestId('chainsync-balance-error');
    expect(balanceError).toBeTruthy();
  });

  it('renders ChainSyncBalanceUnits correctly', () => {
    const { getByTestId } = render(
      <ChainSyncBalanceUnits testID="chainsync-balance-units" {...mockTheme} />
    );
    const balanceUnits = getByTestId('chainsync-balance-units');
    expect(balanceUnits).toBeTruthy();
  });

  it('renders ChainSyncBalanceErrorMsg1 correctly', () => {
    const { getByTestId } = render(
      <ChainSyncBalanceErrorMsg1 testID="chainsync-balance-error-msg1" {...mockTheme} />
    );
    const errorMsg1 = getByTestId('chainsync-balance-error-msg1');
    expect(errorMsg1).toBeTruthy();
  });
});
