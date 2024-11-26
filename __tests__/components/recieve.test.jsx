import React from 'react';
import { render } from '@testing-library/react';
import {
  ReceiveDiv,
  ReceiveSectionOverscroll,
  ReceiveSection,
  ReceiveTitle,
  ReceiveAddressTitle,
  ReceiveAddressArea,
  ReceiveAddressInput,
  ReceiveCopyButton,
  ReceiveNote1,
  ReceiveNote2,
  ReceiveQRTitle,
  ReceiveQRBase,
  ReceiveQR,
  ReceiveBackButton,
} from '../components/receive'; // Adjust the path if needed
import { ThemeProvider } from 'styled-components';

// Mock theme for testing
const mockTheme = {
  width: 400,
  height: 800,
};

describe('Receive Component', () => {
  it('renders ReceiveDiv with visibility', () => {
    const { container } = render(
      <ThemeProvider theme={mockTheme}>
        <ReceiveDiv visible="block" />
      </ThemeProvider>
    );
    const receiveDiv = container.firstChild;

    expect(receiveDiv).toHaveStyle('display: block');
  });

  it('renders ReceiveSectionOverscroll with correct dimensions', () => {
    const { container } = render(
      <ThemeProvider theme={mockTheme}>
        <ReceiveSectionOverscroll />
      </ThemeProvider>
    );
    const sectionOverscroll = container.firstChild;

    expect(sectionOverscroll).toHaveStyle(`top: ${mockTheme.height * 0.0125}px`);
    expect(sectionOverscroll).toHaveStyle(`height: ${mockTheme.height * 0.975}px`);
    expect(sectionOverscroll).toHaveStyle(`width: ${mockTheme.width}px`);
  });

  it('renders ReceiveTitle with correct styles', () => {
    const { container } = render(
      <ThemeProvider theme={mockTheme}>
        <ReceiveTitle />
      </ThemeProvider>
    );
    const title = container.firstChild;

    expect(title).toHaveStyle(`top: ${mockTheme.height * 0.05}px`);
    expect(title).toHaveStyle(`font-size: ${(mockTheme.width * (1.5 / 21)).toFixed(2)}px`);
    expect(title).toHaveStyle('color: #bb9645');
  });

  it('renders ReceiveAddressTitle with correct styles', () => {
    const { container } = render(
      <ThemeProvider theme={mockTheme}>
        <ReceiveAddressTitle />
      </ThemeProvider>
    );
    const addressTitle = container.firstChild;

    expect(addressTitle).toHaveStyle('color: #bb9645');
    expect(addressTitle).toHaveStyle(`font-size: ${(mockTheme.width * (1.5 / 36)).toFixed(2)}px`);
  });

  it('renders ReceiveAddressInput with correct dimensions and styles', () => {
    const { container } = render(
      <ThemeProvider theme={mockTheme}>
        <ReceiveAddressInput />
      </ThemeProvider>
    );
    const addressInput = container.firstChild;

    expect(addressInput).toHaveStyle(`border-width: 0px 0px 2px 0px`);
    expect(addressInput).toHaveStyle(`width: ${mockTheme.width * 0.9}px`);
  });

  it('renders ReceiveCopyButton with correct size and position', () => {
    const { container } = render(
      <ThemeProvider theme={mockTheme}>
        <ReceiveCopyButton />
      </ThemeProvider>
    );
    const copyButton = container.firstChild;

    expect(copyButton).toHaveStyle(`width: ${mockTheme.width * 0.25}px`);
    expect(copyButton).toHaveStyle('background-color: rgba(48,49,51,1)');
  });

  it('renders ReceiveQR with correct dimensions', () => {
    const { container } = render(
      <ThemeProvider theme={mockTheme}>
        <ReceiveQR />
      </ThemeProvider>
    );
    const qr = container.firstChild;

    expect(qr).toHaveStyle(`width: ${mockTheme.width * 0.9}px`);
    expect(qr).toHaveStyle(`height: ${mockTheme.width * 0.9}px`);
  });

  it('renders ReceiveBackButton with correct dimensions and styles', () => {
    const { container } = render(
      <ThemeProvider theme={mockTheme}>
        <ReceiveBackButton />
      </ThemeProvider>
    );
    const backButton = container.firstChild;

    expect(backButton).toHaveStyle(`width: ${mockTheme.width * 0.325}px`);
    expect(backButton).toHaveStyle('background-color: rgba(187,150,69,1)');
  });

  it('renders ReceiveNote1 and ReceiveNote2 with correct font size and alignment', () => {
    const { container: note1Container } = render(
      <ThemeProvider theme={mockTheme}>
        <ReceiveNote1 />
      </ThemeProvider>
    );
    const { container: note2Container } = render(
      <ThemeProvider theme={mockTheme}>
        <ReceiveNote2 />
      </ThemeProvider>
    );

    const note1 = note1Container.firstChild;
    const note2 = note2Container.firstChild;

    expect(note1).toHaveStyle(`font-size: ${(mockTheme.width * (1.5 / 52)).toFixed(2)}px`);
    expect(note1).toHaveStyle('text-align: center');
    expect(note2).toHaveStyle('text-align: center');
  });
});
