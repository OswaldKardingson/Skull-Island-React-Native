import React from 'react';
import { render } from '@testing-library/react-native';
import {
  MainGrid,
  UpperButtonSection,
  UpperSection,
  LowerButtonSection,
  Menu,
  MenuButton,
} from '@components/main';

describe('Main Components', () => {
  const mockTheme = {
    height: 640,
    width: 360,
    visible: 'flex',
    size: 3,
    hPositionMod: 0.2,
    pos: 1,
  };

  it('renders MainGrid correctly', () => {
    const { getByTestId } = render(<MainGrid testID="main-grid" {...mockTheme} />);
    const grid = getByTestId('main-grid');
    expect(grid).toBeTruthy();
  });

  it('renders UpperButtonSection correctly', () => {
    const { getByTestId } = render(
      <UpperButtonSection testID="upper-button-section" {...mockTheme} />
    );
    const section = getByTestId('upper-button-section');
    expect(section).toBeTruthy();
  });

  it('renders UpperSection correctly', () => {
    const { getByTestId } = render(<UpperSection testID="upper-section" {...mockTheme} />);
    const section = getByTestId('upper-section');
    expect(section).toBeTruthy();
  });

  it('renders LowerButtonSection correctly', () => {
    const { getByTestId } = render(
      <LowerButtonSection testID="lower-button-section" {...mockTheme} />
    );
    const section = getByTestId('lower-button-section');
    expect(section).toBeTruthy();
  });

  it('renders Menu correctly', () => {
    const { getByTestId } = render(<Menu testID="menu" {...mockTheme} />);
    const menu = getByTestId('menu');
    expect(menu).toBeTruthy();
  });

  it('renders MenuButton correctly', () => {
    const { getByTestId } = render(<MenuButton testID="menu-button" {...mockTheme} />);
    const button = getByTestId('menu-button');
    expect(button).toBeTruthy();
  });
});
