import React from 'react';
import { render } from '@testing-library/react-native';
import Sidebar from '../Sidebar'; // Adjust the import path as necessary

describe('Sidebar Component', () => {
  it('renders the Sidebar with correct text', () => {
    const { getByText } = render(<Sidebar />);
    const sidebarText = getByText('Sidebar Navigation');

    expect(sidebarText).toBeTruthy();
    expect(sidebarText.props.children).toBe('Sidebar Navigation');
  });

  it('applies correct styles to the container', () => {
    const { getByTestId } = render(<Sidebar />);
    const container = getByTestId('container'); // Add `testID="container"` to the View in Sidebar.js for testing

    expect(container.props.style).toMatchObject({
      flex: 1,
      backgroundColor: '#1e90ff',
      justifyContent: 'center',
      alignItems: 'center',
    });
  });

  it('applies correct styles to the text', () => {
    const { getByText } = render(<Sidebar />);
    const sidebarText = getByText('Sidebar Navigation');

    expect(sidebarText.props.style).toMatchObject({
      color: '#fff',
      fontSize: 18,
      fontWeight: '600',
    });
  });
});
