import React from 'react';
import { render } from '@testing-library/react-native';
import { Header } from '../../src/components/Header';

describe('Header Component', () => {
    it('renders correctly with a title', () => {
        const { getByText } = render(<Header title="Test Title" />);
        expect(getByText('Test Title')).toBeTruthy();
    });
});