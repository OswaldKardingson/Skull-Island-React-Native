import React from 'react';
import { render } from '@testing-library/react-native';
import Splash from '@components/Splash';

const theme = { width: 360, height: 640 };

describe('Splash Component', () => {
  it('renders the splash container', () => {
    const { getByTestId } = render(<Splash theme={theme} />);
    expect(getByTestId('splash-container')).toBeTruthy();
  });

  it('renders the header gradient', () => {
    const { getByTestId } = render(<Splash theme={theme} />);
    expect(getByTestId('splash-container-header-fade')).toBeTruthy();
  });

  it('renders the transition gradient', () => {
    const { getByTestId } = render(<Splash theme={theme} />);
    expect(getByTestId('splash-container-transition-fade')).toBeTruthy();
  });

  it('renders the skull image when provided', () => {
    const { getByTestId } = render(<Splash theme={theme} />);
    expect(getByTestId('splash-container-skull-img')).toBeTruthy();
  });

  it('renders the pirate image when provided', () => {
    const { getByTestId } = render(<Splash theme={theme} />);
    expect(getByTestId('splash-container-pirate-img')).toBeTruthy();
  });

  it('renders the loader text', () => {
    const loaderText = 'Custom Loading...';
    const { getByTestId } = render(<Splash theme={theme} loaderText={loaderText} />);
    expect(getByTestId('splash-container-loader').props.children).toBe(loaderText);
  });

  it('renders the mobile image when provided', () => {
    const { getByTestId } = render(<Splash theme={theme} />);
    expect(getByTestId('splash-container-mobile-img')).toBeTruthy();
  });

  it('renders the footer image when provided', () => {
    const { getByTestId } = render(<Splash theme={theme} />);
    expect(getByTestId('splash-container-footer-img')).toBeTruthy();
  });

  it('renders the footer', () => {
    const { getByTestId } = render(<Splash theme={theme} />);
    expect(getByTestId('splash-container-footer')).toBeTruthy();
  });

  it('renders the copyright text', () => {
    const copyrightText = '© 2025 Pirate Chain';
    const { getByTestId } = render(<Splash theme={theme} copyrightText={copyrightText} />);
    expect(getByTestId('splash-container-copyright').props.children).toBe(copyrightText);
  });
});
