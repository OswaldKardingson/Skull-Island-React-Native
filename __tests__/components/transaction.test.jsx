import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {
  ZTransactionMain,
  ZTransactionOverScroll,
  ZTransactionTitle,
  ZTransactionDetails,
  ZTransactionDetailFieldName,
  ZTransactionDetailFieldData,
  ZTransactionButtonBar,
  ZTransactionBackButton,
  ZTransactionExplorerButton,
} from './transaction'; // Ensure the path matches your file structure

const mockTheme = {
  width: 360,
  height: 640,
};

describe('Transaction Component', () => {
  it('renders the main transaction section', () => {
    render(
      <ZTransactionMain theme={mockTheme} data-testid="transaction-main" />
    );
    const mainSection = screen.getByTestId('transaction-main');
    expect(mainSection).toBeInTheDocument();
    expect(mainSection).toHaveStyle({
      width: '360px',
      height: '576px', // 90% of 640px
    });
  });

  it('renders the title correctly', () => {
    render(
      <ZTransactionTitle theme={mockTheme} data-testid="transaction-title">
        Transaction Title
      </ZTransactionTitle>
    );
    const title = screen.getByTestId('transaction-title');
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('Transaction Title');
    expect(title).toHaveStyle({
      color: '#bb9645',
      textAlign: 'center',
    });
  });

  it('renders the details section', () => {
    render(
      <ZTransactionDetails
        theme={mockTheme}
        data-testid="transaction-details"
      >
        Transaction Details
      </ZTransactionDetails>
    );
    const detailsSection = screen.getByTestId('transaction-details');
    expect(detailsSection).toBeInTheDocument();
    expect(detailsSection).toHaveTextContent('Transaction Details');
    expect(detailsSection).toHaveStyle({
      textAlign: 'left',
    });
  });

  it('renders field names and data', () => {
    render(
      <>
        <ZTransactionDetailFieldName
          theme={mockTheme}
          data-testid="transaction-field-name"
        >
          Field Name
        </ZTransactionDetailFieldName>
        <ZTransactionDetailFieldData
          theme={mockTheme}
          data-testid="transaction-field-data"
        >
          Field Data
        </ZTransactionDetailFieldData>
      </>
    );

    const fieldName = screen.getByTestId('transaction-field-name');
    const fieldData = screen.getByTestId('transaction-field-data');

    expect(fieldName).toBeInTheDocument();
    expect(fieldName).toHaveTextContent('Field Name');
    expect(fieldName).toHaveStyle({
      textAlign: 'left',
      color: '#bb9645',
    });

    expect(fieldData).toBeInTheDocument();
    expect(fieldData).toHaveTextContent('Field Data');
    expect(fieldData).toHaveStyle({
      textAlign: 'left',
      color: 'white',
    });
  });

  it('renders the buttons', () => {
    render(
      <>
        <ZTransactionBackButton
          theme={mockTheme}
          data-testid="transaction-back-button"
        >
          Back
        </ZTransactionBackButton>
        <ZTransactionExplorerButton
          theme={mockTheme}
          data-testid="transaction-explorer-button"
        >
          Explorer
        </ZTransactionExplorerButton>
      </>
    );

    const backButton = screen.getByTestId('transaction-back-button');
    const explorerButton = screen.getByTestId('transaction-explorer-button');

    expect(backButton).toBeInTheDocument();
    expect(backButton).toHaveTextContent('Back');
    expect(backButton).toHaveStyle({
      backgroundColor: 'rgba(187,150,69,1)',
      color: 'white',
    });

    expect(explorerButton).toBeInTheDocument();
    expect(explorerButton).toHaveTextContent('Explorer');
    expect(explorerButton).toHaveStyle({
      backgroundColor: 'grey',
      color: 'white',
    });
  });
});
