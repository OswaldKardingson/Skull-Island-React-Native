import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {
  WalletMainSection,
  WalletHeaderFade,
  WalletFade,
  WalletTitle,
  WalletSubSection,
  WalletPassPhraseTitle,
  WalletPassPhraseArea,
  WalletPassPhraseInput,
  WalletPassPhraseGradientCapLeft,
  WalletPassPhraseGradientCapRight,
  WalletHeightTitle,
  WalletHeightArea,
  WalletNewButton,
  WalletRecoverButton,
  WalletBackButton,
  WalletNewPhraseButton,
  WalletCreateButton,
} from '../../components/wallet'; // Adjust the import path to match your folder structure

const mockTheme = {
  width: 360,
  height: 640,
};

const mockQrScanning = {
  display: 'block',
};

describe('Wallet Component Styled Tests', () => {
  it('renders the WalletMainSection with correct styles', () => {
    render(
      <WalletMainSection theme={mockTheme} qrScanning={mockQrScanning} data-testid="wallet-main-section" />
    );
    const mainSection = screen.getByTestId('wallet-main-section');
    expect(mainSection).toBeInTheDocument();
    expect(mainSection).toHaveStyle({
      width: '360px',
      height: '640px',
      display: 'block',
    });
  });

  it('renders the WalletHeaderFade with correct styles', () => {
    render(<WalletHeaderFade theme={mockTheme} data-testid="wallet-header-fade" />);
    const headerFade = screen.getByTestId('wallet-header-fade');
    expect(headerFade).toBeInTheDocument();
    expect(headerFade).toHaveStyle({
      height: `${mockTheme.height * 0.20}px`,
      width: `${mockTheme.width}px`,
    });
  });

  it('renders the WalletFade with correct styles', () => {
    render(<WalletFade theme={mockTheme} data-testid="wallet-fade" />);
    const fade = screen.getByTestId('wallet-fade');
    expect(fade).toBeInTheDocument();
    expect(fade).toHaveStyle({
      height: `${mockTheme.height * 0.01}px`,
    });
  });

  it('renders the WalletTitle with correct text and styles', () => {
    render(
      <WalletTitle theme={mockTheme} data-testid="wallet-title">
        Wallet
      </WalletTitle>
    );
    const title = screen.getByTestId('wallet-title');
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('Wallet');
    expect(title).toHaveStyle({
      color: '#bb9645',
      textAlign: 'center',
    });
  });

  it('renders the WalletSubSection with visibility', () => {
    render(
      <WalletSubSection theme={mockTheme} visible="visible" data-testid="wallet-sub-section" />
    );
    const subSection = screen.getByTestId('wallet-sub-section');
    expect(subSection).toBeInTheDocument();
    expect(subSection).toHaveStyle({ display: 'visible' });
  });

  it('renders WalletPassPhraseArea with correct styles', () => {
    render(
      <WalletPassPhraseArea theme={mockTheme} data-testid="wallet-passphrase-area" />
    );
    const area = screen.getByTestId('wallet-passphrase-area');
    expect(area).toBeInTheDocument();
    expect(area).toHaveStyle({
      backgroundColor: 'rgba(187,150,69,0.1)',
    });
  });

  it('renders WalletHeightTitle with text and styles', () => {
    render(
      <WalletHeightTitle theme={mockTheme} data-testid="wallet-height-title">
        Height Title
      </WalletHeightTitle>
    );
    const title = screen.getByTestId('wallet-height-title');
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('Height Title');
    expect(title).toHaveStyle({
      color: '#bb9645',
      textAlign: 'left',
    });
  });

  it('renders WalletNewButton with correct styles', () => {
    render(
      <WalletNewButton theme={mockTheme} data-testid="wallet-new-button">
        New Wallet
      </WalletNewButton>
    );
    const newButton = screen.getByTestId('wallet-new-button');
    expect(newButton).toBeInTheDocument();
    expect(newButton).toHaveTextContent('New Wallet');
    expect(newButton).toHaveStyle({
      backgroundColor: 'rgba(187,150,69,1)',
      color: 'white',
    });
  });

  it('renders WalletRecoverButton with correct styles', () => {
    render(
      <WalletRecoverButton theme={mockTheme} data-testid="wallet-recover-button">
        Recover Wallet
      </WalletRecoverButton>
    );
    const recoverButton = screen.getByTestId('wallet-recover-button');
    expect(recoverButton).toBeInTheDocument();
    expect(recoverButton).toHaveTextContent('Recover Wallet');
    expect(recoverButton).toHaveStyle({
      backgroundColor: 'rgba(48,49,51,1)',
    });
  });

  it('renders WalletBackButton with correct styles', () => {
    render(
      <WalletBackButton theme={mockTheme} data-testid="wallet-back-button">
        Back
      </WalletBackButton>
    );
    const backButton = screen.getByTestId('wallet-back-button');
    expect(backButton).toBeInTheDocument();
    expect(backButton).toHaveTextContent('Back');
    expect(backButton).toHaveStyle({
      backgroundColor: 'grey',
    });
  });

  it('renders WalletCreateButton with visibility', () => {
    render(
      <WalletCreateButton theme={mockTheme} visible="block" data-testid="wallet-create-button">
        Create Wallet
      </WalletCreateButton>
    );
    const createButton = screen.getByTestId('wallet-create-button');
    expect(createButton).toBeInTheDocument();
    expect(createButton).toHaveTextContent('Create Wallet');
    expect(createButton).toHaveStyle({ display: 'block' });
  });
});
