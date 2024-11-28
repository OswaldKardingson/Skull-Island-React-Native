// File: receive.test.tsx

import React from 'react';
import { render } from '@testing-library/react-native';
import {
  ReceiveDiv,
  ReceiveSectionOverscroll,
  ReceiveSection,
  ReceiveTitle,
  ReceiveAddressTitle,
  ReceiveAddressArea,
  ReceiveAddressInput,
  ReceiveCopyButton,
  ReceiveNote1,
  ReceiveNote2,
  ReceiveQRTitle,
  ReceiveQRBase,
  ReceiveQR,
  ReceiveBackButton,
} from '@components/receive';

const theme = {
  height: 800,
  width: 400,
};

describe('Receive Component Tests', () => {
  it('renders ReceiveDiv with visibility', () => {
    const { getByTestId } = render(
      <ReceiveDiv visible="flex" testID="receive-div" />
    );
    const element = getByTestId('receive-div');
    expect(element.props.style.display).toBe('flex');
  });

  it('renders ReceiveSectionOverscroll with correct styles', () => {
    const { getByTestId } = render(
      <ReceiveSectionOverscroll theme={theme} testID="receive-overscroll" />
    );
    const element = getByTestId('receive-overscroll');
    expect(element.props.style.height).toBe(theme.height * 0.975);
  });

  it('renders ReceiveTitle with correct text', () => {
    const { getByTestId } = render(
      <ReceiveTitle theme={theme} testID="receive-title">
        Test Title
      </ReceiveTitle>
    );
    const element = getByTestId('receive-title');
    expect(element.children).toContain('Test Title');
  });

  it('renders ReceiveAddressInput with flash prop', () => {
    const { getByTestId } = render(
      <ReceiveAddressInput
        theme={theme}
        flash={true}
        testID="receive-address-input"
      />
    );
    const element = getByTestId('receive-address-input');
    expect(element.props.style.backgroundColor).toBe('rgba(187,150,69,0.5)');
  });

  it('renders ReceiveCopyButton with correct styles', () => {
    const { getByTestId } = render(
      <ReceiveCopyButton theme={theme} testID="receive-copy-button">
        Copy
      </ReceiveCopyButton>
    );
    const element = getByTestId('receive-copy-button');
    expect(element.children).toContain('Copy');
  });

  it('renders ReceiveNote1 with correct text alignment', () => {
    const { getByTestId } = render(
      <ReceiveNote1 theme={theme} testID="receive-note1">
        Note 1
      </ReceiveNote1>
    );
    const element = getByTestId('receive-note1');
    expect(element.props.style.textAlign).toBe('center');
  });

  it('renders ReceiveQRTitle with correct color', () => {
    const { getByTestId } = render(
      <ReceiveQRTitle theme={theme} testID="receive-qr-title">
        QR Title
      </ReceiveQRTitle>
    );
    const element = getByTestId('receive-qr-title');
    expect(element.props.style.color).toBe('#bb9645');
  });

  it('renders ReceiveBackButton with proper alignment', () => {
    const { getByTestId } = render(
      <ReceiveBackButton theme={theme} testID="receive-back-button">
        Back
      </ReceiveBackButton>
    );
    const element = getByTestId('receive-back-button');
    expect(element.children).toContain('Back');
  });

  it('renders ReceiveQRBase and checks dimensions', () => {
    const { getByTestId } = render(
      <ReceiveQRBase theme={theme} testID="receive-qr-base" />
    );
    const element = getByTestId('receive-qr-base');
    expect(element.props.style.width).toBe(theme.width * 0.9);
    expect(element.props.style.height).toBe(theme.width * 0.9);
  });

  it('renders ReceiveQR and checks flex direction', () => {
    const { getByTestId } = render(
      <ReceiveQR theme={theme} testID="receive-qr" />
    );
    const element = getByTestId('receive-qr');
    expect(element.props.style.flexDirection).toBe('row');
  });
});
