
import React from 'react';
import { render } from '@testing-library/react-native';
import ExampleComponent from '../components/ExampleComponent';

describe('ExampleComponent', () => {
    it('renders the correct text', () => {
        const { getByText } = render(<ExampleComponent text="Test Text" />);
        expect(getByText('Test Text')).toBeTruthy();
    });
});
