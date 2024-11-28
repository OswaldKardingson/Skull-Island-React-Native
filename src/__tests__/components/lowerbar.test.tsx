import React from 'react';
import { render } from '@testing-library/react-native';
import {
  LowerBarDiv,
  LowerBarCenterButton,
  LowerBarCenterButtonImg,
  LowerBarSection,
  LowerBarButton,
  LowerBarButtonText,
} from '@components/lowerbar'; 

describe('LowerBar Components', () => {
  const mockTheme = {
    width: 360,
    height: 640,
  };

  it('renders LowerBarDiv correctly', () => {
    const { getByTestId } = render(<LowerBarDiv testID="lowerbar-div" {...mockTheme} />);
    const div = getByTestId('lowerbar-div');
    expect(div).toBeTruthy();
  });

  it('renders LowerBarCenterButton correctly', () => {
    const { getByTestId } = render(
      <LowerBarCenterButton testID="lowerbar-center-button" {...mockTheme} />
    );
    const button = getByTestId('lowerbar-center-button');
    expect(button).toBeTruthy();
  });

  it('renders LowerBarCenterButtonImg correctly', () => {
    const { getByTestId } = render(
      <LowerBarCenterButtonImg testID="lowerbar-center-button-img" {...mockTheme} />
    );
    const img = getByTestId('lowerbar-center-button-img');
    expect(img).toBeTruthy();
  });

  it('renders LowerBarSection correctly', () => {
    const { getByTestId } = render(
      <LowerBarSection testID="lowerbar-section" {...mockTheme} />
    );
    const section = getByTestId('lowerbar-section');
    expect(section).toBeTruthy();
  });

  it('renders LowerBarButton with opacity and hPosition', () => {
    const { getByTestId } = render(
      <LowerBarButton
        testID="lowerbar-button"
        {...mockTheme}
        hPosition={0.5}
        opacity={0.8}
      />
    );
    const button = getByTestId('lowerbar-button');
    expect(button.props.style).toEqual(
      expect.arrayContaining([{ opacity: 0.8 }])
    );
  });

  it('renders LowerBarButtonText correctly with active state', () => {
    const { getByTestId } = render(
      <LowerBarButtonText
        testID="lowerbar-button-text"
        {...mockTheme}
        active="visible"
      />
    );
    const text = getByTestId('lowerbar-button-text');
    expect(text.props.style).toContainEqual({ color: '#f0bc5e' });
  });
});
