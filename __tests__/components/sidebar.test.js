
import React from 'react';
import { render } from '@testing-library/react-native';
import { Sidebar } from '../../src/components/Sidebar';

describe('Sidebar Component', () => {
    it('renders correctly', () => {
        const { getByTestId } = render(<Sidebar />);
        expect(getByTestId('sidebar-component')).toBeTruthy();
    });
});
