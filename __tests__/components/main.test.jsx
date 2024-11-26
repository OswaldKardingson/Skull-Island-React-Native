import React from 'react';
import { render } from '@testing-library/react-native';
import { Main } from '../../src/components/main';

describe('Main Component', () => {
    it('renders without crashing', () => {
        const { getByTestId } = render(<Main />);
        expect(getByTestId('main')).toBeTruthy();
    });
});