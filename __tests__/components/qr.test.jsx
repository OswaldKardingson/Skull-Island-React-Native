
import React from 'react';
import { render } from '@testing-library/react-native';
import { QR } from '../components/qr';

describe('QR Component', () => {
    it('renders correctly', () => {
        const { getByTestId } = render(<QR />);
        expect(getByTestId('qr-component')).toBeTruthy();
    });
});
