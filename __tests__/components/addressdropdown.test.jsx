import { render } from '@testing-library/react-native';
import AddressDropdown from '../../src/components/addressdropdown';

describe('AddressDropdown Component', () => {
    it('renders correctly', () => {
        const { getByTestId } = render(<AddressDropdown />);
        expect(getByTestId('address-dropdown')).toBeTruthy();
    });
});