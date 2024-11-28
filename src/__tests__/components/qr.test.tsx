import React from 'react';
import { render } from '@testing-library/react-native';
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
} from '@components/qr'; 

// Mock theme object for testing
const theme = {
  topBuffer: 10,
  width: 360,
  height: 640,
};

// Mock qrScanning object
const qrScanning = {
  opacity: 0.8,
  display: 'flex',
};

describe('QR Components', () => {
  it('renders QrSection with correct visibility and opacity', () => {
    const { getByTestId } = render(
      <QrSection
        testID="qr-section"
        theme={theme}
        qrScanning={qrScanning}
      />
    );
    const component = getByTestId('qr-section');
    expect(component.props.style.opacity).toBe(qrScanning.opacity);
    expect(component.props.style.display).toBe(qrScanning.display);
  });

  it('renders QrLeft with correct dimensions', () => {
    const { getByTestId } = render(
      <QrLeft testID="qr-left" theme={theme} />
    );
    const component = getByTestId('qr-left');
    expect(component.props.style.width).toBe(theme.width * 0.15);
    expect(component.props.style.height).toBe(theme.height * 0.4);
  });

  it('renders QrRight with correct dimensions', () => {
    const { getByTestId } = render(
      <QrRight testID="qr-right" theme={theme} />
    );
    const component = getByTestId('qr-right');
    expect(component.props.style.width).toBe(theme.width * 0.15);
    expect(component.props.style.height).toBe(theme.height * 0.4);
  });

  it('renders QrTop with correct dimensions', () => {
    const { getByTestId } = render(
      <QrTop testID="qr-top" theme={theme} />
    );
    const component = getByTestId('qr-top');
    expect(component.props.style.width).toBe(theme.width);
    expect(component.props.style.height).toBe(theme.height * 0.3);
  });

  it('renders QrBottom with correct dimensions', () => {
    const { getByTestId } = render(
      <QrBottom testID="qr-bottom" theme={theme} />
    );
    const component = getByTestId('qr-bottom');
    expect(component.props.style.width).toBe(theme.width);
    expect(component.props.style.height).toBe(theme.height * 0.3);
  });

  it('renders QrTopLeft with correct border styles', () => {
    const { getByTestId } = render(
      <QrTopLeft testID="qr-topleft" theme={theme} />
    );
    const component = getByTestId('qr-topleft');
    expect(component.props.style.borderLeftWidth).toBe(2);
    expect(component.props.style.borderTopWidth).toBe(2);
    expect(component.props.style.borderColor).toBe('red');
  });

  it('renders QrBottomLeft with correct border styles', () => {
    const { getByTestId } = render(
      <QrBottomLeft testID="qr-bottomleft" theme={theme} />
    );
    const component = getByTestId('qr-bottomleft');
    expect(component.props.style.borderLeftWidth).toBe(2);
    expect(component.props.style.borderBottomWidth).toBe(2);
    expect(component.props.style.borderColor).toBe('red');
  });

  it('renders QrTopRight with correct border styles', () => {
    const { getByTestId } = render(
      <QrTopRight testID="qr-topright" theme={theme} />
    );
    const component = getByTestId('qr-topright');
    expect(component.props.style.borderRightWidth).toBe(2);
    expect(component.props.style.borderTopWidth).toBe(2);
    expect(component.props.style.borderColor).toBe('red');
  });

  it('renders QrBottomRight with correct border styles', () => {
    const { getByTestId } = render(
      <QrBottomRight testID="qr-bottomright" theme={theme} />
    );
    const component = getByTestId('qr-bottomright');
    expect(component.props.style.borderRightWidth).toBe(2);
    expect(component.props.style.borderBottomWidth).toBe(2);
    expect(component.props.style.borderColor).toBe('red');
  });

  it('renders QrCancelButton with correct alignment and styles', () => {
    const { getByTestId } = render(
      <QrCancelButton testID="qr-cancelbutton" theme={theme}>
        Cancel
      </QrCancelButton>
    );
    const component = getByTestId('qr-cancelbutton');
    expect(component.props.children).toBe('Cancel');
    expect(component.props.style.backgroundColor).toBe('red');
    expect(component.props.style.width).toBe(theme.width * 0.25);
  });
});
