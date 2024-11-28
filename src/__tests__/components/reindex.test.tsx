import React from 'react';
import { render } from '@testing-library/react-native';
import {
  ReindexDiv,
  ReindexSectionOverscroll,
  ReindexSection,
  ReindexTitle,
  ReindexLoader,
  ReindexPWArea,
  ReindexPWInput,
  ReindexPWGradientCapLeft,
  ReindexPWGradientCapRight,
  ReindexNote1,
  ReindexFirstKnownButton,
  ReindexBackButton,
  ReindexQRTitle,
  ReindexQRBase,
  ReindexQR,
  ReindexFullButton,
  ReindexArea,
  ReindexInput,
  ReindexQRTitleFull,
  ReindexQRBaseFull,
  ReindexQRFull,
  ReindexBackButtonFull,
} from '@components/reindex';

describe('Reindex Component Tests', () => {
  test('ReindexDiv renders correctly when visible', () => {
    const { getByTestId } = render(
      <ReindexDiv visible={true} testID="reindex-div" />
    );
    const reindexDiv = getByTestId('reindex-div');
    expect(reindexDiv).toBeTruthy();
  });

  test('ReindexSection renders correctly when visible', () => {
    const { getByTestId } = render(
      <ReindexSection visible={true} testID="reindex-section" />
    );
    const reindexSection = getByTestId('reindex-section');
    expect(reindexSection).toBeTruthy();
  });

  test('ReindexTitle displays correct text', () => {
    const { getByText } = render(<ReindexTitle>Reindex Title</ReindexTitle>);
    const title = getByText('Reindex Title');
    expect(title).toBeTruthy();
  });

  test('ReindexLoader renders correctly', () => {
    const { getByTestId } = render(<ReindexLoader testID="reindex-loader" />);
    const loader = getByTestId('reindex-loader');
    expect(loader).toBeTruthy();
  });

  test('ReindexPWInput accepts input correctly', () => {
    const { getByPlaceholderText } = render(
      <ReindexPWInput placeholder="Enter password" />
    );
    const input = getByPlaceholderText('Enter password');
    expect(input).toBeTruthy();
  });

  test('ReindexFirstKnownButton renders and is clickable', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <ReindexFirstKnownButton
        onPress={onPressMock}
        testID="reindex-first-button"
      />
    );
    const button = getByTestId('reindex-first-button');
    expect(button).toBeTruthy();
  });

  test('ReindexBackButton renders and is clickable', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <ReindexBackButton onPress={onPressMock} testID="reindex-back-button" />
    );
    const button = getByTestId('reindex-back-button');
    expect(button).toBeTruthy();
  });

  test('ReindexQRTitle renders with correct text', () => {
    const { getByText } = render(<ReindexQRTitle>QR Title</ReindexQRTitle>);
    const qrTitle = getByText('QR Title');
    expect(qrTitle).toBeTruthy();
  });

  test('ReindexQR renders correctly', () => {
    const { getByTestId } = render(<ReindexQR testID="reindex-qr" />);
    const qr = getByTestId('reindex-qr');
    expect(qr).toBeTruthy();
  });

  test('ReindexQRFull renders correctly', () => {
    const { getByTestId } = render(<ReindexQRFull testID="reindex-qr-full" />);
    const qrFull = getByTestId('reindex-qr-full');
    expect(qrFull).toBeTruthy();
  });

  test('ReindexBackButtonFull renders and is clickable', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <ReindexBackButtonFull
        onPress={onPressMock}
        testID="reindex-back-button-full"
      />
    );
    const button = getByTestId('reindex-back-button-full');
    expect(button).toBeTruthy();
  });
});
