import React from 'react';
import { render } from '@testing-library/react';
import {
  MainGrid,
  UpperButtonSection,
  UpperSection,
  UpperSectionOpaque,
  LowerButtonSection,
  LowerSection,
  LowerSectionOpaque,
  Menu,
  MenuTitle,
  MenuContent,
  MenuButton,
  MenuButtonLine,
} from '../../components/main'; // Adjust the path if needed
import { ThemeProvider } from 'styled-components';

// Mock theme
const mockTheme = {
  width: 400,
  height: 800,
  topBuffer: 50,
};

describe('Main Component', () => {
  it('renders MainGrid with correct styles and visibility', () => {
    const { container } = render(
      <ThemeProvider theme={mockTheme}>
        <MainGrid visible="block" />
      </ThemeProvider>
    );
    const mainGrid = container.firstChild;

    expect(mainGrid).toHaveStyle(`display: block`);
    expect(mainGrid).toHaveStyle(`height: ${mockTheme.height}px`);
    expect(mainGrid).toHaveStyle(`width: ${mockTheme.width}px`);
  });

  it('renders UpperButtonSection with correct dimensions', () => {
    const { container } = render(
      <ThemeProvider theme={mockTheme}>
        <UpperButtonSection />
      </ThemeProvider>
    );
    const upperButtonSection = container.firstChild;

    expect(upperButtonSection).toHaveStyle(`height: ${mockTheme.height * 0.05}px`);
    expect(upperButtonSection).toHaveStyle(`width: ${mockTheme.width}px`);
  });

  it('renders UpperSection with correct background color and opacity', () => {
    const { container } = render(
      <ThemeProvider theme={mockTheme}>
        <UpperSection />
      </ThemeProvider>
    );
    const upperSection = container.firstChild;

    expect(upperSection).toHaveStyle('background-color: #000000');
    expect(upperSection).toHaveStyle('opacity: 0.8');
  });

  it('renders LowerButtonSection with correct position and dimensions', () => {
    const { container } = render(
      <ThemeProvider theme={mockTheme}>
        <LowerButtonSection />
      </ThemeProvider>
    );
    const lowerButtonSection = container.firstChild;

    expect(lowerButtonSection).toHaveStyle(`height: ${mockTheme.height * 0.05}px`);
    expect(lowerButtonSection).toHaveStyle(`width: ${mockTheme.width}px`);
    expect(lowerButtonSection).toHaveStyle('background-color: #000000');
  });

  it('renders Menu with correct visibility and dimensions', () => {
    const { container } = render(
      <ThemeProvider theme={mockTheme}>
        <Menu visible="block" />
      </ThemeProvider>
    );
    const menu = container.firstChild;

    expect(menu).toHaveStyle('display: block');
    expect(menu).toHaveStyle(`height: ${mockTheme.height * 0.05}px`);
    expect(menu).toHaveStyle(`width: ${mockTheme.width}px`);
  });

  it('renders MenuTitle with correct font size and position', () => {
    const { container } = render(
      <ThemeProvider theme={mockTheme}>
        <MenuTitle />
      </ThemeProvider>
    );
    const menuTitle = container.firstChild;

    expect(menuTitle).toHaveStyle(`font-size: ${mockTheme.height * 0.025}px`);
    expect(menuTitle).toHaveStyle(`left: ${mockTheme.width * 0.2}px`);
    expect(menuTitle).toHaveStyle(`width: ${mockTheme.width * 0.6}px`);
  });

  it('renders MenuButton with correct styles', () => {
    const { container } = render(
      <ThemeProvider theme={mockTheme}>
        <MenuButton />
      </ThemeProvider>
    );
    const menuButton = container.firstChild;

    expect(menuButton).toHaveStyle(`width: ${mockTheme.width * 0.15}px`);
    expect(menuButton).toHaveStyle(`height: ${mockTheme.height * 0.05}px`);
  });

  it('renders MenuContent with correct height based on size prop', () => {
    const { container } = render(
      <ThemeProvider theme={mockTheme}>
        <MenuContent visible="block" size={4} />
      </ThemeProvider>
    );
    const menuContent = container.firstChild;

    expect(menuContent).toHaveStyle(`height: ${mockTheme.height * 0.05 * 4}px`);
    expect(menuContent).toHaveStyle('display: block');
  });

  it('renders MenuButtonLine with correct position and styles', () => {
    const { container } = render(
      <ThemeProvider theme={mockTheme}>
        <MenuButtonLine pos={2} />
      </ThemeProvider>
    );
    const menuButtonLine = container.firstChild;

    expect(menuButtonLine).toHaveStyle(`top: ${mockTheme.height * 0.05 * 2}px`);
    expect(menuButtonLine).toHaveStyle(`width: ${mockTheme.width * 0.45}px`);
  });
});
