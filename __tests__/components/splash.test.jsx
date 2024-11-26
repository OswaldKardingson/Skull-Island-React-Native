import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Splash from './Splash';

const mockTheme = {
  width: 360,
  height: 640,
};

describe('Splash Component', () => {
  it('renders all elements correctly', () => {
    render(<Splash theme={mockTheme} />);

    // Check for the presence of images
    expect(screen.getByAltText('Skull Logo')).toBeInTheDocument();
    expect(screen.getByAltText('Pirate Banner')).toBeInTheDocument();
    expect(screen.getByAltText('Mobile Info')).toBeInTheDocument();
    expect(screen.getByAltText('Footer Banner')).toBeInTheDocument();

    // Check for text content
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    expect(
      screen.getByText('© 2024 Pirate Theme. All rights reserved.')
    ).toBeInTheDocument();
  });

  it('applies correct dimensions to SplashSection', () => {
    render(<Splash theme={mockTheme} />);
    const splashSection = screen.getByTestId('splash-section');

    expect(splashSection).toHaveStyle({
      width: '360px',
      height: '640px',
    });
  });

  it('renders the SplashFooter with correct background color', () => {
    render(<Splash theme={mockTheme} />);
    const splashFooter = screen.getByTestId('splash-footer');

    expect(splashFooter).toHaveStyle('background-color: rgba(187,150,69,1)');
  });
});
