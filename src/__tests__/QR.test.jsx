
import React from 'react';
import { render } from '@testing-library/react-native';
import QR from './qr';

describe('QR Component', () => {
    it('renders correctly with visibility props', () => {
        const qrScanning = { opacity: 1, display: 'flex' };
        const theme = { topBuffer: 20, height: 800, width: 400 };
        const { getByTestId } = render(<QR qrScanning={qrScanning} theme={theme} />);
        expect(getByTestId('container')).toBeTruthy();
    });
});
