import React from 'react';
import { render } from '@testing-library/react-native';
import Header from '@components/Header';

describe('Header Component', () => {
  it('renders with default props', () => {
    const { getByTestId } = render(<Header />);
    const container = getByTestId('header-container');
    const title = getByTestId('header-title');

    expect(container).toBeTruthy();
    expect(title).toBeTruthy();
    expect(title.props.children).toBe('Header Component'); // Default title
    expect(container.props.style).toContainEqual({ backgroundColor: '#0000FF' }); // Default background
    expect(title.props.style).toContainEqual({ color: '#FFFFFF' }); // Default text color
  });

  it('renders with custom props', () => {
    const { getByTestId } = render(
      <Header title="Custom Header" backgroundColor="#FF0000" textColor="#000000" />
    );
    const container = getByTestId('header-container');
    const title = getByTestId('header-title');

    expect(container.props.style).toContainEqual({ backgroundColor: '#FF0000' });
    expect(title.props.style).toContainEqual({ color: '#000000' });
    expect(title.props.children).toBe('Custom Header');
  });

  it('renders with an empty title', () => {
    const { getByTestId } = render(<Header title="" />);
    const title = getByTestId('header-title');

    expect(title.props.children).toBe(''); // Title is empty string
  });
});
