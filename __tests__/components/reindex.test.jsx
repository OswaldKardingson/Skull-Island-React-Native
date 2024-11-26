
import React from 'react';
import { render } from '@testing-library/react-native';
import { Reindex } from '../../src/components/reindex';

describe('Reindex Component', () => {
    it('renders correctly', () => {
        const { getByTestId } = render(<Reindex />);
        expect(getByTestId('reindex-component')).toBeTruthy();
    });
});
