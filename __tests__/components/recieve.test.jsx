
import React from 'react';
import { render } from '@testing-library/react-native';
import Receive from '../../src/components/receive';

describe('Receive Component', () => {
    it('renders correctly', () => {
        const { getByTestId } = render(<Receive />);
        expect(getByTestId('receive-component')).toBeTruthy();
    });
});
