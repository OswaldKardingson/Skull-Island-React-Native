import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import AppNavigator from '@navigation/AppNavigator';

describe('AppNavigator', () => {
  it('should render HomeScreen by default', () => {
    const { getByTestId } = render(<AppNavigator />);
    const homeScreenText = getByTestId('home-screen-text');
    expect(homeScreenText).toBeTruthy();
  });

  it('should navigate to DetailScreen when button is pressed', async () => {
    const { getByTestId, findByTestId } = render(<AppNavigator />);

    // Find and click the button on HomeScreen
    const navigateButton = getByTestId('navigate-to-detail');
    fireEvent.press(navigateButton);

    // Verify DetailScreen is rendered
    const detailScreenText = await findByTestId('detail-screen-text');
    expect(detailScreenText.props.children).toBe('Detail Screen for ID: 42');
  });
});
