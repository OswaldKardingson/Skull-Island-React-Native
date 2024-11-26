
import React from 'react';
import { render } from '@testing-library/react-native';
import { Splash } from '../../src/components/splash';

describe('Splash Component', () => {
    it('renders correctly', () => {
        const { getByTestId } = render(<Splash />);
        expect(getByTestId('splash-component')).toBeTruthy();
    });
});
