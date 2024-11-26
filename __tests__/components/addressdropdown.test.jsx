import React from 'react';
import { render } from '@testing-library/react';
import {
  AddressDiv,
  AddressDropdownButton,
  AddressDropdownContent,
  AddressTitle,
  AddressSectionOverscroll,
  AddressListUl,
  AddressListLi,
  ZAddressButton,
  Col2Top,
  Col2Bottom,
  Col4Top,
  Col4Bottom,
  Spacer,
} from '../../components/addressdropdown'; // Adjust the path as needed

// Mock theme object for testing
const theme = {
  width: 800,
  height: 600,
  topBuffer: 50,
};

// Mock props for dynamic components
const visible = 'block';
const header = true;

describe('AddressDropdown Styled Components', () => {
  it('renders AddressDiv with correct styles', () => {
    const { getByTestId } = render(<AddressDiv data-testid="address-div" />);
    const element = getByTestId('address-div');
    expect(element).toHaveStyle('position: absolute');
    expect(element).toHaveStyle('top: 0');
  });

  it('renders AddressDropdownButton with dynamic styles', () => {
    const { getByTestId } = render(
      <AddressDropdownButton data-testid="dropdown-button" theme={theme} />
    );
    const element = getByTestId('dropdown-button');
    expect(element).toHaveStyle(`width: ${theme.width * 0.9}px`);
    expect(element).toHaveStyle(`height: ${theme.width * (1.5 / 18)}px`);
  });

  it('renders AddressDropdownContent with visibility', () => {
    const { getByTestId } = render(
      <AddressDropdownContent data-testid="dropdown-content" theme={theme} visible={visible} />
    );
    const element = getByTestId('dropdown-content');
    expect(element).toHaveStyle(`display: ${visible}`);
    expect(element).toHaveStyle(`top: ${theme.topBuffer}px`);
  });

  it('renders AddressTitle with correct styles', () => {
    const { getByTestId } = render(<AddressTitle data-testid="address-title" theme={theme} />);
    const element = getByTestId('address-title');
    expect(element).toHaveStyle(`color: #bb9645`);
    expect(element).toHaveStyle(`font-family: 'Bai Jamjuree', sans-serif`);
  });

  it('renders AddressSectionOverscroll with dynamic styles', () => {
    const { getByTestId } = render(
      <AddressSectionOverscroll data-testid="address-overscroll" theme={theme} />
    );
    const element = getByTestId('address-overscroll');
    expect(element).toHaveStyle(`overflow: scroll`);
    expect(element).toHaveStyle(`overscroll-behavior: contain`);
  });

  it('renders AddressListUl with conditional styling', () => {
    const { getByTestId } = render(
      <AddressListUl data-testid="address-list-ul" theme={theme} header={header} />
    );
    const element = getByTestId('address-list-ul');
    expect(element).toHaveStyle('color: #ffd700');
    expect(element).toHaveStyle('font-weight: bold');
  });

  it('renders AddressListLi with grid styling', () => {
    const { getByTestId } = render(
      <AddressListLi data-testid="address-list-li" theme={theme} />
    );
    const element = getByTestId('address-list-li');
    expect(element).toHaveStyle('display: grid');
    expect(element).toHaveStyle('background-color: #111111');
  });

  it('renders ZAddressButton with focus style', () => {
    const { getByTestId } = render(
      <ZAddressButton data-testid="zaddress-button" theme={theme} />
    );
    const element = getByTestId('zaddress-button');
    expect(element).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
  });

  it('renders Col2Top with correct styles', () => {
    const { getByTestId } = render(<Col2Top data-testid="col2-top" theme={theme} />);
    const element = getByTestId('col2-top');
    expect(element).toHaveStyle('color: #907435');
  });

  it('renders Col2Bottom with correct styles', () => {
    const { getByTestId } = render(<Col2Bottom data-testid="col2-bottom" theme={theme} />);
    const element = getByTestId('col2-bottom');
    expect(element).toHaveStyle('color: grey');
  });

  it('renders Col4Top with correct styles', () => {
    const { getByTestId } = render(<Col4Top data-testid="col4-top" theme={theme} />);
    const element = getByTestId('col4-top');
    expect(element).toHaveStyle('color: #907435');
  });

  it('renders Col4Bottom with correct styles', () => {
    const { getByTestId } = render(<Col4Bottom data-testid="col4-bottom" theme={theme} />);
    const element = getByTestId('col4-bottom');
    expect(element).toHaveStyle('color: grey');
  });

  it('renders Spacer with minimum height', () => {
    const { getByTestId } = render(<Spacer data-testid="spacer" theme={theme} />);
    const element = getByTestId('spacer');
    expect(element).toHaveStyle(`min-height: ${theme.height * 0.005}px`);
  });
});
