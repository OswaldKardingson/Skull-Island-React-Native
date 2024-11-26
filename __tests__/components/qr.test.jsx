import React from 'react';
import { render } from '@testing-library/react';
import {
  QrSection,
  QrLeft,
  QrRight,
  QrTop,
  QrBottom,
  QrTopLeft,
  QrBottomLeft,
  QrTopRight,
  QrBottomRight,
  QrCancelButton,
} from '../../components/qr'; // Adjust the path if needed

// Mock theme object for testing
const theme = {
  width: 800,
  height: 600,
  topBuffer: 50,
};

// Mock qrScanning object
const qrScanning = {
  opacity: 0.8,
  display: 'block',
};

describe('QR Component Styled Components', () => {
  it('renders QrSection with correct styles', () => {
    const { getByTestId } = render(
      <QrSection data-testid="qr-section" theme={theme} qrScanning={qrScanning} />
    );
    const element = getByTestId('qr-section');
    expect(element).toHaveStyle(`opacity: ${qrScanning.opacity}`);
    expect(element).toHaveStyle(`display: ${qrScanning.display}`);
  });

  it('renders QrLeft with correct styles', () => {
    const { getByTestId } = render(<QrLeft data-testid="qr-left" theme={theme} />);
    const element = getByTestId('qr-left');
    expect(element).toHaveStyle(`background-color: #303030`);
  });

  it('renders QrRight with correct styles', () => {
    const { getByTestId } = render(<QrRight data-testid="qr-right" theme={theme} />);
    const element = getByTestId('qr-right');
    expect(element).toHaveStyle(`background-color: #303030`);
  });

  it('renders QrCancelButton with correct styles', () => {
    const { getByTestId } = render(<QrCancelButton data-testid="qr-cancel" theme={theme} />);
    const element = getByTestId('qr-cancel');
    expect(element).toHaveStyle('background-color: red');
    expect(element).toHaveStyle('color: #ffffff');
  });

  it('renders corner indicators correctly', () => {
    const { getByTestId } = render(
      <>
        <QrTopLeft data-testid="qr-top-left" theme={theme} />
        <QrBottomLeft data-testid="qr-bottom-left" theme={theme} />
        <QrTopRight data-testid="qr-top-right" theme={theme} />
        <QrBottomRight data-testid="qr-bottom-right" theme={theme} />
      </>
    );

    expect(getByTestId('qr-top-left')).toHaveStyle('border-left: 2px solid red');
    expect(getByTestId('qr-bottom-left')).toHaveStyle('border-left: 2px solid red');
    expect(getByTestId('qr-top-right')).toHaveStyle('border-right: 2px solid red');
    expect(getByTestId('qr-bottom-right')).toHaveStyle('border-right: 2px solid red');
  });
});
