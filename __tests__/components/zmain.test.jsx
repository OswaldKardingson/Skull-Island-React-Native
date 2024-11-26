import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {
  ZMainDiv,
  ZMainBlackBackgroundQR,
  ZMainMenu,
  ZMainMenuButton,
  ZMainMenuContent,
  ZMainSendButton,
  ZMainReceiveButton,
  ZMainMiddleSection,
  ZMainAddressListHeader,
  ZMainTransactionList,
} from '../../components/zmain'; // Ensure the path matches your project structure

const mockTheme = {
  width: 360,
  height: 640,
};

describe('ZMain Styled Components Tests', () => {
  it('renders ZMainDiv with correct styles', () => {
    render(<ZMainDiv theme={mockTheme} visible="block" data-testid="zmain-div" />);
    const div = screen.getByTestId('zmain-div');
    expect(div).toBeInTheDocument();
    expect(div).toHaveStyle({
      height: `${mockTheme.height}px`,
      width: `${mockTheme.width}px`,
      display: 'block',
    });
  });

  it('renders ZMainBlackBackgroundQR with correct styles', () => {
    render(
      <ZMainBlackBackgroundQR
        theme={mockTheme}
        qrScanning={{ opacity: 0.5 }}
        data-testid="zmain-black-bg"
      />
    );
    const bg = screen.getByTestId('zmain-black-bg');
    expect(bg).toBeInTheDocument();
    expect(bg).toHaveStyle({
      backgroundColor: '#000000',
      opacity: '0.5',
    });
  });

  it('renders ZMainMenu with correct styles', () => {
    render(<ZMainMenu theme={mockTheme} visible="flex" data-testid="zmain-menu" />);
    const menu = screen.getByTestId('zmain-menu');
    expect(menu).toBeInTheDocument();
    expect(menu).toHaveStyle({
      height: `${mockTheme.height * 0.05}px`,
      backgroundColor: '#000000',
      color: '#ffffff',
      display: 'flex',
    });
  });

  it('renders ZMainMenuButton with correct styles', () => {
    render(<ZMainMenuButton theme={mockTheme} data-testid="zmain-menu-button">Menu</ZMainMenuButton>);
    const button = screen.getByTestId('zmain-menu-button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle({
      backgroundColor: '#000000',
      color: '#ffffff',
      width: `${mockTheme.height * 0.025 * 1.5}px`,
      height: `${mockTheme.height * 0.025}px`,
    });
  });

  it('renders ZMainMenuContent with correct visibility', () => {
    render(<ZMainMenuContent theme={mockTheme} visible="block" data-testid="zmain-menu-content" />);
    const content = screen.getByTestId('zmain-menu-content');
    expect(content).toBeInTheDocument();
    expect(content).toHaveStyle({
      display: 'block',
      backgroundColor: '#000000',
      height: `${mockTheme.height}px`,
      width: `${mockTheme.width}px`,
    });
  });

  it('renders ZMainSendButton with correct styles', () => {
    render(
      <ZMainSendButton theme={mockTheme} opacity={1} data-testid="zmain-send-button">
        Send
      </ZMainSendButton>
    );
    const sendButton = screen.getByTestId('zmain-send-button');
    expect(sendButton).toBeInTheDocument();
    expect(sendButton).toHaveStyle({
      backgroundColor: '#bb9645',
      color: 'white',
      width: `${mockTheme.width * 0.325}px`,
      height: `${mockTheme.height * 0.075}px`,
      opacity: '1',
    });
  });

  it('renders ZMainReceiveButton with correct styles', () => {
    render(
      <ZMainReceiveButton theme={mockTheme} opacity={0.8} data-testid="zmain-receive-button">
        Receive
      </ZMainReceiveButton>
    );
    const receiveButton = screen.getByTestId('zmain-receive-button');
    expect(receiveButton).toBeInTheDocument();
    expect(receiveButton).toHaveStyle({
      backgroundColor: '#303133',
      color: 'white',
      width: `${mockTheme.width * 0.325}px`,
      height: `${mockTheme.height * 0.075}px`,
      opacity: '0.8',
    });
  });

  it('renders ZMainMiddleSection with correct styles', () => {
    render(<ZMainMiddleSection theme={mockTheme} data-testid="zmain-middle-section" />);
    const middleSection = screen.getByTestId('zmain-middle-section');
    expect(middleSection).toBeInTheDocument();
    expect(middleSection).toHaveStyle({
      top: `${mockTheme.height * 0.175}px`,
      height: `${mockTheme.height * 0.1625}px`,
      width: `${mockTheme.width}px`,
      backgroundColor: 'rgba(0, 0, 0, 1)',
    });
  });

  it('renders ZMainAddressListHeader with correct styles', () => {
    render(<ZMainAddressListHeader theme={mockTheme} data-testid="zmain-address-header" />);
    const header = screen.getByTestId('zmain-address-header');
    expect(header).toBeInTheDocument();
    expect(header).toHaveStyle({
      fontSize: `${((mockTheme.width * 0.7) / 25) * 1.5}px`,
      color: '#bb9645',
      backgroundImage: 'linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))',
    });
  });

  it('renders ZMainTransactionList with correct styles', () => {
    render(<ZMainTransactionList theme={mockTheme} data-testid="zmain-transaction-list" />);
    const transactionList = screen.getByTestId('zmain-transaction-list');
    expect(transactionList).toBeInTheDocument();
    expect(transactionList).toHaveStyle({
      top: `${((mockTheme.width * 0.7) / 17) * 1.5}px`,
      width: `${mockTheme.width}px`,
    });
  });
});
