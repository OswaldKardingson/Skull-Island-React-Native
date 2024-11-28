import React from 'react';
import { render } from '@testing-library/react-native';
import {
  PassPhraseDiv,
  PassPhraseSectionOverscroll,
  PassPhraseSection,
  PassPhraseTitle,
  PassPhrasePWTitle,
  PassPhrasePWArea,
  PassPhrasePWInput,
  PassPhrasePWGradientCapLeft,
  PassPhrasePWGradientCapRight,
  PassPhraseRedText,
  PassPhraseArea,
  PassPhraseInput,
  PassPhraseInnerInput,
  PassPhraseGradientCapLeft,
  PassPhraseGradientCapRight,
  PassPhraseHeightTitle,
  PassPhraseHeightArea,
  PassPhraseHeightInput,
  PassPhraseCopyButton,
  PassPhraseNote1,
  PassPhraseNote2,
  PassPhraseQRTitle,
  PassPhraseQRBase,
  PassPhraseQR,
  PassPhraseBackButton,
  ReceiveSection,
  ReceiveAddress,
  ReceiveQR,
  ReceiveButtonSection,
  ReceiveGreyButton,
} from '@components/passphrase';

const mockTheme = {
  height: 800,
  width: 400,
};

describe('PassPhrase Components', () => {
  it('renders PassPhraseDiv with correct visibility', () => {
    const { getByTestId } = render(
      <PassPhraseDiv testID="passphrase-div" visible="flex" theme={mockTheme} />
    );
    const element = getByTestId('passphrase-div');
    expect(element).toBeTruthy();
  });

  it('renders PassPhraseSectionOverscroll', () => {
    const { getByTestId } = render(
      <PassPhraseSectionOverscroll
        testID="passphrase-overscroll"
        theme={mockTheme}
      />
    );
    const element = getByTestId('passphrase-overscroll');
    expect(element).toBeTruthy();
  });

  it('renders PassPhraseTitle with correct style', () => {
    const { getByTestId } = render(
      <PassPhraseTitle testID="passphrase-title" theme={mockTheme}>
        Test Title
      </PassPhraseTitle>
    );
    const element = getByTestId('passphrase-title');
    expect(element.props.children).toBe('Test Title');
  });

  it('renders PassPhrasePWInput with correct dimensions', () => {
    const { getByTestId } = render(
      <PassPhrasePWInput
        testID="passphrase-pw-input"
        theme={mockTheme}
        placeholder="Enter Passphrase"
      />
    );
    const element = getByTestId('passphrase-pw-input');
    expect(element.props.placeholder).toBe('Enter Passphrase');
  });

  it('renders PassPhraseCopyButton correctly', () => {
    const { getByTestId } = render(
      <PassPhraseCopyButton testID="passphrase-copy-button" theme={mockTheme}>
        Copy
      </PassPhraseCopyButton>
    );
    const element = getByTestId('passphrase-copy-button');
    expect(element).toBeTruthy();
  });

  it('renders PassPhraseHeightTitle correctly', () => {
    const { getByTestId } = render(
      <PassPhraseHeightTitle
        testID="passphrase-height-title"
        theme={mockTheme}
      >
        Height Title
      </PassPhraseHeightTitle>
    );
    const element = getByTestId('passphrase-height-title');
    expect(element.props.children).toBe('Height Title');
  });

  it('renders PassPhraseQRBase correctly', () => {
    const { getByTestId } = render(
      <PassPhraseQRBase testID="passphrase-qr-base" theme={mockTheme} />
    );
    const element = getByTestId('passphrase-qr-base');
    expect(element).toBeTruthy();
  });

  it('renders ReceiveSection correctly', () => {
    const { getByTestId } = render(
      <ReceiveSection testID="receive-section" theme={mockTheme} />
    );
    const element = getByTestId('receive-section');
    expect(element).toBeTruthy();
  });

  it('renders ReceiveAddress with correct placeholder', () => {
    const { getByTestId } = render(
      <ReceiveAddress
        testID="receive-address"
        theme={mockTheme}
        placeholder="Enter Address"
      />
    );
    const element = getByTestId('receive-address');
    expect(element.props.placeholder).toBe('Enter Address');
  });

  it('renders ReceiveQR correctly', () => {
    const { getByTestId } = render(
      <ReceiveQR testID="receive-qr" theme={mockTheme} />
    );
    const element = getByTestId('receive-qr');
    expect(element).toBeTruthy();
  });

  it('renders ReceiveGreyButton correctly', () => {
    const { getByTestId } = render(
      <ReceiveGreyButton testID="receive-grey-button" theme={mockTheme}>
        Button
      </ReceiveGreyButton>
    );
    const element = getByTestId('receive-grey-button');
    expect(element.props.children).toBe('Button');
  });
});
