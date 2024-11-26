import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {
  ZTransactionListMain,
  ZTransactionListOverScroll,
  ZTransactionListBottomSpacer,
  ZTransactionMemo,
  ZTransactionMemoCloseButton,
  ZTransactionListUl,
  ZTransactionListLi,
  Col1Div,
  Col2Div,
  Col3Div,
  Col3Top,
  Col3Bottom,
  ZTransactionMemoButton,
} from '../../components/transactionList'; // Ensure the path matches your file structure

const mockTheme = {
  width: 360,
  height: 640,
};

describe('TransactionList Component', () => {
  it('renders the main transaction list section', () => {
    render(
      <ZTransactionListMain theme={mockTheme} data-testid="transaction-list-main" />
    );
    const mainSection = screen.getByTestId('transaction-list-main');
    expect(mainSection).toBeInTheDocument();
    expect(mainSection).toHaveStyle({
      width: '360px',
      height: '324px', // Computed height based on provided logic
    });
  });

  it('renders the overscroll container', () => {
    render(
      <ZTransactionListOverScroll theme={mockTheme} data-testid="transaction-list-overscroll">
        Overscroll Content
      </ZTransactionListOverScroll>
    );
    const overscroll = screen.getByTestId('transaction-list-overscroll');
    expect(overscroll).toBeInTheDocument();
    expect(overscroll).toHaveTextContent('Overscroll Content');
    expect(overscroll).toHaveStyle({
      overflow: 'scroll',
    });
  });

  it('renders the bottom spacer', () => {
    render(
      <ZTransactionListBottomSpacer theme={mockTheme} data-testid="transaction-list-bottom-spacer" />
    );
    const spacer = screen.getByTestId('transaction-list-bottom-spacer');
    expect(spacer).toBeInTheDocument();
    expect(spacer).toHaveStyle({
      height: `${mockTheme.height * 0.25}px`, // Expected height
    });
  });

  it('renders the transaction memo with correct styles', () => {
    render(
      <ZTransactionMemo theme={mockTheme} data-testid="transaction-memo">
        Memo Content
      </ZTransactionMemo>
    );
    const memo = screen.getByTestId('transaction-memo');
    expect(memo).toBeInTheDocument();
    expect(memo).toHaveTextContent('Memo Content');
    expect(memo).toHaveStyle({
      color: 'white',
      textAlign: 'center',
    });
  });

  it('renders the memo close button', () => {
    render(
      <ZTransactionMemoCloseButton theme={mockTheme} data-testid="memo-close-button">
        Close
      </ZTransactionMemoCloseButton>
    );
    const button = screen.getByTestId('memo-close-button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Close');
    expect(button).toHaveStyle({
      backgroundColor: 'rgba(187,150,69,1)',
      color: 'white',
    });
  });

  it('renders the transaction list with items', () => {
    render(
      <ZTransactionListUl theme={mockTheme} data-testid="transaction-list-ul">
        <ZTransactionListLi theme={mockTheme} data-testid="transaction-list-li">
          <Col1Div theme={mockTheme} data-testid="col-1">Col1</Col1Div>
          <Col2Div theme={mockTheme} data-testid="col-2">Col2</Col2Div>
          <Col3Div theme={mockTheme} data-testid="col-3">
            <Col3Top theme={mockTheme} data-testid="col-3-top">Top</Col3Top>
            <Col3Bottom theme={mockTheme} data-testid="col-3-bottom">Bottom</Col3Bottom>
          </Col3Div>
        </ZTransactionListLi>
      </ZTransactionListUl>
    );

    const ul = screen.getByTestId('transaction-list-ul');
    expect(ul).toBeInTheDocument();

    const li = screen.getByTestId('transaction-list-li');
    expect(li).toBeInTheDocument();

    const col1 = screen.getByTestId('col-1');
    const col2 = screen.getByTestId('col-2');
    const col3Top = screen.getByTestId('col-3-top');
    const col3Bottom = screen.getByTestId('col-3-bottom');

    expect(col1).toHaveTextContent('Col1');
    expect(col2).toHaveTextContent('Col2');
    expect(col3Top).toHaveTextContent('Top');
    expect(col3Bottom).toHaveTextContent('Bottom');
  });

  it('renders the memo button with proper styles', () => {
    render(
      <ZTransactionMemoButton theme={mockTheme} data-testid="transaction-memo-button">
        Memo Button
      </ZTransactionMemoButton>
    );
    const button = screen.getByTestId('transaction-memo-button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Memo Button');
    expect(button).toHaveStyle({
      borderRadius: `${mockTheme.height * 0.015 / 2}px`,
    });
  });
});
