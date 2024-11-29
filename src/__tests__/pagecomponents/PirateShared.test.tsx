import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import {
  GlobalDiv,
  BlackBackground,
  AppBody,
  MainBody,
  BlackBackgroundQR,
  GradientBackground,
  SkullHeading,
  SkullCenteredDiv,
  SkullImg,
  DarkYellowButton,
  DarkGreyButton,
  BottomDashedArea,
  BottomDashedInput,
} from '@pagecomponents/PirateShared';

describe('PirateShared Components', () => {
  it('renders GlobalDiv with children correctly', () => {
    const { getByText } = render(<GlobalDiv>Test GlobalDiv</GlobalDiv>);
    expect(getByText('Test GlobalDiv')).toBeTruthy();
  });

  it('renders BlackBackground with children correctly', () => {
    const { getByText } = render(<BlackBackground><GlobalDiv>Inside BlackBackground</GlobalDiv></BlackBackground>);
    expect(getByText('Inside BlackBackground')).toBeTruthy();
  });

  it('renders AppBody with children correctly', () => {
    const { getByText } = render(<AppBody>Test AppBody</AppBody>);
    expect(getByText('Test AppBody')).toBeTruthy();
  });

  it('renders MainBody with children correctly', () => {
    const { getByText } = render(<MainBody>Test MainBody</MainBody>);
    expect(getByText('Test MainBody')).toBeTruthy();
  });

  it('renders BlackBackgroundQR with opacity correctly', () => {
    const { getByTestId } = render(
      <BlackBackgroundQR opacity={0.5}>
        <GlobalDiv>QR Background</GlobalDiv>
      </BlackBackgroundQR>
    );
    expect(getByTestId('black-background-qr')).toBeTruthy();
  });

  it('renders GradientBackground with children correctly', () => {
    const { getByText } = render(<GradientBackground>Test GradientBackground</GradientBackground>);
    expect(getByText('Test GradientBackground')).toBeTruthy();
  });

  it('renders SkullHeading with children correctly', () => {
    const { getByText } = render(<SkullHeading>Test SkullHeading</SkullHeading>);
    expect(getByText('Test SkullHeading')).toBeTruthy();
  });

  it('renders SkullCenteredDiv with children correctly', () => {
    const { getByText } = render(<SkullCenteredDiv>Test SkullCenteredDiv</SkullCenteredDiv>);
    expect(getByText('Test SkullCenteredDiv')).toBeTruthy();
  });

  it('renders SkullImg with source correctly', () => {
    const testSource = { uri: 'https://via.placeholder.com/150' };
    const { getByTestId } = render(<SkullImg source={testSource} />);
    expect(getByTestId('skull-img')).toBeTruthy();
  });

  it('handles DarkYellowButton press correctly', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(<DarkYellowButton onPress={onPressMock} label="Press Me" />);
    fireEvent.press(getByText('Press Me'));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('handles DarkGreyButton press correctly', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(<DarkGreyButton onPress={onPressMock} label="Press Me" />);
    fireEvent.press(getByText('Press Me'));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('renders BottomDashedArea with children correctly', () => {
    const { getByText } = render(<BottomDashedArea>Test Dashed Area</BottomDashedArea>);
    expect(getByText('Test Dashed Area')).toBeTruthy();
  });

  it('renders BottomDashedInput and handles text input correctly', () => {
    const onChangeTextMock = jest.fn();
    const { getByPlaceholderText } = render(
      <BottomDashedInput value="Test Input" onChangeText={onChangeTextMock} placeholder="Type here" />
    );

    const input = getByPlaceholderText('Type here');
    fireEvent.changeText(input, 'New Input');
    expect(onChangeTextMock).toHaveBeenCalledWith('New Input');
  });
});
