import React from 'react';
import { render } from '@testing-library/react-native';
import LowerBar from '../../src/components/lowerbar';

describe('LowerBar Component', () => {
    it('renders correctly', () => {
        const { getByTestId } = render(<LowerBar />);
        expect(getByTestId('lowerbar')).toBeTruthy();
    });
});