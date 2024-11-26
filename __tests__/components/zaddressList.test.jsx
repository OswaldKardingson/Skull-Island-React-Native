import React from 'react';
import { render } from '@testing-library/react-native';
import { ZAddressList } from '../../src/components/zaddressList';

describe('ZAddressList Component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<ZAddressList />);
    expect(getByTestId('z-address-list')).toBeTruthy();
  });
});
