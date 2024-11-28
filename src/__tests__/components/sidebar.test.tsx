import React from 'react';
import { render } from '@testing-library/react-native';
import Sidebar from '@components/Sidebar';

describe('Sidebar Component', () => {
  it('renders the default title', () => {
    const { getByTestId } = render(<Sidebar />);
    expect(getByTestId('sidebar-container')).toBeTruthy();
    expect(getByTestId('sidebar-container-title').props.children).toBe('Sidebar Navigation');
  });

  it('renders a custom title', () => {
    const { getByTestId } = render(<Sidebar title="Custom Sidebar" />);
    expect(getByTestId('sidebar-container-title').props.children).toBe('Custom Sidebar');
  });

  it('applies custom styles', () => {
    const { getByTestId } = render(
      <Sidebar
        containerStyle={{ backgroundColor: 'red' }}
        textStyle={{ color: 'black' }}
      />
    );
    expect(getByTestId('sidebar-container').props.style.backgroundColor).toBe('red');
    expect(getByTestId('sidebar-container-title').props.style.color).toBe('black');
  });
});
