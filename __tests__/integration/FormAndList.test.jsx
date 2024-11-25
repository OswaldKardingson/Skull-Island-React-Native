// __tests__/integration/FormAndList.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import App from '../../src/App'; // Main app containing Form and List components

describe('Form and List Integration', () => {
  it('adds a new item to the list upon form submission', () => {
    const { getByPlaceholderText, getByText, getByTestId } = render(<App />);
    const input = getByPlaceholderText('Enter text');
    const button = getByText('Submit');
    const list = getByTestId('item-list');

    fireEvent.changeText(input, 'New Item');
    fireEvent.press(button);

    expect(list).toHaveTextContent('New Item');
  });
});
