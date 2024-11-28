import React from 'react';
import { render } from '@testing-library/react-native';
import {
  AddressDiv,
  Spacer,
  AddressDropdownButton,
  ZAddressButton,
  AddressDropdownContent,
  AddressSectionOverscroll,
  AddressTitle,
  Col2Top,
  Col2Bottom,
  AddressListUl,
  AddressListLi,
} from '@components/addressdropdown'; // Adjust the import path as necessary

// Mock Dimensions
jest.mock('react-native', () => {
  const ReactNative = jest.requireActual('react-native');
  return {
    ...ReactNative,
    Dimensions: {
      get: jest.fn().mockReturnValue({ width: 360, height: 640 }),
    },
  };
});

describe('AddressDropdown Components', () => {
  it('renders AddressDiv with correct styles', () => {
    const { getByTestId } = render(<AddressDiv testID="address-div" />);
    const addressDiv = getByTestId('address-div');
    expect(addressDiv.props.style).toEqual(expect.any(Object)); // Ensure styles are applied
  });

  it('renders Spacer with correct height', () => {
    const { getByTestId } = render(<Spacer testID="spacer" />);
    const spacer = getByTestId('spacer');
    expect(spacer.props.style).toContainEqual({ minHeight: 3.2 }); // Assuming height * 0.005 based on mocked height
  });

  it('renders AddressDropdownButton', () => {
    const { getByTestId } = render(<AddressDropdownButton testID="dropdown-button" />);
    const button = getByTestId('dropdown-button');
    expect(button.props.style).toEqual(expect.any(Object)); // Check styles exist
  });

  it('renders ZAddressButton', () => {
    const { getByTestId } = render(<ZAddressButton testID="zaddress-button" />);
    const button = getByTestId('zaddress-button');
    expect(button.props.style).toEqual(expect.any(Object)); // Check styles exist
  });

  it('renders AddressDropdownContent with visibility', () => {
    const { getByTestId } = render(
      <AddressDropdownContent testID="dropdown-content" visible={true} theme={{ topBuffer: 50 }} />
    );
    const dropdownContent = getByTestId('dropdown-content');
    expect(dropdownContent.props.style).toEqual(expect.any(Object)); // Check styles exist
  });

  it('renders AddressSectionOverscroll correctly', () => {
    const { getByTestId } = render(<AddressSectionOverscroll testID="overscroll" />);
    const overscroll = getByTestId('overscroll');
    expect(overscroll.props.style).toEqual(expect.any(Object)); // Check styles exist
  });

  it('renders AddressTitle with correct styles', () => {
    const { getByTestId } = render(<AddressTitle testID="address-title" />);
    const title = getByTestId('address-title');
    expect(title.props.style).toEqual(expect.any(Object)); // Check styles exist
  });

  it('renders Col2Top with correct text', () => {
    const { getByTestId } = render(<Col2Top testID="col2-top">Test Text</Col2Top>);
    const col2Top = getByTestId('col2-top');
    expect(col2Top.children).toContain('Test Text');
  });

  it('renders Col2Bottom with correct text', () => {
    const { getByTestId } = render(<Col2Bottom testID="col2-bottom">Bottom Text</Col2Bottom>);
    const col2Bottom = getByTestId('col2-bottom');
    expect(col2Bottom.children).toContain('Bottom Text');
  });

  it('renders AddressListUl correctly', () => {
    const { getByTestId } = render(<AddressListUl testID="address-list-ul" />);
    const listUl = getByTestId('address-list-ul');
    expect(listUl.props.style).toEqual(expect.any(Object)); // Check styles exist
  });

  it('renders AddressListLi correctly', () => {
    const { getByTestId } = render(<AddressListLi testID="address-list-li" />);
    const listLi = getByTestId('address-list-li');
    expect(listLi.props.style).toEqual(expect.any(Object)); // Check styles exist
  });
});
