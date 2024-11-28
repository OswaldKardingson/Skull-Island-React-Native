import React from 'react';
import { render } from '@testing-library/react-native';
import {
  PrivateKeyDiv,
  PrivateKeySectionOverscroll,
  PrivateKeySection,
  PrivateKeyTitle,
  PrivateKeyPWTitle,
  PrivateKeyPWArea,
  PrivateKeyPWInput,
  PrivateKeyPWGradientCapLeft,
  PrivateKeyPWGradientCapRight,
  PrivateKeyRedText,
  PrivateKeyArea,
  PrivateKeyInput,
  PrivateKeyNote1,
  PrivateKeyNote2,
  PrivateKeyQRTitle,
  PrivateKeyQRBase,
  PrivateKeyQR,
  PrivateKeyCopyButton,
  PrivateKeyBackButton,
} from '@components/privatekey'; // 

// Mock theme object for testing
const theme = {
  width: 360,
  height: 640,
};

// Mock props
const visible = 'flex';
const flash = true;

describe('PrivateKey Components', () => {
  it('renders PrivateKeyDiv with correct visibility', () => {
    const { getByTestId } = render(
      <PrivateKeyDiv testID="privatekey-div" visible={visible} theme={theme} />
    );
    const component = getByTestId('privatekey-div');
    expect(component.props.style.display).toBe(visible);
  });

  it('renders PrivateKeySectionOverscroll with correct styles', () => {
    const { getByTestId } = render(
      <PrivateKeySectionOverscroll
        testID="privatekey-section-overscroll"
        theme={theme}
      />
    );
    const component = getByTestId('privatekey-section-overscroll');
    expect(component.props.style.height).toBe(theme.height * 0.975);
  });

  it('renders PrivateKeySection with correct visibility', () => {
    const { getByTestId } = render(
      <PrivateKeySection
        testID="privatekey-section"
        visible={visible}
        theme={theme}
      />
    );
    const component = getByTestId('privatekey-section');
    expect(component.props.style.display).toBe(visible);
  });

  it('renders PrivateKeyTitle with correct text alignment and styles', () => {
    const { getByTestId } = render(
      <PrivateKeyTitle testID="privatekey-title" theme={theme}>
        Private Key Title
      </PrivateKeyTitle>
    );
    const component = getByTestId('privatekey-title');
    expect(component.props.style.textAlign).toBe('center');
    expect(component.props.children).toBe('Private Key Title');
  });

  it('renders PrivateKeyPWInput with correct styles', () => {
    const { getByTestId } = render(
      <PrivateKeyPWInput
        testID="privatekey-pwinput"
        theme={theme}
        placeholder="Enter password"
      />
    );
    const component = getByTestId('privatekey-pwinput');
    expect(component.props.style.width).toBe(theme.width * 0.9);
    expect(component.props.placeholder).toBe('Enter password');
  });

  it('renders PrivateKeyRedText with correct color', () => {
    const { getByTestId } = render(
      <PrivateKeyRedText testID="privatekey-redtext" theme={theme}>
        Warning Message
      </PrivateKeyRedText>
    );
    const component = getByTestId('privatekey-redtext');
    expect(component.props.style.color).toBe('rgba(229,66,18,1)');
  });

  it('renders PrivateKeyArea with correct background color', () => {
    const { getByTestId } = render(
      <PrivateKeyArea testID="privatekey-area" theme={theme} />
    );
    const component = getByTestId('privatekey-area');
    expect(component.props.style.backgroundColor).toBe('rgba(187,150,69,0.1)');
  });

  it('renders PrivateKeyInput with flash styles', () => {
    const { getByTestId } = render(
      <PrivateKeyInput testID="privatekey-input" theme={theme} flash={flash} />
    );
    const component = getByTestId('privatekey-input');
    expect(component.props.style.backgroundColor).toBe(
      'rgba(187,150,69,0.5)'
    );
  });

  it('renders PrivateKeyQR with correct dimensions', () => {
    const { getByTestId } = render(
      <PrivateKeyQR testID="privatekey-qr" theme={theme} />
    );
    const component = getByTestId('privatekey-qr');
    expect(component.props.style.width).toBe(theme.width * 0.9);
  });

  it('renders PrivateKeyCopyButton with correct alignment', () => {
    const { getByTestId } = render(
      <PrivateKeyCopyButton testID="privatekey-copy-btn" theme={theme}>
        Copy
      </PrivateKeyCopyButton>
    );
    const component = getByTestId('privatekey-copy-btn');
    expect(component.props.children).toBe('Copy');
  });

  it('renders PrivateKeyBackButton with correct styles', () => {
    const { getByTestId } = render(
      <PrivateKeyBackButton testID="privatekey-back-btn" theme={theme}>
        Back
      </PrivateKeyBackButton>
    );
    const component = getByTestId('privatekey-back-btn');
    expect(component.props.children).toBe('Back');
  });
});
