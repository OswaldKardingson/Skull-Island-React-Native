import React from 'react';
import { render } from '@testing-library/react-native';
import NavBar from '@pagecomponents/NavBar';

describe('NavBar Component', () => {
  it('renders with default props', () => {
    const { getByTestId } = render(<NavBar />);
    const navbar = getByTestId('navbar');
    const title = getByTestId('navbar-title');

    expect(navbar.props.style).toEqual(
      expect.arrayContaining([{ backgroundColor: 'gray' }])
    );
    expect(title.props.children).toBe('NavBar');
    expect(title.props.style).toEqual(expect.arrayContaining([{ color: 'white' }]));
  });

  it('renders with custom props', () => {
    const { getByTestId } = render(
      <NavBar title="Custom Title" backgroundColor="blue" textColor="yellow" testID="custom-navbar" />
    );
    const navbar = getByTestId('custom-navbar');
    const title = getByTestId('custom-navbar-title');

    expect(navbar.props.style).toEqual(
      expect.arrayContaining([{ backgroundColor: 'blue' }])
    );
    expect(title.props.children).toBe('Custom Title');
    expect(title.props.style).toEqual(expect.arrayContaining([{ color: 'yellow' }]));
  });
});
