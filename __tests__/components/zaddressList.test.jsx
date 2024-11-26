import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {
  ZAddressListMain,
  ZAddressListOverScroll,
  AddressListUl,
  AddressListLi,
  Col1Div,
  Col2Div,
  Col2Top,
  Col2Bottom,
  Col3Div,
  Col4Div,
  Col4Top,
  Col4Bottom,
  Col5Div,
  ZAddressButton,
  Spacer,
} from './zaddressList'; // Adjust the import path to match your folder structure

const mockTheme = {
  width: 360,
  height: 640,
};

describe('ZAddressList Component Styled Tests', () => {
  it('renders ZAddressListMain with correct styles', () => {
    render(
      <ZAddressListMain theme={mockTheme} data-testid="zaddress-list-main" />
    );
    const mainSection = screen.getByTestId('zaddress-list-main');
    expect(mainSection).toBeInTheDocument();
    expect(mainSection).toHaveStyle({
      width: '360px',
      height: `${((mockTheme.height * 0.1625) - ((mockTheme.width * 0.7) / 15) * 1.5)}px`,
    });
  });

  it('renders ZAddressListOverScroll with correct styles', () => {
    render(
      <ZAddressListOverScroll theme={mockTheme} data-testid="zaddress-list-over-scroll" />
    );
    const overScroll = screen.getByTestId('zaddress-list-over-scroll');
    expect(overScroll).toBeInTheDocument();
    expect(overScroll).toHaveStyle({
      overflow: 'scroll',
      width: `${mockTheme.width * 0.90}px`,
      left: `${mockTheme.width * 0.05}px`,
    });
  });

  it('renders AddressListUl with header styles', () => {
    render(
      <AddressListUl theme={mockTheme} header={true} data-testid="address-list-ul-header" />
    );
    const ul = screen.getByTestId('address-list-ul-header');
    expect(ul).toBeInTheDocument();
    expect(ul).toHaveStyle({
      color: '#ffd700',
      fontWeight: 'bold',
    });
  });

  it('renders AddressListLi with grid styles', () => {
    render(
      <AddressListLi theme={mockTheme} data-testid="address-list-li" />
    );
    const li = screen.getByTestId('address-list-li');
    expect(li).toBeInTheDocument();
    expect(li).toHaveStyle({
      display: 'grid',
      backgroundColor: '#111111',
    });
  });

  it('renders Col2Top with correct styles', () => {
    render(
      <Col2Top theme={mockTheme} data-testid="col2-top">
        Address Details
      </Col2Top>
    );
    const col2Top = screen.getByTestId('col2-top');
    expect(col2Top).toBeInTheDocument();
    expect(col2Top).toHaveTextContent('Address Details');
    expect(col2Top).toHaveStyle({
      color: '#907435',
      textAlign: 'left',
    });
  });

  it('renders Col4Bottom with correct styles', () => {
    render(
      <Col4Bottom theme={mockTheme} data-testid="col4-bottom">
        Transaction Info
      </Col4Bottom>
    );
    const col4Bottom = screen.getByTestId('col4-bottom');
    expect(col4Bottom).toBeInTheDocument();
    expect(col4Bottom).toHaveTextContent('Transaction Info');
    expect(col4Bottom).toHaveStyle({
      color: 'grey',
      textAlign: 'left',
    });
  });

  it('renders ZAddressButton with correct styles', () => {
    render(
      <ZAddressButton theme={mockTheme} data-testid="zaddress-button">
        Click Me
      </ZAddressButton>
    );
    const button = screen.getByTestId('zaddress-button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Click Me');
    expect(button).toHaveStyle({
      backgroundColor: 'rgba(0,0,0,0)',
      border: '0px',
    });
  });

  it('renders Spacer with correct styles', () => {
    render(<Spacer theme={mockTheme} data-testid="spacer" />);
    const spacer = screen.getByTestId('spacer');
    expect(spacer).toBeInTheDocument();
    expect(spacer).toHaveStyle({
      minHeight: `${mockTheme.height * 0.005}px`,
    });
  });
});
