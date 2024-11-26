import React from 'react';
import { render } from '@testing-library/react';
import {
  SendDiv,
  SendSectionOverscroll,
  SendSection,
  SendTitle,
  SelectAddressTitle,
  SelectAddressDashedArea,
  SendDashedInput,
  SendGradientCapLeft,
  SendGradientCapRight,
  SendButton,
  MaxButton,
  SendBackButton,
  SendMemoInput,
  SendMemoArea,
  SendSummary,
  SendSummarySent,
  SendSummaryAmountArea,
  SendSummaryToAddress,
} from '../components/send'; // Adjust the import path if needed
import { ThemeProvider } from 'styled-components';

// Mock theme for testing
const mockTheme = {
  width: 400,
  height: 800,
};

describe('Send Component', () => {
  it('renders SendDiv with visibility', () => {
    const { container } = render(
      <ThemeProvider theme={mockTheme}>
        <SendDiv visible="block" />
      </ThemeProvider>
    );
    const sendDiv = container.firstChild;

    expect(sendDiv).toHaveStyle('display: block');
  });

  it('renders SendSectionOverscroll with correct dimensions', () => {
    const { container } = render(
      <ThemeProvider theme={mockTheme}>
        <SendSectionOverscroll />
      </ThemeProvider>
    );
    const overscroll = container.firstChild;

    expect(overscroll).toHaveStyle(`top: ${mockTheme.height * 0.0125}px`);
    expect(overscroll).toHaveStyle(`height: ${mockTheme.height * 0.975}px`);
    expect(overscroll).toHaveStyle(`width: ${mockTheme.width}px`);
  });

  it('renders SendTitle with correct styles', () => {
    const { container } = render(
      <ThemeProvider theme={mockTheme}>
        <SendTitle />
      </ThemeProvider>
    );
    const title = container.firstChild;

    expect(title).toHaveStyle(`top: ${mockTheme.height * 0.05}px`);
    expect(title).toHaveStyle(`color: #bb9645`);
  });

  it('renders SelectAddressDashedArea with correct dimensions', () => {
    const { container } = render(
      <ThemeProvider theme={mockTheme}>
        <SelectAddressDashedArea />
      </ThemeProvider>
    );
    const dashedArea = container.firstChild;

    expect(dashedArea).toHaveStyle(`background-color: rgba(187,150,69,0.1)`);
  });

  it('renders SendDashedInput with correct styles', () => {
    const { container } = render(
      <ThemeProvider theme={mockTheme}>
        <SendDashedInput />
      </ThemeProvider>
    );
    const input = container.firstChild;

    expect(input).toHaveStyle(`border-style: dashed`);
    expect(input).toHaveStyle(`color: #ffffff`);
  });

  it('renders SendGradientCapLeft with correct gradient', () => {
    const { container } = render(
      <ThemeProvider theme={mockTheme}>
        <SendGradientCapLeft />
      </ThemeProvider>
    );
    const gradientLeft = container.firstChild;

    expect(gradientLeft).toHaveStyle('background-image: linear-gradient(90deg, rgba(0,0,0,0), rgba(0,0,0,0))');
  });

  it('renders SendButton with correct background when enabled', () => {
    const { container } = render(
      <ThemeProvider theme={mockTheme}>
        <SendButton disabled={false} />
      </ThemeProvider>
    );
    const button = container.firstChild;

    expect(button).toHaveStyle(`background-color: #bb9645`);
  });

  it('renders MaxButton with correct dimensions', () => {
    const { container } = render(
      <ThemeProvider theme={mockTheme}>
        <MaxButton />
      </ThemeProvider>
    );
    const button = container.firstChild;

    expect(button).toHaveStyle(`background-color: grey`);
  });

  it('renders SendBackButton with correct position', () => {
    const { container } = render(
      <ThemeProvider theme={mockTheme}>
        <SendBackButton />
      </ThemeProvider>
    );
    const button = container.firstChild;

    expect(button).toHaveStyle(`background-color: rgba(48,49,51,1)`);
  });

  it('renders SendMemoArea with dynamic height', () => {
    const { container } = render(
      <ThemeProvider theme={mockTheme}>
        <SendMemoArea mlength={50} />
      </ThemeProvider>
    );
    const memoArea = container.firstChild;

    expect(memoArea).toHaveStyle('background-color: rgba(187,150,69,0.1)');
  });

  it('renders SendSummary with flex layout', () => {
    const { container } = render(
      <ThemeProvider theme={mockTheme}>
        <SendSummary />
      </ThemeProvider>
    );
    const summary = container.firstChild;

    expect(summary).toHaveStyle('display: flex');
    expect(summary).toHaveStyle('flex-direction: column');
  });

  it('renders SendSummaryToAddress with word wrap', () => {
    const { container } = render(
      <ThemeProvider theme={mockTheme}>
        <SendSummaryToAddress />
      </ThemeProvider>
    );
    const summaryAddress = container.firstChild;

    expect(summaryAddress).toHaveStyle('word-wrap: break-word');
  });
});
