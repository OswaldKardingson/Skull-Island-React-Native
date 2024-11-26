import { render } from '@testing-library/react-native';
import ChainSync from '../../src/components/chainsync';

describe('ChainSync Component', () => {
    it('renders correctly', () => {
        const { getByTestId } = render(<ChainSync />);
        expect(getByTestId('chain-sync')).toBeTruthy();
    });
});