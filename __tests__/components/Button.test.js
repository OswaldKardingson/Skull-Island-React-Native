import { render } from '@testing-library/react-native';
import { Button } from '../../src/components/Button';

describe('Button Component', () => {
    it('renders correctly', () => {
        const { getByText } = render(<Button label='Click Me' />);
        expect(getByText('Click Me')).toBeTruthy();
    });
});