import React from 'react';
import { render } from '@testing-library/react-native';
import HomePage from '@pages/HomePage';

describe('HomePage Component', () => {
  it('renders the HomePage correctly', () => {
    const { getByTestId } = render(<HomePage />);
    const homePage = getByTestId('home-page');
    const homePageText = getByTestId('home-page-text');

    expect(homePage).toBeTruthy();
    expect(homePageText).toBeTruthy();
    expect(homePageText.props.children).toBe('Welcome to the Home Page');
  });
});
