import React from 'react';
import { render } from '@testing-library/react-native';
import { Passphrase } from '../../src/components/passphrase';

describe('Passphrase Component', () => {
    it('renders the passphrase correctly', () => {
        const { getByText } = render(<Passphrase passphrase="Test Passphrase" />);
        expect(getByText('Test Passphrase')).toBeTruthy();
    });
});