import React from 'react';
import { render } from '@testing-library/react-native';
import PrivateKey from '../../src/components/privatekey';

describe('PrivateKey Component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<PrivateKey />);
    expect(getByText('PrivateKey Component')).toBeTruthy();
  });
});
