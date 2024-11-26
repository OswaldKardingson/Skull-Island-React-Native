
import React from 'react';
import { render } from '@testing-library/react-native';
import Send from '../../src/components/send';

describe('Send Component', () => {
    it('renders correctly', () => {
        const { getByTestId } = render(<Send />);
        expect(getByTestId('send-component')).toBeTruthy();
    });
});
