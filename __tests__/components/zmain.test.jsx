import React from 'react';
import { render } from '@testing-library/react-native';
import ZMain from '../../src/components/zmain';

describe('ZMain Component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<ZMain />);
    expect(getByText('ZMain')).toBeTruthy();
  });
});
