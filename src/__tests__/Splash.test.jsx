
import React from 'react';
import { render } from '@testing-library/react-native';
import ZMain from './zmain';

describe('ZMain Component', () => {
    it('renders correctly with visibility set to true', () => {
        const theme = { width: 400, height: 800 };
        const { getByTestId } = render(<ZMain visible={true} theme={theme} />);
        expect(getByTestId('container')).toBeTruthy();
    });
});
