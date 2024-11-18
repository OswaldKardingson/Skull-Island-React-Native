
import React from 'react';
import { render } from '@testing-library/react-native';
import PrivateKey from './privatekey';

describe('PrivateKey Component', () => {
    it('renders correctly with visibility set to true', () => {
        const theme = { height: 800, width: 400 };
        const { getByTestId } = render(<PrivateKey visible={true} theme={theme} />);
        expect(getByTestId('container')).toBeTruthy();
    });
});
