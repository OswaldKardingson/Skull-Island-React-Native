import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
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
  ChainSyncBalanceErrorMsg2,
  ChainSyncBalanceUnits,
} from '../components/chainsync'; // Adjust the path if necessary

describe('ChainSync Styled Components', () => {
  it('renders ChainSyncBody with correct styles', () => {
    const theme = { height: 800, width: 400 }; // Mock theme values
    const { container } = render(<ChainSyncBody theme={theme} />);
    expect(container.firstChild).toHaveStyleRule('position', 'absolute');
    expect(container.firstChild).toHaveStyleRule('top', `${theme.height * 0.05}px`);
    expect(container.firstChild).toHaveStyleRule('width', `${theme.width}px`);
  });

  it('renders ChainSyncStatus with dynamic color based on synced prop', () => {
    const theme = { height: 800, width: 400 };
    const { container: synced } = render(
      <ChainSyncStatus theme={theme} synced={true} />
    );
    const { container: notSynced } = render(
      <ChainSyncStatus theme={theme} synced={false} />
    );

    expect(synced.firstChild).toHaveStyleRule('color', 'rgba(149,198,35,1)');
    expect(notSynced.firstChild).toHaveStyleRule('color', 'rgba(229,66,18,1)');
  });

  it('renders ChainSyncBalanceLogoImg with correct dimensions', () => {
    const theme = { height: 800, width: 400 };
    const { container } = render(<ChainSyncBalanceLogoImg theme={theme} />);
    expect(container.firstChild).toHaveStyleRule('height', `${theme.height * 0.075}px`);
    expect(container.firstChild).toHaveStyleRule('width', `${theme.height * 0.075}px`);
  });

  it('renders ChainSyncBalance with correct styles', () => {
    const theme = { height: 800, width: 400 };
    const { container } = render(<ChainSyncBalance theme={theme} />);
    expect(container.firstChild).toHaveStyleRule('text-align', 'right');
    expect(container.firstChild).toHaveStyleRule('background-color', '#000000');
  });

  it('renders ChainSyncBalanceErrorMsg1 with dynamic size and positioning', () => {
    const theme = { height: 800, width: 400 };
    const { container } = render(<ChainSyncBalanceErrorMsg1 theme={theme} />);
    expect(container.firstChild).toHaveStyleRule('font-size', `${theme.height * 0.0175}px`);
  });

  it('renders ChainSyncBTC with correct styles', () => {
    const theme = { height: 800, width: 400 };
    const { container } = render(<ChainSyncBTC theme={theme} />);
    expect(container.firstChild).toHaveStyleRule('text-align', 'right');
    expect(container.firstChild).toHaveStyleRule('color', 'white');
  });

  it('renders ChainSyncBalanceUnits with correct font-size and positioning', () => {
    const theme = { height: 800, width: 400 };
    const { container } = render(<ChainSyncBalanceUnits theme={theme} />);
    expect(container.firstChild).toHaveStyleRule('font-size', `${theme.height * 0.0225}px`);
    expect(container.firstChild).toHaveStyleRule('background-color', '#000000');
  });
});
