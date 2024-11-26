import React from 'react';
import { render } from '@testing-library/react';
import {
  ReindexDiv,
  ReindexSectionOverscroll,
  ReindexSection,
  ReindexTitle,
  ReindexLoader,
  ReindexPWTitle,
  ReindexPWArea,
  ReindexPWInput,
  ReindexPWGradientCapLeft,
  ReindexPWGradientCapRight,
  ReindexPWRedText,
  ReindexNote1,
  ReindexNote2,
  ReindexFirstKnownButton,
  ReindexFullButton,
  ReindexButton,
  ReindexBackButton,
} from '../components/reindex'; // Adjust the import path if needed
import { ThemeProvider } from 'styled-components';

// Mock theme for testing
const mockTheme = {
  width: 400,
  height: 800,
};

describe('Reindex Component', () => {
  it('renders ReindexDiv with visibility', () => {
    const { container } = render(
      <ThemeProvider theme={mockTheme}>
        <ReindexDiv visible="block" />
      </ThemeProvider>
    );
    const reindexDiv = container.firstChild;

    expect(reindexDiv).toHaveStyle('display: block');
  });

  it('renders ReindexSectionOverscroll with correct dimensions', () => {
    const { container } = render(
      <ThemeProvider theme={mockTheme}>
        <ReindexSectionOverscroll />
      </ThemeProvider>
    );
    const sectionOverscroll = container.firstChild;

    expect(sectionOverscroll).toHaveStyle(`top: ${mockTheme.height * 0.0125}px`);
    expect(sectionOverscroll).toHaveStyle(`height: ${mockTheme.height * 0.975}px`);
    expect(sectionOverscroll).toHaveStyle(`width: ${mockTheme.width}px`);
  });

  it('renders ReindexTitle with correct styles', () => {
    const { container } = render(
      <ThemeProvider theme={mockTheme}>
        <ReindexTitle />
      </ThemeProvider>
    );
    const title = container.firstChild;

    expect(title).toHaveStyle(`top: ${mockTheme.height * 0.05}px`);
    expect(title).toHaveStyle(`font-size: ${(mockTheme.width * (1.5 / 21)).toFixed(2)}px`);
    expect(title).toHaveStyle('color: #bb9645');
  });

  it('renders ReindexLoader with correct alignment', () => {
    const { container } = render(
      <ThemeProvider theme={mockTheme}>
        <ReindexLoader />
      </ThemeProvider>
    );
    const loader = container.firstChild;

    expect(loader).toHaveStyle(`left: ${mockTheme.width * 0.5}px`);
    expect(loader).toHaveStyle('text-align: center');
  });

  it('renders ReindexPWArea with correct dimensions and styles', () => {
    const { container } = render(
      <ThemeProvider theme={mockTheme}>
        <ReindexPWArea />
      </ThemeProvider>
    );
    const pwArea = container.firstChild;

    expect(pwArea).toHaveStyle(`width: ${mockTheme.width * 0.9}px`);
    expect(pwArea).toHaveStyle('background-color: rgba(187,150,69,0.1)');
  });

  it('renders ReindexPWInput with correct dimensions and styles', () => {
    const { container } = render(
      <ThemeProvider theme={mockTheme}>
        <ReindexPWInput />
      </ThemeProvider>
    );
    const pwInput = container.firstChild;

    expect(pwInput).toHaveStyle(`width: ${mockTheme.width * 0.9}px`);
    expect(pwInput).toHaveStyle('border-style: dashed');
  });

  it('renders ReindexPWGradientCapLeft with correct gradient', () => {
    const { container } = render(
      <ThemeProvider theme={mockTheme}>
        <ReindexPWGradientCapLeft />
      </ThemeProvider>
    );
    const gradientCap = container.firstChild;

    expect(gradientCap).toHaveStyle('background-image: linear-gradient(90deg, rgba(0,0,0,1), rgba(0,0,0,0))');
  });

  it('renders ReindexPWRedText with correct color and position', () => {
    const { container } = render(
      <ThemeProvider theme={mockTheme}>
        <ReindexPWRedText />
      </ThemeProvider>
    );
    const redText = container.firstChild;

    expect(redText).toHaveStyle('color: rgba(229,66,18,1)');
    expect(redText).toHaveStyle('text-align: center');
  });

  it('renders ReindexFirstKnownButton with correct dimensions and position', () => {
    const { container } = render(
      <ThemeProvider theme={mockTheme}>
        <ReindexFirstKnownButton />
      </ThemeProvider>
    );
    const firstButton = container.firstChild;

    expect(firstButton).toHaveStyle(`width: ${mockTheme.height * 0.055}px`);
    expect(firstButton).toHaveStyle('background-color: rbga(0,0,0,0)');
  });

  it('renders ReindexBackButton with correct styles', () => {
    const { container } = render(
      <ThemeProvider theme={mockTheme}>
        <ReindexBackButton />
      </ThemeProvider>
    );
    const backButton = container.firstChild;

    expect(backButton).toHaveStyle(`width: ${mockTheme.width * 0.325}px`);
    expect(backButton).toHaveStyle('background-color: rgba(187,150,69,1)');
  });
});
