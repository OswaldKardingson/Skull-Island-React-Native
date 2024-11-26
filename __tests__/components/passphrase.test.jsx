import React from 'react';
import { render } from '@testing-library/react';
import {
  PassPhraseDiv,
  PassPhraseSectionOverscroll,
  PassPhraseSection,
  PassPhraseTitle,
  PassPhrasePWTitle,
  PassPhrasePWArea,
  PassPhrasePWInput,
  PassPhrasePWGradientCapLeft,
  PassPhrasePWGradientCapRight,
  PassPhrasePWRedText,
  PassPhraseArea,
  PassPhraseInput,
  PassPhraseInnerInput,
  PassPhraseGradientCapLeft,
  PassPhraseGradientCapRight,
  PassPhraseRedText,
  PassPhraseCopyButton,
  PassPhraseNote1,
  PassPhraseNote2,
  PassPhraseQRTitle,
  PassPhraseQRBase,
  PassPhraseQR,
  PassPhraseBackButton,
} from '../components/passphrase'; // Adjust the path if needed
import { ThemeProvider } from 'styled-components';

// Mock theme for testing
const mockTheme = {
  width: 400,
  height: 800,
};

describe('PassPhrase Component', () => {
  it('renders PassPhraseDiv with visibility', () => {
    const { container } = render(
      <ThemeProvider theme={mockTheme}>
        <PassPhraseDiv visible="block" />
      </ThemeProvider>
    );
    const passPhraseDiv = container.firstChild;

    expect(passPhraseDiv).toHaveStyle('display: block');
  });

  it('renders PassPhraseSectionOverscroll with correct dimensions', () => {
    const { container } = render(
      <ThemeProvider theme={mockTheme}>
        <PassPhraseSectionOverscroll />
      </ThemeProvider>
    );
    const sectionOverscroll = container.firstChild;

    expect(sectionOverscroll).toHaveStyle(`top: ${mockTheme.height * 0.0125}px`);
    expect(sectionOverscroll).toHaveStyle(`height: ${mockTheme.height * 0.975}px`);
    expect(sectionOverscroll).toHaveStyle(`width: ${mockTheme.width}px`);
  });

  it('renders PassPhraseTitle with correct styles', () => {
    const { container } = render(
      <ThemeProvider theme={mockTheme}>
        <PassPhraseTitle />
      </ThemeProvider>
    );
    const title = container.firstChild;

    expect(title).toHaveStyle(`top: ${mockTheme.height * 0.05}px`);
    expect(title).toHaveStyle(`font-size: ${(mockTheme.width * (1.5 / 21)).toFixed(2)}px`);
    expect(title).toHaveStyle('color: #bb9645');
  });

  it('renders PassPhrasePWTitle with correct styles', () => {
    const { container } = render(
      <ThemeProvider theme={mockTheme}>
        <PassPhrasePWTitle />
      </ThemeProvider>
    );
    const pwTitle = container.firstChild;

    expect(pwTitle).toHaveStyle('color: #bb9645');
    expect(pwTitle).toHaveStyle(`font-size: ${(mockTheme.width * (1.5 / 36)).toFixed(2)}px`);
  });

  it('renders PassPhrasePWInput with correct dimensions and border', () => {
    const { container } = render(
      <ThemeProvider theme={mockTheme}>
        <PassPhrasePWInput />
      </ThemeProvider>
    );
    const input = container.firstChild;

    expect(input).toHaveStyle(`border-width: 0px 0px 2px 0px`);
    expect(input).toHaveStyle(`width: ${mockTheme.width * 0.9}px`);
  });

  it('renders PassPhraseCopyButton with correct size and position', () => {
    const { container } = render(
      <ThemeProvider theme={mockTheme}>
        <PassPhraseCopyButton />
      </ThemeProvider>
    );
    const copyButton = container.firstChild;

    expect(copyButton).toHaveStyle(`width: ${mockTheme.width * 0.25}px`);
    expect(copyButton).toHaveStyle('background-color: rgba(48,49,51,1)');
  });

  it('renders PassPhraseQR with correct dimensions', () => {
    const { container } = render(
      <ThemeProvider theme={mockTheme}>
        <PassPhraseQR />
      </ThemeProvider>
    );
    const qr = container.firstChild;

    expect(qr).toHaveStyle(`width: ${mockTheme.width * 0.9}px`);
    expect(qr).toHaveStyle(`height: ${mockTheme.width * 0.9}px`);
  });

  it('renders PassPhraseBackButton with correct dimensions and position', () => {
    const { container } = render(
      <ThemeProvider theme={mockTheme}>
        <PassPhraseBackButton />
      </ThemeProvider>
    );
    const backButton = container.firstChild;

    expect(backButton).toHaveStyle(`width: ${mockTheme.width * 0.325}px`);
    expect(backButton).toHaveStyle('background-color: rgba(187,150,69,1)');
  });
});
