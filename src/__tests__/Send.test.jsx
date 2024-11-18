
import React from 'react';
import { render } from '@testing-library/react-native';
import Send from './send';

describe('Send Component', () => {
    it('renders correctly with visibility set to true', () => {
        const theme = { height: 800, width: 400 };
        const { getByTestId } = render(<Send visible={true} theme={theme} />);
        expect(getByTestId('container')).toBeTruthy();
    });
});
