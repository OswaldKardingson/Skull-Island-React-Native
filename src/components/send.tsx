// src/components/Send.tsx

import React from 'react';
import styled from 'styled-components/native';
import { TextProps } from 'react-native';

// Constants
const TitleFontSize = 1.5 / 21;
const SectionTitleFontSize = 1.5 / 36;
const RedFontSize = 1.5 / 52;
const DashAreaSize = 1.5 / 18;
const InputAreaSize = 1.5 / 24;
const InputAreaFontSize = 1.5 / 36;
const MemoInput = 1.5 / 26;

// VisibilityProps Interface
interface VisibilityProps {
  visible: boolean;
  mlength: number; // Add mlength property
  theme: DefaultTheme; // Add theme property if missing
}


// ThemeProps Interface
interface ThemeProps {
  theme: {
    height: number;
    width: number;
  };
}

// Styled Components
// Component: SendDiv
export const SendDiv = styled.View<VisibilityProps>`
  position: absolute;
  top: 0;
  left: 0;
  display: ${(props) => (props?.visible ? 'flex' : 'none')};
  transition: 500ms;
`;

// Component: SendSectionOverscroll
export const SendSectionOverscroll = styled.ScrollView`
  position: absolute;
  top: ${(props) => props?.theme.height * 0.0125}px;
  left: 0;
  height: ${(props) => props?.theme.height * 0.975}px;
  width: ${(props) => props?.theme.width}px;
  overscroll-behavior: contain;
`;

// Component: SendSection
export const SendSection = styled.View<VisibilityProps & { hsize: number }>`
  position: absolute;
  top: 0;
  left: 0;
  height: ${(props) => props?.theme.height * props?.hsize}px;
  width: ${(props) => props?.theme.width}px;
  display: ${(props) => (props?.visible ? 'flex' : 'none')};
`;

// Component: SendTitle
export const SendTitle = styled.Text`
  position: absolute;
  top: ${(props) => props?.theme.height * 0.05}px;
  left: 0;
  color: #bb9645;
  height: ${(props) => props?.theme.width * TitleFontSize}px;
  width: ${(props) => props?.theme.width}px;
  font-family: 'Bai Jamjuree';
  font-style: normal;
  font-weight: bold;
  font-size: ${(props) => props?.theme.width * TitleFontSize}px;
  text-align: center;
`;

// Component: SelectAddressTitle
export const SelectAddressTitle = styled.Text`
  position: absolute;
  top: ${(props) =>
    props?.theme.height * 0.075 + props?.theme.width * TitleFontSize}px;
  left: ${(props) => props?.theme.width * 0.05}px;
  color: #bb9645;
  height: ${(props) => props?.theme.width * SectionTitleFontSize}px;
  width: ${(props) => props?.theme.width}px;
  font-size: ${(props) => props?.theme.width * SectionTitleFontSize}px;
  text-align: left;
`;

// Component: SelectAddressDashedArea
export const SelectAddressDashedArea = styled.View`
  position: absolute;
  top: ${(props) =>
    props?.theme.height * 0.08 +
    props?.theme.width * TitleFontSize +
    props?.theme.width * SectionTitleFontSize}px;
  left: ${(props) => props?.theme.width * 0.05}px;
  background-color: rgba(187, 150, 69, 0.1);
  width: ${(props) => props?.theme.width * 0.9}px;
  height: ${(props) => props?.theme.width * DashAreaSize}px;
  margin: 0px;
  border: 0px;
`;

// Component: SendAddressTitle
export const SendAddressTitle = styled.Text`
  position: absolute;
  top: ${(props) =>
    props?.theme.height * 0.085 +
    props?.theme.width * TitleFontSize +
    props?.theme.width * SectionTitleFontSize +
    props?.theme.width * DashAreaSize}px;
  left: ${(props) => props?.theme.width * 0.05}px;
  color: #bb9645;
  height: ${(props) => props?.theme.width * SectionTitleFontSize}px;
  width: ${(props) => props?.theme.width * 0.9}px;
  font-size: ${(props) => props?.theme.width * SectionTitleFontSize}px;
  text-align: left;
`;

// Component: SendDashedArea
export const SendDashedArea = styled.View`
  position: absolute;
  top: ${(props) =>
    props?.theme.height * 0.09 +
    props?.theme.width * TitleFontSize +
    props?.theme.width * SectionTitleFontSize * 2 +
    props?.theme.width * DashAreaSize}px;
  left: ${(props) => props?.theme.width * 0.05}px;
  background-color: rgba(187, 150, 69, 0.1);
  width: ${(props) => props?.theme.width * 0.9}px;
  height: ${(props) =>
    props?.theme.width * (InputAreaSize * 2 + DashAreaSize)}px;
  margin: 0px;
  border: 0px;
`;

export function getDashedAreaScroll(height: number, width: number): number {
  return (
    height * 0.09 +
    width * TitleFontSize +
    width * SectionTitleFontSize * 2 +
    width * DashAreaSize -
    height * 0.15
  );
}

// Component: SendDashedInput
export const SendDashedInput = styled.TextInput.attrs(() => ({
  testID: 'send-dashed-input',
}))`
  position: absolute;
  left: 0;
  top: 0;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0);
  width: ${(props) => props?.theme.width * 0.9}px;
  height: ${(props) => props?.theme.width * InputAreaSize * 3}px;
  margin: 0px;
  padding: 0px;
  border-width: 0px 0px 2px 0px;
  border-style: dashed;
  border-color: #bb9645;
  font-size: ${(props) => props?.theme.width * InputAreaFontSize}px;
  text-align: center;

  :focus {
    outline: none;
  }
`;

// Component: SendGradientCapLeft
export const SendGradientCapLeft = styled.View`
  position: absolute;
  left: 0;
  top: 0;
  background: linear-gradient(90deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  width: ${(props) => props?.theme.width * 0.1}px;
  height: ${(props) =>
    props?.theme.width * (InputAreaSize * 2 + DashAreaSize)}px;
  z-index: 1;
`;

// Component: SendGradientCapRight
export const SendGradientCapRight = styled.View`
  position: absolute;
  right: 0;
  top: 0;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  width: ${(props) => props?.theme.width * 0.1}px;
  height: ${(props) =>
    props?.theme.width * (InputAreaSize * 2 + DashAreaSize)}px;
  z-index: 1;
`;

// Component: SendRedText
export const SendRedText = styled.Text`
  position: absolute;
  top: ${(props) =>
    props?.theme.height * 0.09 +
    props?.theme.width * TitleFontSize +
    props?.theme.width * SectionTitleFontSize * 2 +
    props?.theme.width * DashAreaSize +
    props?.theme.width * (InputAreaSize * 2 + DashAreaSize)}px;
  left: 0;
  height: ${(props) => props?.theme.width * RedFontSize}px;
  width: ${(props) => props?.theme.width}px;
  font-size: ${(props) => props?.theme.width * RedFontSize}px;
  color: rgba(229, 66, 18, 1);
  text-align: center;
`;

// Component: SendNoteLineOne
export const SendNoteLineOne = styled.Text`
  position: absolute;
  top: ${(props) =>
    props?.theme.height * 0.105 +
    props?.theme.width * TitleFontSize +
    props?.theme.width * SectionTitleFontSize * 2 +
    props?.theme.width * DashAreaSize +
    props?.theme.width * (InputAreaSize * 2 + DashAreaSize) +
    props?.theme.width * RedFontSize}px;
  left: 0;
  height: ${(props) => props?.theme.width * RedFontSize}px;
  width: ${(props) => props?.theme.width}px;
  font-size: ${(props) => props?.theme.width * RedFontSize}px;
  color: #bb9645;
  text-align: center;
`;

// Component: SendNoteLineTwo
export const SendNoteLineTwo = styled.Text`
  position: absolute;
  top: ${(props) =>
    props?.theme.height * 0.105 +
    props?.theme.width * TitleFontSize +
    props?.theme.width * SectionTitleFontSize * 2 +
    props?.theme.width * DashAreaSize +
    props?.theme.width * (InputAreaSize * 2 + DashAreaSize) +
    props?.theme.width * RedFontSize * 2}px;
  left: 0;
  height: ${(props) => props?.theme.width * RedFontSize}px;
  width: ${(props) => props?.theme.width}px;
  font-size: ${(props) => props?.theme.width * RedFontSize}px;
  color: #bb9645;
  text-align: center;
`;

// Component: SendAmountTitle
export const SendAmountTitle = styled.Text`
  position: absolute;
  top: ${(props) =>
    props?.theme.height * 0.13 +
    props?.theme.width * TitleFontSize +
    props?.theme.width * SectionTitleFontSize * 2 +
    props?.theme.width * DashAreaSize +
    props?.theme.width * (InputAreaSize * 2 + DashAreaSize) +
    props?.theme.width * RedFontSize * 3}px;
  left: ${(props) => props?.theme.width * 0.05}px;
  color: #bb9645;
  height: ${(props) => props?.theme.width * SectionTitleFontSize}px;
  width: ${(props) => props?.theme.width * 0.9}px;
  font-size: ${(props) => props?.theme.width * SectionTitleFontSize}px;
  text-align: left;
`;

// Component: SendAmountArea
export const SendAmountArea = styled.View`
  position: absolute;
  top: ${(props) =>
    props?.theme.height * 0.135 +
    props?.theme.width * TitleFontSize +
    props?.theme.width * SectionTitleFontSize * 2 +
    props?.theme.width * DashAreaSize +
    props?.theme.width * (InputAreaSize * 2 + DashAreaSize) +
    props?.theme.width * RedFontSize * 3}px;
  left: ${(props) => props?.theme.width * 0.05}px;
  background-color: rgba(187, 150, 69, 0.1);
  width: ${(props) => props?.theme.width * 0.9}px;
  height: ${(props) => props?.theme.width * DashAreaSize}px;
`;

export function getAmountAreaScroll(height: number, width: number): number {
  return (
    height * 0.135 +
    width * TitleFontSize +
    width * SectionTitleFontSize * 2 +
    width * DashAreaSize +
    width * (InputAreaSize * 2 + DashAreaSize) +
    width * RedFontSize * 3 -
    height * 0.15
  );
}

// Component: SendAmountDashes
export const SendAmountDashes = styled.View`
  position: absolute;
  right: 0;
  top: 0;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0);
  width: ${(props) => props?.theme.width * 0.45}px;
  height: ${(props) => props?.theme.width * InputAreaSize}px;
  margin: 0px;
  border-width: 0px 0px 2px 0px;
  border-style: dashed;
  border-color: #bb9645;
`;

// Component: SendAmountInput
export const SendAmountInput = styled.TextInput.attrs(() => ({
  testID: 'send-amount-input',
}))`
  position: absolute;
  right: 0;
  left: 0;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0);
  width: ${(props) => props?.theme.width * 0.3}px;
  height: ${(props) => props?.theme.width * InputAreaSize}px;
  margin: 0px;
  border-width: 0px;
  font-size: ${(props) => props?.theme.width * InputAreaFontSize}px;
  text-align: right;

  :focus {
    outline: none;
  }
`;

// Component: SendAmountGradientCapLeft
export const SendAmountGradientCapLeft = styled.View`
  position: absolute;
  left: 0;
  top: 0;
  background: linear-gradient(90deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  width: ${(props) => props?.theme.width * 0.1}px;
  height: ${(props) => props?.theme.width * DashAreaSize}px;
  z-index: 1;
`;

// Component: SendAmountGradientCapRight
export const SendAmountGradientCapRight = styled.View`
  position: absolute;
  right: 0;
  top: 0;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  width: ${(props) => props?.theme.width * 0.1}px;
  height: ${(props) => props?.theme.width * DashAreaSize}px;
  z-index: 1;
`;

// Component: SendCurrencyCap
export const SendCurrencyCap = styled.Text`
  position: absolute;
  right: 0;
  top: ${(props) => props?.theme.width * 0.0075}px;
  width: ${(props) => props?.theme.width * 0.125}px;
  height: ${(props) => props?.theme.width * InputAreaSize}px;
  font-size: ${(props) => props?.theme.width * InputAreaFontSize}px;
  font-family: 'Bai Jamjuree';
  font-weight: bold;
  z-index: 2;
  color: #bb9645;
  text-align: left;
  margin: 0px;
`;

// Component: SendAmountRedText
export const SendAmountRedText = styled.Text`
  position: absolute;
  top: ${(props) =>
    props?.theme.height * 0.135 +
    props?.theme.width * TitleFontSize +
    props?.theme.width * SectionTitleFontSize * 2 +
    props?.theme.width * DashAreaSize +
    props?.theme.width * (InputAreaSize * 2 + DashAreaSize) +
    props?.theme.width * DashAreaSize +
    props?.theme.width * RedFontSize * 3}px;
  right: ${(props) => props?.theme.width * 0.05}px;
  height: ${(props) => props?.theme.width * RedFontSize}px;
  width: ${(props) => props?.theme.width * 0.45}px;
  font-size: ${(props) => props?.theme.width * RedFontSize}px;
  color: rgba(229, 66, 18, 1);
  text-align: center;
`;

// Component: SendAmountFeeText
export const SendAmountFeeText = styled.Text`
  position: absolute;
  top: ${(props) =>
    props?.theme.height * 0.135 +
    props?.theme.width * TitleFontSize +
    props?.theme.width * SectionTitleFontSize * 2 +
    props?.theme.width * DashAreaSize +
    props?.theme.width * (InputAreaSize * 2 + DashAreaSize) +
    props?.theme.width * DashAreaSize +
    props?.theme.width * RedFontSize * 3}px;
  left: ${(props) => props?.theme.width * 0.05}px;
  height: ${(props) => props?.theme.width * RedFontSize}px;
  width: ${(props) => props?.theme.width * 0.5}px;
  font-size: ${(props) => props?.theme.width * RedFontSize}px;
  color: #bb9645;
  text-align: left;
`;

// Component: SendUSDArea
export const SendUSDArea = styled.View`
  position: absolute;
  top: ${(props) =>
    props?.theme.height * 0.155 +
    props?.theme.width * TitleFontSize +
    props?.theme.width * SectionTitleFontSize * 2 +
    props?.theme.width * DashAreaSize +
    props?.theme.width * (InputAreaSize * 2 + DashAreaSize) +
    props?.theme.width * DashAreaSize +
    props?.theme.width * RedFontSize * 4}px;
  left: ${(props) => props?.theme.width * 0.05}px;
  background-color: rgba(187, 150, 69, 0.1);
  width: ${(props) => props?.theme.width * 0.9}px;
  height: ${(props) => props?.theme.width * DashAreaSize}px;
`;

export function getUSDAreaScroll(height: number, width: number): number {
  return (
    height * 0.155 +
    width * TitleFontSize +
    width * SectionTitleFontSize * 2 +
    width * DashAreaSize +
    width * (InputAreaSize * 2 + DashAreaSize) +
    width * DashAreaSize +
    width * RedFontSize * 4 -
    height * 0.15
  );
}

// Component: SendUSDDashes
export const SendUSDDashes = styled.View`
  position: absolute;
  right: 0;
  top: 0;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0);
  width: ${(props) => props?.theme.width * 0.45}px;
  height: ${(props) => props?.theme.width * InputAreaSize}px;
  margin: 0px;
  border-width: 0px 0px 2px 0px;
  border-style: dashed;
  border-color: #bb9645;
`;

// Component: SendUSDInput
export const SendUSDInput = styled.TextInput.attrs(() => ({
  testID: 'send-usd-input',
}))`
  position: absolute;
  right: 0;
  left: 0;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0);
  width: ${(props) => props?.theme.width * 0.3}px;
  height: ${(props) => props?.theme.width * InputAreaSize}px;
  margin: 0px;
  border-width: 0px;
  font-size: ${(props) => props?.theme.width * InputAreaFontSize}px;
  text-align: right;

  :focus {
    outline: none;
  }
`;

// Component: SendUSDGradientCapLeft
export const SendUSDGradientCapLeft = styled.View`
  position: absolute;
  left: 0;
  top: 0;
  background: linear-gradient(90deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  width: ${(props) => props?.theme.width * 0.1}px;
  height: ${(props) => props?.theme.width * DashAreaSize}px;
  z-index: 1;
`;

// Component: SendUSDGradientCapRight
export const SendUSDGradientCapRight = styled.View`
  position: absolute;
  right: 0;
  top: 0;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  width: ${(props) => props?.theme.width * 0.1}px;
  height: ${(props) => props?.theme.width * DashAreaSize}px;
  z-index: 1;
`;

// Component: SendUSDRedText
export const SendUSDRedText = styled.Text`
  position: absolute;
  top: ${(props) =>
    props?.theme.height * 0.155 +
    props?.theme.width * TitleFontSize +
    props?.theme.width * SectionTitleFontSize * 2 +
    props?.theme.width * DashAreaSize +
    props?.theme.width * (InputAreaSize * 2 + DashAreaSize) +
    props?.theme.width * DashAreaSize * 2 +
    props?.theme.width * RedFontSize * 4}px;
  right: ${(props) => props?.theme.width * 0.05}px;
  height: ${(props) => props?.theme.width * RedFontSize}px;
  width: ${(props) => props?.theme.width * 0.45}px;
  font-size: ${(props) => props?.theme.width * RedFontSize}px;
  color: rgba(229, 66, 18, 1);
  text-align: center;
`;

// Component: SendMemoTitle
export const SendMemoTitle = styled.Text`
  position: absolute;
  top: ${(props) =>
    props?.theme.height * 0.165 +
    props?.theme.width * TitleFontSize +
    props?.theme.width * SectionTitleFontSize * 3 +
    props?.theme.width * DashAreaSize +
    props?.theme.width * (InputAreaSize * 2 + DashAreaSize) +
    props?.theme.width * DashAreaSize * 2 +
    props?.theme.width * RedFontSize * 5}px;
  left: ${(props) => props?.theme.width * 0.05}px;
  color: #bb9645;
  height: ${(props) => props?.theme.width * SectionTitleFontSize}px;
  width: ${(props) => props?.theme.width * 0.9}px;
  font-size: ${(props) => props?.theme.width * SectionTitleFontSize}px;
  text-align: left;
`;

// Component: SendMemoArea
export const SendMemoArea = styled.View<{
  mlength: number;
}>`
  position: absolute;
  top: ${(props) =>
    props?.theme.height * 0.17 +
    props?.theme.width * TitleFontSize +
    props?.theme.width * SectionTitleFontSize * 3 +
    props?.theme.width * DashAreaSize +
    props?.theme.width * (InputAreaSize * 2 + DashAreaSize) +
    props?.theme.width * DashAreaSize * 2 +
    props?.theme.width * RedFontSize * 5}px;
  left: ${(props) => props?.theme.width * 0.05}px;
  background-color: rgba(187, 150, 69, 0.1);
  width: ${(props) => props?.theme.width * 0.9}px;
  height: ${(props) =>
    props?.theme.width * DashAreaSize +
    props?.theme.width * MemoInput *
      (Math.ceil(props?.mlength / 35) > 0
        ? Math.ceil(props?.mlength / 35)
        : 1)}px;
`;

export function getMemoAreaScroll(
  height: number,
  width: number,
  mlength: number
): number {
  return (
    height * 0.17 +
    width * TitleFontSize +
    width * SectionTitleFontSize * 3 +
    width * DashAreaSize +
    width * (InputAreaSize * 2 + DashAreaSize) +
    width * DashAreaSize * 2 +
    width * RedFontSize * 5 -
    height * 0.15
  );
}

// Component: SendMemoInput
export const SendMemoInput = styled.TextInput.attrs(() => ({
  testID: 'send-memo-input',
}))<{
  mlength: number;
}>`
  position: absolute;
  left: 0;
  top: 0;
  color: #ffffff;
  line-height: ${(props) => props?.theme.width * MemoInput}px;
  background-color: rgba(0, 0, 0, 0);
  width: ${(props) => props?.theme.width * 0.9}px;
  height: ${(props) =>
    props?.theme.width * InputAreaSize +
    props?.theme.width * MemoInput *
      (Math.ceil(props?.mlength / 35) > 0
        ? Math.ceil(props?.mlength / 35)
        : 1)}px;
  margin: 0px;
  border-width: 0px 0px 2px 0px;
  border-style: dashed;
  border-color: #bb9645;
  font-size: ${(props) => props?.theme.width * InputAreaFontSize}px;
  text-align: center;

  :focus {
    outline: none;
  }
`;

// Component: SendMemoGradientCapLeft
export const SendMemoGradientCapLeft = styled.View`
  position: absolute;
  left: 0;
  top: 0;
  background: linear-gradient(90deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  width: ${(props) => props?.theme.width * 0.1}px;
  height: ${(props) => props?.theme.width * DashAreaSize}px;
  z-index: 1;
`;

// Component: SendMemoGradientCapRight
export const SendMemoGradientCapRight = styled.View`
  position: absolute;
  right: 0;
  top: 0;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  width: ${(props) => props?.theme.width * 0.1}px;
  height: ${(props) => props?.theme.width * DashAreaSize}px;
  z-index: 1;
`;

// Define a custom interface for props
interface SendMemoRedTextProps {
  mlength: number; // Add the custom property
  theme: {
    width: number;
    height: number;
  };
}

// Component: SendMemoRedText
export const SendMemoRedText = styled.Text<SendMemoRedTextProps>`
  position: absolute;
  top: ${(props) =>
    props.theme.height * 0.17 +
    props.theme.width * TitleFontSize +
    props.theme.width * SectionTitleFontSize * 3 +
    (Math.ceil(props.mlength / 35) > 0
      ? Math.ceil(props.mlength / 35)
      : 1) *
      props.theme.width}px;
  left: ${(props) => props.theme.width * 0.05}px;
  height: ${(props) => props.theme.width * RedFontSize}px;
  width: ${(props) => props.theme.width * 0.9}px;
  font-size: ${(props) => props.theme.width * RedFontSize}px;
  color: rgba(229, 66, 18, 1);
  text-align: right;
`;


import { TouchableOpacityProps } from 'react-native';

// Props interface

import { DefaultTheme } from 'styled-components';

interface SendButtonProps extends TouchableOpacityProps {
  disabled?: boolean; // Already present in TouchableOpacityProps
  mlength: number; // Custom property
  theme: DefaultTheme; // From styled-components/native
}

// Component: SendButton
export const SendButton = styled.TouchableOpacity.attrs(() => ({
  testID: 'send-button',
}))<SendButtonProps>`
  position: absolute;
  background-color: ${(props) => (props.disabled ? '#A9A9A9' : '#bb9645')};
  color: white;
  font-size: ${(props) => props.theme.height * 0.025}px;
  width: ${(props) => props.theme.width * 0.325}px;
  height: ${(props) => props.theme.height * 0.075}px;
  left: ${(props) => props.theme.width * 0.75 - props.theme.width * 0.325 / 2}px;
  top: ${(props) =>
    props.theme.height * 0.195 +
    props.theme.width * TitleFontSize +
    props.theme.width * SectionTitleFontSize * 3 +
    props.theme.width * DashAreaSize +
    props.theme.width * (InputAreaSize * 2 + DashAreaSize) +
    props.theme.width * DashAreaSize * 3 +
    props.theme.width * RedFontSize * 6 +
    props.theme.width *
      MemoInput *
      (Math.ceil(props.mlength / 35) > 0 ? Math.ceil(props.mlength / 35) : 1)}px;
  border-radius: ${(props) => props.theme.height * 0.075 / 2}px;
  justify-content: center;
  align-items: center;

  :focus {
    outline: none;
  }
`;

// Component: MaxButton
interface MaxButtonProps extends TouchableOpacityProps {
  mlength: number; // Custom property for memo length
  theme: DefaultTheme; // Styled-components theme
}

export const MaxButton = styled.TouchableOpacity.attrs<MaxButtonProps>(({ mlength }) => ({
  testID: 'max-button',
}))<MaxButtonProps>`
  position: absolute;
  background-color: grey;
  color: white;
  font-size: ${(props) => props.theme.height * 0.025}px;
  width: ${(props) => props.theme.width * 0.325}px;
  height: ${(props) => props.theme.height * 0.075}px;
  left: ${(props) => props.theme.width * 0.25 - props.theme.width * 0.325 / 2}px;
  top: ${(props) =>
    props.theme.height * 0.195 +
    props.theme.width * TitleFontSize +
    props.theme.width * SectionTitleFontSize * 3 +
    props.theme.width * DashAreaSize +
    props.theme.width * (InputAreaSize * 2 + DashAreaSize) +
    props.theme.width * DashAreaSize * 3 +
    props.theme.width * RedFontSize * 6 +
    props.theme.width * MemoInput *
      (Math.ceil(props.mlength / 35) > 0 ? Math.ceil(props.mlength / 35) : 1)}px;
  border-radius: ${(props) => props.theme.height * 0.075 / 2}px;
  justify-content: center;
  align-items: center;

  :focus {
    outline: none;
  }
`;



// Component: SendConfirmAmount
export const SendConfirmAmount = styled.Text`
  position: absolute;
  top: ${(props) =>
    props?.theme.height * 0.075 + props?.theme.width * TitleFontSize}px;
  left: ${(props) => props?.theme.width * 0.15}px;
  color: #bb9645;
  height: ${(props) => props?.theme.width * InputAreaFontSize}px;
  width: ${(props) => props?.theme.width * 0.8}px;
  font-size: ${(props) => props?.theme.width * InputAreaFontSize}px;
  text-align: left;
`;

// Component: SendConfirmAmountArea
export const SendConfirmAmountArea = styled.View`
  position: absolute;
  top: ${(props) =>
    props?.theme.height * 0.085 +
    props?.theme.width * TitleFontSize +
    props?.theme.width * InputAreaFontSize}px;
  left: ${(props) => props?.theme.width * 0.05}px;
  background-color: rgba(36, 37, 38, 1);
  width: ${(props) => props?.theme.width * 0.9}px;
  height: ${(props) => props?.theme.width * DashAreaSize}px;
  font-size: ${(props) => props?.theme.width * InputAreaFontSize}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

// Component: SendConfirmCenter
export const SendConfirmCenter = styled.View`
  width: ${(props) => props?.theme.width * 0.9}px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

// Component: SendConfirmCoins
export const SendConfirmCoins = styled.Text`
  font-size: ${(props) => props?.theme.width * InputAreaFontSize}px;
  font-family: 'Bai Jamjuree';
  font-weight: bold;
  color: white;
  text-align: left;
  margin: 0px;
`;

// Component: SendConfirmCurrency
export const SendConfirmCurrency = styled.Text`
  font-size: ${(props) => props?.theme.width * InputAreaFontSize}px;
  font-family: 'Bai Jamjuree';
  font-weight: bold;
  color: #bb9645;
  text-align: left;
  margin: 0px;
`;

// Component: SendConfirmFromAddress
export const SendConfirmFromAddress = styled.Text`
  position: absolute;
  top: ${(props) =>
    props?.theme.height * 0.115 +
    props?.theme.width * TitleFontSize +
    props?.theme.width * DashAreaSize +
    props?.theme.width * InputAreaFontSize}px;
  left: ${(props) => props?.theme.width * 0.15}px;
  color: #bb9645;
  height: ${(props) => props?.theme.width * InputAreaFontSize}px;
  width: ${(props) => props?.theme.width * 0.8}px;
  font-size: ${(props) => props?.theme.width * InputAreaFontSize}px;
  text-align: left;
`;

// Component: SendConfirmFromAddressArea
export const SendConfirmFromAddressArea = styled.View`
  position: absolute;
  top: ${(props) =>
    props?.theme.height * 0.125 +
    props?.theme.width * TitleFontSize +
    props?.theme.width * DashAreaSize +
    props?.theme.width * InputAreaFontSize * 2}px;
  left: ${(props) => props?.theme.width * 0.05}px;
  color: white;
  background-color: rgba(36, 37, 38, 1);
  width: ${(props) => props?.theme.width * 0.9}px;
  height: ${(props) => props?.theme.width * DashAreaSize * 2.5}px;
  font-size: ${(props) => props?.theme.width * InputAreaFontSize}px;
  word-wrap: break-word;
`;

// Component: SendConfirmToAddress
export const SendConfirmToAddress = styled.Text`
  position: absolute;
  top: ${(props) =>
    props?.theme.height * 0.155 +
    props?.theme.width * TitleFontSize +
    props?.theme.width * DashAreaSize * 3.5 +
    props?.theme.width * InputAreaFontSize * 2}px;
  left: ${(props) => props?.theme.width * 0.15}px;
  color: #bb9645;
  height: ${(props) => props?.theme.width * InputAreaFontSize}px;
  width: ${(props) => props?.theme.width * 0.8}px;
  font-size: ${(props) => props?.theme.width * InputAreaFontSize}px;
  text-align: left;
`;

// Component: SendConfirmToAddressArea
export const SendConfirmToAddressArea = styled.View`
  position: absolute;
  top: ${(props) =>
    props?.theme.height * 0.165 +
    props?.theme.width * TitleFontSize +
    props?.theme.width * DashAreaSize * 3.5 +
    props?.theme.width * InputAreaFontSize * 3}px;
  left: ${(props) => props?.theme.width * 0.05}px;
  color: white;
  background-color: rgba(36, 37, 38, 1);
  width: ${(props) => props?.theme.width * 0.9}px;
  height: ${(props) => props?.theme.width * DashAreaSize * 2.5}px;
  font-size: ${(props) => props?.theme.width * InputAreaFontSize}px;
  word-wrap: break-word;
`;

// Component: SendConfirmMemo
export const SendConfirmMemo = styled.Text`
  position: absolute;
  top: ${(props) =>
    props?.theme.height * 0.195 +
    props?.theme.width * TitleFontSize +
    props?.theme.width * DashAreaSize * 6 +
    props?.theme.width * InputAreaFontSize * 3}px;
  left: ${(props) => props?.theme.width * 0.05}px;
  color: #bb9645;
  height: ${(props) => props?.theme.width * InputAreaFontSize}px;
  width: ${(props) => props?.theme.width * 0.9}px;
  font-size: ${(props) => props?.theme.width * InputAreaFontSize}px;
  text-align: left;
`;

// Component: SendConfirmMemoArea
export const SendConfirmMemoArea = styled.View<{ mlength: number }>`
  position: absolute;
  top: ${(props) =>
    props?.theme.height * 0.205 +
    props?.theme.width * TitleFontSize +
    props?.theme.width * DashAreaSize * 6 +
    props?.theme.width * InputAreaFontSize * 4}px;
  left: ${(props) => props?.theme.width * 0.05}px;
  color: white;
  background-color: rgba(36, 37, 38, 1);
  width: ${(props) => props?.theme.width * 0.9}px;
  height: ${(props) =>
    props?.theme.width * DashAreaSize *
    (Math.ceil(props?.mlength / 40) > 0 ? Math.ceil(props?.mlength / 40) : 1)}px;
  font-size: ${(props) => props?.theme.width * InputAreaFontSize}px;
  word-wrap: break-word;
`;

// Component: SendConfirmPasswordSection
export const SendConfirmPasswordSection = styled.View<VisibilityProps>`
  position: absolute;
  top: ${(props) =>
    props?.theme.height * 0.235 +
    props?.theme.width * TitleFontSize +
    props?.theme.width * DashAreaSize * 6 +
    props?.theme.width *
      DashAreaSize *
      (Math.ceil(props?.mlength / 40) > 0 ? Math.ceil(props?.mlength / 40) : 1) +
    props?.theme.width * InputAreaFontSize * 4}px;
  left: 0;
  width: ${(props) => props?.theme.width}px;
  display: ${(props) => (props?.visible ? 'flex' : 'none')};
`;


// Component: SendConfirmButtonSection
export const SendConfirmButtonSection = styled.View<{ visible: boolean; mlength: number }>`
  position: absolute;
  top: ${(props) =>
    props?.theme.height * 0.235 +
    props?.theme.width * TitleFontSize +
    props?.theme.width * DashAreaSize * 6 +
    props?.theme.width * DashAreaSize *
      (Math.ceil(props?.mlength / 40) > 0 ? Math.ceil(props?.mlength / 40) : 1) +
    props?.theme.width * InputAreaFontSize * 4 +
    (props?.visible
      ? props?.theme.width *
        (SectionTitleFontSize +
          DashAreaSize +
          RedFontSize +
          props?.theme.height * 0.04)
      : 0)}px;
  left: 0;
  width: ${(props) => props?.theme.width}px;
  transition: 500ms;
`;

// Component: SendPasswordTitle
export const SendPasswordTitle = styled.Text`
  position: absolute;
  top: 0;
  left: ${(props) => props?.theme.width * 0.05}px;
  color: #bb9645;
  height: ${(props) => props?.theme.width * SectionTitleFontSize}px;
  width: ${(props) => props?.theme.width * 0.9}px;
  font-size: ${(props) => props?.theme.width * SectionTitleFontSize}px;
  text-align: left;
`;

// Component: SendPasswordArea
export const SendPasswordArea = styled.View`
  position: absolute;
  top: ${(props) =>
    props?.theme.height * 0.01 +
    props?.theme.width * SectionTitleFontSize}px;
  left: ${(props) => props?.theme.width * 0.05}px;
  background-color: rgba(187, 150, 69, 0.1);
  width: ${(props) => props?.theme.width * 0.9}px;
  height: ${(props) => props?.theme.width * DashAreaSize}px;
`;

// Component: SendPasswordInput
export const SendPasswordInput = styled.TextInput`
  position: absolute;
  left: 0;
  top: 0;
  color: #ffffff;
  background-color: transparent;
  width: ${(props) => props?.theme.width * 0.9}px;
  height: ${(props) => props?.theme.width * InputAreaSize}px;
  margin: 0px;
  border-width: 0 0 2px 0;
  border-style: dashed;
  border-color: #bb9645;
  font-size: ${(props) => props?.theme.width * InputAreaFontSize}px;
  text-align: center;

  :focus {
    outline: none;
  }
`;

// Component: SendPasswordGradientCapLeft
export const SendPasswordGradientCapLeft = styled.View`
  position: absolute;
  left: 0;
  top: 0;
  background: linear-gradient(90deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  width: ${(props) => props?.theme.width * 0.1}px;
  height: ${(props) => props?.theme.width * DashAreaSize}px;
  z-index: 1;
`;

// Component: SendPasswordGradientCapRight
export const SendPasswordGradientCapRight = styled.View`
  position: absolute;
  right: 0;
  top: 0;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  width: ${(props) => props?.theme.width * 0.1}px;
  height: ${(props) => props?.theme.width * DashAreaSize}px;
  z-index: 1;
`;

// Component: SendPasswordRedText
export const SendPasswordRedText = styled.Text`
  position: absolute;
  top: ${(props) =>
    props?.theme.height * 0.02 +
    props?.theme.width * SectionTitleFontSize +
    props?.theme.width * DashAreaSize}px;
  left: 0;
  height: ${(props) => props?.theme.width * RedFontSize}px;
  width: ${(props) => props?.theme.width}px;
  font-size: ${(props) => props?.theme.width * RedFontSize}px;
  color: rgba(229, 66, 18, 1);
  text-align: center;
`;

// Component: SendConfirmButton
export const SendConfirmButton = styled.TouchableOpacity<{ disabled: boolean }>`
  position: absolute;
  background-color: ${(props) =>
    props?.disabled ? 'rgba(15,16,18,1)' : 'rgba(187,150,69,1)'};
  color: ${(props) => (props?.disabled ? 'rgba(48,49,51,1)' : 'white')};
  font-size: ${(props) => props?.theme.height * 0.025}px;
  width: ${(props) => props?.theme.width * 0.325}px;
  height: ${(props) => props?.theme.height * 0.075}px;
  left: ${(props) =>
    props?.theme.width * 0.7 - props?.theme.width * 0.325 / 2}px;
  top: 0;
  border-radius: ${(props) => props?.theme.height * 0.075 / 2}px;
  border: 0;
  justify-content: center;
  align-items: center;
  transition: 500ms;

  :focus {
    outline: none;
  }
`;

// Component: SendBackButton
export const SendBackButton = styled.TouchableOpacity`
  position: absolute;
  background-color: rgba(48, 49, 51, 1);
  color: white;
  font-size: ${(props) => props?.theme.height * 0.025}px;
  width: ${(props) => props?.theme.width * 0.325}px;
  height: ${(props) => props?.theme.height * 0.075}px;
  left: ${(props) =>
    props?.theme.width * 0.3 - props?.theme.width * 0.325 / 2}px;
  top: 0;
  border-radius: ${(props) => props?.theme.height * 0.075 / 2}px;
  border: 0;
  justify-content: center;
  align-items: center;

  :focus {
    outline: none;
  }
`;

// Component: SendBuildNote
export const SendBuildNote = styled.Text`
  position: absolute;
  top: ${(props) =>
    props?.theme.height * 0.1 + props?.theme.width * TitleFontSize}px;
  left: ${(props) => props?.theme.width * 0.05}px;
  color: #bb9645;
  height: ${(props) => props?.theme.width * InputAreaFontSize}px;
  width: ${(props) => props?.theme.width * 0.9}px;
  font-size: ${(props) => props?.theme.width * InputAreaFontSize}px;
  text-align: center;
`;

// Component: SendEstBuildTime
export const SendEstBuildTime = styled.Text`
  position: absolute;
  top: ${(props) =>
    props?.theme.height * 0.2 + props?.theme.width * TitleFontSize}px;
  left: ${(props) => props?.theme.width * 0.05}px;
  color: #bb9645;
  height: ${(props) => props?.theme.width * InputAreaFontSize}px;
  width: ${(props) => props?.theme.width * 0.9}px;
  font-size: ${(props) => props?.theme.width * InputAreaFontSize}px;
  text-align: left;
`;

// Component: SendActBuildTime
export const SendActBuildTime = styled.Text`
  position: absolute;
  top: ${(props) =>
    props?.theme.height * 0.25 +
    props?.theme.width * TitleFontSize +
    props?.theme.width * InputAreaFontSize}px;
  left: ${(props) => props?.theme.width * 0.05}px;
  color: #bb9645;
  height: ${(props) => props?.theme.width * InputAreaFontSize}px;
  width: ${(props) => props?.theme.width * 0.9}px;
  font-size: ${(props) => props?.theme.width * InputAreaFontSize}px;
  text-align: left;
`;

// Component: SendSpinner
export const SendSpinner = styled.View`
  position: absolute;
  top: ${(props) =>
    props?.theme.height * 0.35 +
    props?.theme.width * TitleFontSize +
    props?.theme.width * InputAreaFontSize * 2}px;
  left: ${(props) => props?.theme.width * 0.05}px;
  width: ${(props) => props?.theme.width * 0.9}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

// Component: SendSummary
export const SendSummary = styled.View`
  position: absolute;
  top: ${(props) =>
    props?.theme.height * 0.1 + props?.theme.width * TitleFontSize}px;
  left: ${(props) => props?.theme.width * 0.05}px;
  width: ${(props) => props?.theme.width * 0.9}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

// Component: SendSummarySent
export const SendSummarySent = styled.Text`
  position: absolute;
  top: 0;
  left: 0;
  color: #bb9645;
  height: ${(props) => props?.theme.width * InputAreaFontSize}px;
  width: ${(props) => props?.theme.width * 0.9}px;
  font-size: ${(props) => props?.theme.width * InputAreaFontSize}px;
  text-align: center;
`;

// Component: SendSummaryAmountArea
export const SendSummaryAmountArea = styled.View`
  position: absolute;
  top: ${(props) =>
    props?.theme.height * 0.02 + props?.theme.width * InputAreaFontSize}px;
  left: 0;
  color: #bb9645;
  height: ${(props) => props?.theme.width * InputAreaFontSize}px;
  width: ${(props) => props?.theme.width * 0.9}px;
  font-size: ${(props) => props?.theme.width * InputAreaFontSize}px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

// Component: SendSummaryAmount
export const SendSummaryAmount = styled.Text`
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  height: ${(props) => props?.theme.width * InputAreaFontSize}px;
  width: ${(props) => props?.theme.width * 0.45}px;
  font-size: ${(props) => props?.theme.width * InputAreaFontSize}px;
  text-align: right;
`;

// Component: SendSummaryAmountCurrency
export const SendSummaryAmountCurrency = styled.Text`
  position: absolute;
  top: 0;
  right: 0;
  color: #bb9645;
  height: ${(props) => props?.theme.width * InputAreaFontSize}px;
  width: ${(props) => props?.theme.width * 0.45}px;
  font-size: ${(props) => props?.theme.width * InputAreaFontSize}px;
  font-weight: bold;
  text-align: left;
`;

// Component: SendSummaryFee
export const SendSummaryFee = styled.Text`
  position: absolute;
  top: ${(props) =>
    props?.theme.height * 0.04 +
    props?.theme.width * InputAreaFontSize * 2}px;
  color: #bb9645;
  height: ${(props) => props?.theme.width * RedFontSize}px;
  font-size: ${(props) => props?.theme.width * RedFontSize}px;
  width: ${(props) => props?.theme.width * 0.9}px;
  text-align: center;
`;

// Component: SendSummaryTo
export const SendSummaryTo = styled.Text`
  position: absolute;
  top: ${(props) =>
    props?.theme.height * 0.06 +
    props?.theme.width * InputAreaFontSize * 2 +
    props?.theme.width * RedFontSize}px;
  color: #bb9645;
  height: ${(props) => props?.theme.width * InputAreaFontSize}px;
  font-size: ${(props) => props?.theme.width * InputAreaFontSize}px;
  width: ${(props) => props?.theme.width * 0.9}px;
  text-align: center;
`;

// Component: SendSummaryToAddress
export const SendSummaryToAddress = styled.Text`
  position: absolute;
  top: ${(props) =>
    props?.theme.height * 0.08 +
    props?.theme.width * InputAreaFontSize * 3 +
    props?.theme.width * RedFontSize}px;
  color: white;
  height: ${(props) => props?.theme.width * InputAreaFontSize}px;
  font-size: ${(props) => props?.theme.width * InputAreaFontSize}px;
  width: ${(props) => props?.theme.width * 0.9}px;
  word-wrap: break-word;
`;

// Component: SendExplorerButton
export const SendExplorerButton = styled.TouchableOpacity`
  position: absolute;
  background-color: grey;
  color: white;
  font-size: ${(props) => props?.theme.height * 0.025}px;
  width: ${(props) => props?.theme.width * 0.5}px;
  height: ${(props) => props?.theme.height * 0.075}px;
  left: ${(props) =>
    props?.theme.width * 0.5 - props?.theme.width * 0.5 / 2}px;
  top: ${(props) => props?.theme.height * 0.525}px;
  border-radius: ${(props) => props?.theme.height * 0.075 / 2}px;
  justify-content: center;
  align-items: center;

  :focus {
    outline: none;
  }
`;

// Component: SendMoreButton
export const SendMoreButton = styled.TouchableOpacity`
  position: absolute;
  background-color: rgba(187, 150, 69, 1);
  color: white;
  font-size: ${(props) => props?.theme.height * 0.025}px;
  width: ${(props) => props?.theme.width * 0.325}px;
  height: ${(props) => props?.theme.height * 0.075}px;
  left: ${(props) =>
    props?.theme.width * 0.7 - props?.theme.width * 0.325 / 2}px;
  top: ${(props) => props?.theme.height * 0.65}px;
  border-radius: ${(props) => props?.theme.height * 0.075 / 2}px;
  justify-content: center;
  align-items: center;

  :focus {
    outline: none;
  }
`;

// Component: SendWalletButton
export const SendWalletButton = styled.TouchableOpacity`
  position: absolute;
  background-color: rgba(48, 49, 51, 1);
  color: white;
  font-size: ${(props) => props?.theme.height * 0.025}px;
  width: ${(props) => props?.theme.width * 0.325}px;
  height: ${(props) => props?.theme.height * 0.075}px;
  left: ${(props) =>
    props?.theme.width * 0.3 - props?.theme.width * 0.325 / 2}px;
  top: ${(props) => props?.theme.height * 0.65}px;
  border-radius: ${(props) => props?.theme.height * 0.075 / 2}px;
  justify-content: center;
  align-items: center;

  :focus {
    outline: none;
  }
`;

// Component: SendFailed
export const SendFailed = styled.ScrollView`
  position: absolute;
  left: ${(props) => props?.theme.width * 0.05}px;
  top: ${(props) =>
    props?.theme.height * 0.075 + props?.theme.width * TitleFontSize}px;
  color: white;
  background-color: rgba(0, 0, 0, 0);
  height: ${(props) =>
    props?.theme.height * 0.6 -
    props?.theme.height * 0.075 -
    props?.theme.width * TitleFontSize}px;
  font-size: ${(props) => props?.theme.width * InputAreaFontSize}px;
  width: ${(props) => props?.theme.width * 0.9}px;
  word-wrap: break-word;
  overscroll-behavior: contain;
`;

// Component: ConfirmPassword
export const ConfirmPassword = styled.Text`
  color: white;
  text-align: center;
  font-size: ${(props) => props?.theme.width * InputAreaFontSize}px;
  opacity: 1;
`;

import LinearGradient from 'react-native-linear-gradient';

// Component: ConfirmPin
export const ConfirmPin = styled.TextInput`
  color: black;
  width: ${(props) => props.theme.width * 0.4}px;
  margin: 0 auto;
  border-bottom-width: 2px;
  border-color: white;
  font-size: ${(props) => props.theme.width * InputAreaFontSize}px;
  opacity: 1;
  text-align: center;
  border-radius: ${(props) => props.theme.width * 0.05}px;
`;  

// Component: LeftGradient
const LeftGradient = (props: { width: number; height: number }) => (
  <LinearGradient
    colors={['rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 0)']}
    style={{
      width: props.width * 0.1,
      height: props.height * DashAreaSize,
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 1,
    }}
  />
);

// Component: RightGradient
const RightGradient = (props: { width: number; height: number }) => (
  <LinearGradient
    colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']}
    style={{
      width: props.width * 0.1,
      height: props.height * DashAreaSize,
      position: 'absolute',
      top: 0,
      right: 0,
      zIndex: 1,
    }}
  />
);

// Component: SendSuccess
export const SendSuccess = styled.View`
  position: absolute;
  top: ${(props) => props?.theme.height * 0.15}px;
  left: ${(props) => props?.theme.width * 0.05}px;
  width: ${(props) => props?.theme.width * 0.9}px;
  background-color: rgba(0, 255, 0, 0.1);
  border-radius: ${(props) => props?.theme.width * 0.05}px;
  padding: ${(props) => props?.theme.width * 0.05}px;
  justify-content: center;
  align-items: center;
`;

// Component: SuccessText
export const SuccessText = styled.Text`
  color: green;
  font-size: ${(props) => props?.theme.width * 0.05}px;
  text-align: center;
`;

// Component: FailureText
export const FailureText = styled.Text`
  color: red;
  font-size: ${(props) => props?.theme.width * 0.05}px;
  text-align: center;
`;

// Component: DynamicHeightView
export const DynamicHeightView = styled.View<{ heightFactor: number }>`
  position: absolute;
  top: ${(props) =>
    props?.theme.height * props?.heightFactor +
    props?.theme.width * TitleFontSize}px;
  left: ${(props) => props?.theme.width * 0.05}px;
  width: ${(props) => props?.theme.width * 0.9}px;
  height: ${(props) =>
    props?.theme.height * 0.2 + props?.theme.width * InputAreaFontSize}px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: ${(props) => props?.theme.width * 0.05}px;
  justify-content: center;
  align-items: center;
`;

// Component: DynamicInputArea
export const DynamicInputArea = styled.TextInput<{ multiline: boolean }>`
  position: absolute;
  left: 0;
  top: 0;
  color: #ffffff;
  background-color: transparent;
  width: ${(props) => props?.theme.width * 0.9}px;
  height: ${(props) =>
    props?.multiline
      ? props?.theme.width * DashAreaSize * 3
      : props?.theme.width * DashAreaSize}px;
  border-width: 0 0 2px 0;
  border-style: dashed;
  border-color: #bb9645;
  font-size: ${(props) => props?.theme.width * InputAreaFontSize}px;
  text-align: center;

  :focus {
    outline: none;
  }
`;

// Component: RetryButton
export const RetryButton = styled.TouchableOpacity`
  position: absolute;
  background-color: rgba(255, 165, 0, 1);
  color: white;
  font-size: ${(props) => props?.theme.height * 0.025}px;
  width: ${(props) => props?.theme.width * 0.3}px;
  height: ${(props) => props?.theme.height * 0.075}px;
  left: ${(props) => props?.theme.width * 0.35}px;
  top: ${(props) => props?.theme.height * 0.7}px;
  border-radius: ${(props) => props?.theme.height * 0.075 / 2}px;
  justify-content: center;
  align-items: center;
`;

// Component: RetryButtonText
export const RetryButtonText = styled.Text`
  color: white;
  font-size: ${(props) => props?.theme.width * 0.04}px;
  text-align: center;
`;

// Component: LoadingSpinner
export const LoadingSpinner = styled.View`
  position: absolute;
  top: ${(props) =>
    props?.theme.height * 0.3 + props?.theme.width * TitleFontSize}px;
  left: ${(props) => props?.theme.width * 0.05}px;
  width: ${(props) => props?.theme.width * 0.9}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

import { Animated } from 'react-native';

// Component: AnimatedView
export const AnimatedView = styled(Animated.View)`
  position: absolute;
  top: ${(props) => props?.theme.height * 0.1}px;
  left: ${(props) => props?.theme.width * 0.05}px;
  width: ${(props) => props?.theme.width * 0.9}px;
  height: ${(props) => props?.theme.height * 0.2}px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: ${(props) => props?.theme.width * 0.05}px;
  justify-content: center;
  align-items: center;
`;

// Helper function: calculateOffset
const calculateOffset = (theme: any, factors: number[]): number => {
  return factors.reduce((total, factor) => total + theme.width * factor, 0);
};

// Component: ErrorSection
export const ErrorSection = styled.Text`
  position: absolute;
  top: ${(props) => calculateOffset(props?.theme, [0.25, TitleFontSize, InputAreaFontSize * 2])}px;
  left: ${(props) => props?.theme.width * 0.05}px;
  color: red;
  font-size: ${(props) => props?.theme.width * RedFontSize}px;
  width: ${(props) => props?.theme.width * 0.9}px;
  text-align: center;
`;

// Component: SuccessSection
export const SuccessSection = styled.View`
  position: absolute;
  top: ${(props) => props?.theme.height * 0.15}px;
  left: ${(props) => props?.theme.width * 0.05}px;
  width: ${(props) => props?.theme.width * 0.9}px;
  background-color: rgba(0, 255, 0, 0.1);
  border-radius: ${(props) => props?.theme.width * 0.05}px;
  padding: ${(props) => props?.theme.width * 0.05}px;
  justify-content: center;
  align-items: center;
`;

// Component: SuccessTextView
export const SuccessTextView = styled.Text`
  color: green;
  font-size: ${(props) => props?.theme.width * 0.05}px;
  text-align: center;
`;

// Component: FailureSection
export const FailureSection = styled.View`
  position: absolute;
  top: ${(props) => props?.theme.height * 0.15}px;
  left: ${(props) => props?.theme.width * 0.05}px;
  width: ${(props) => props?.theme.width * 0.9}px;
  background-color: rgba(255, 0, 0, 0.1);
  border-radius: ${(props) => props?.theme.width * 0.05}px;
  padding: ${(props) => props?.theme.width * 0.05}px;
  justify-content: center;
  align-items: center;
`;

// Component: FailureTextView
export const FailureTextView = styled.Text`
  color: red;
  font-size: ${(props) => props?.theme.width * 0.05}px;
  text-align: center;
`;

// Define constants
const ButtonWidth = 0.325; // Adjust based on design requirements
const ButtonHeight = 0.075; // Adjust based on design requirements

// Component: StateDrivenButton
export const StateDrivenButton = styled.TouchableOpacity<{ disabled: boolean }>`
  position: absolute;
  background-color: ${(props) => (props?.disabled ? '#A9A9A9' : '#bb9645')};
  color: white;
  font-size: ${(props) => props?.theme.height * 0.025}px;
  width: ${(props) => props?.theme.width * ButtonWidth}px;
  height: ${(props) => props?.theme.height * ButtonHeight}px;
  left: ${(props) => props?.theme.width * 0.5 - props?.theme.width * ButtonWidth / 2}px;
  top: ${(props) =>
    calculateOffset(props?.theme, [0.195, TitleFontSize, DashAreaSize])}px;
  border-radius: ${(props) => props?.theme.height * ButtonHeight / 2}px;
  justify-content: center;
  align-items: center;

  :focus {
    outline: none;
  }
`;


// Component: InteractiveInput
export const InteractiveInput = styled.TextInput<{ length: number }>`
  position: absolute;
  left: 0;
  top: 0;
  color: #ffffff;
  background-color: transparent;
  width: ${(props) => props?.theme.width * 0.9}px;
  height: ${(props) =>
    props?.theme.width * InputAreaSize +
    props?.theme.width * MemoInput *
      (Math.ceil(props?.length / 35) > 0 ? Math.ceil(props?.length / 35) : 1)}px;
  border-width: 0 0 2px 0;
  border-style: dashed;
  border-color: #bb9645;
  font-size: ${(props) => props?.theme.width * InputAreaFontSize}px;
  text-align: center;

  :focus {
    outline: none;
  }
`;

// Component: ErrorMessageSection
export const ErrorMessageSection = styled.Text`
  position: absolute;
  top: ${(props) =>
    calculateOffset(props?.theme, [0.25, TitleFontSize, InputAreaFontSize * 2])}px;
  left: ${(props) => props?.theme.width * 0.05}px;
  color: red;
  font-size: ${(props) => props?.theme.width * RedFontSize}px;
  width: ${(props) => props?.theme.width * 0.9}px;
  text-align: center;
`;

// Component: AnimatedSuccessView
export const AnimatedSuccessView = styled(Animated.View)`
  position: absolute;
  top: ${(props) => props?.theme.height * 0.15}px;
  left: ${(props) => props?.theme.width * 0.05}px;
  width: ${(props) => props?.theme.width * 0.9}px;
  height: ${(props) => props?.theme.height * 0.2}px;
  background-color: rgba(0, 255, 0, 0.1);
  border-radius: ${(props) => props?.theme.width * 0.05}px;
  justify-content: center;
  align-items: center;
`;

// Component: SuccessIcon
export const SuccessIcon = styled.View`
  position: absolute;
  top: ${(props) => props?.theme.height * 0.05}px;
  left: ${(props) => props?.theme.width * 0.05}px;
  width: ${(props) => props?.theme.width * 0.8}px;
  height: ${(props) => props?.theme.height * 0.2}px;
  background-color: rgba(0, 255, 0, 0.5);
  border-radius: ${(props) => props?.theme.width * 0.4}px;
  justify-content: center;
  align-items: center;
`;

// Component: ErrorIcon
export const ErrorIcon = styled.View`
  position: absolute;
  top: ${(props) => props?.theme.height * 0.05}px;
  left: ${(props) => props?.theme.width * 0.05}px;
  width: ${(props) => props?.theme.width * 0.8}px;
  height: ${(props) => props?.theme.height * 0.2}px;
  background-color: rgba(255, 0, 0, 0.5);
  border-radius: ${(props) => props?.theme.width * 0.4}px;
  justify-content: center;
  align-items: center;
`;

// Component: Loader
export const Loader = styled.ActivityIndicator`
  position: absolute;
  top: ${(props) => props?.theme.height * 0.3}px;
  left: ${(props) => props?.theme.width * 0.5 - props?.theme.width * 0.05}px;
  width: ${(props) => props?.theme.width * 0.1}px;
  height: ${(props) => props?.theme.height * 0.1}px;
`;

// Component: DynamicMemoContainer
export const DynamicMemoContainer = styled.View`
  position: absolute;
  top: ${(props) => props?.theme.height * 0.25}px;
  left: ${(props) => props?.theme.width * 0.05}px;
  width: ${(props) => props?.theme.width * 0.9}px;
  height: ${(props) => props?.theme.height * 0.3}px;
  background-color: rgba(187, 150, 69, 0.1);
  border-radius: ${(props) => props?.theme.width * 0.05}px;
  padding: ${(props) => props?.theme.width * 0.05}px;
`;

// Component: MemoText
export const MemoText = styled.TextInput`
  position: absolute;
  left: 0;
  top: 0;
  color: #ffffff;
  background-color: transparent;
  width: ${(props) => props?.theme.width * 0.9}px;
  height: ${(props) => props?.theme.height * 0.25}px;
  font-size: ${(props) => props?.theme.width * InputAreaFontSize}px;
  text-align: left;
  border-width: 0;

  :focus {
    outline: none;
  }
`;

// Component: CustomButton
export const CustomButton = styled.TouchableOpacity`
  position: absolute;
  background-color: rgba(255, 165, 0, 1);
  color: white;
  font-size: ${(props) => props?.theme.height * 0.025}px;
  width: ${(props) => props?.theme.width * 0.3}px;
  height: ${(props) => props?.theme.height * 0.075}px;
  left: ${(props) => props?.theme.width * 0.35}px;
  top: ${(props) => props?.theme.height * 0.7}px;
  border-radius: ${(props) => props?.theme.height * 0.075 / 2}px;
  justify-content: center;
  align-items: center;

  :focus {
    outline: none;
  }
`;

// Component: ButtonText
export const ButtonText = styled.Text`
  color: white;
  font-size: ${(props) => props?.theme.width * 0.04}px;
  text-align: center;
`;


// Component: SendSuccessContainer
export const SendSuccessContainer = styled.View`
  position: absolute;
  top: ${(props) => props?.theme.height * 0.15}px;
  left: ${(props) => props?.theme.width * 0.05}px;
  width: ${(props) => props?.theme.width * 0.9}px;
  background-color: rgba(0, 255, 0, 0.1);
  border-radius: ${(props) => props?.theme.width * 0.05}px;
  padding: ${(props) => props?.theme.width * 0.05}px;
  justify-content: center;
  align-items: center;
`;

// Component: SuccessMessageText
export const SuccessMessageText = styled.Text`
  color: green;
  font-size: ${(props) => props?.theme.width * 0.05}px;
  text-align: center;
`;

// Component: FailureContainer
export const FailureContainer = styled.View`
  position: absolute;
  top: ${(props) => props?.theme.height * 0.15}px;
  left: ${(props) => props?.theme.width * 0.05}px;
  width: ${(props) => props?.theme.width * 0.9}px;
  background-color: rgba(255, 0, 0, 0.1);
  border-radius: ${(props) => props?.theme.width * 0.05}px;
  padding: ${(props) => props?.theme.width * 0.05}px;
  justify-content: center;
  align-items: center;
`;

// Component: FailureMessageText
export const FailureMessageText = styled.Text`
  color: red;
  font-size: ${(props) => props?.theme.width * 0.05}px;
  text-align: center;
`;

// Component: LoadingContainer
export const LoadingContainer = styled.View`
  position: absolute;
  top: ${(props) => props?.theme.height * 0.3}px;
  left: ${(props) => props?.theme.width * 0.05}px;
  width: ${(props) => props?.theme.width * 0.9}px;
  height: ${(props) => props?.theme.height * 0.1}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Define default values for fallback if the theme is not provided
const defaultWidth = 100; // Replace with appropriate width in pixels
const defaultHeight = 100; // Replace with appropriate height in pixels

// Wrapper for styling the spinner (final version)
const SpinnerWrapper = styled.View`
  position: absolute;
  top: ${(props) => (props.theme?.height || defaultHeight) * 0.4}px;
  left: ${(props) => (props.theme?.width || defaultWidth) * 0.35}px;
  width: ${(props) => (props.theme?.width || defaultWidth) * 0.3}px;
  height: ${(props) => (props.theme?.width || defaultWidth) * 0.3}px;
  justify-content: center;
  align-items: center;
`;

// Spinner Component
const SpinnerComponent: React.FC = () => (
  <SpinnerWrapper>
    <ActivityIndicator size="large" color="#bb9645" />
  </SpinnerWrapper>
);

//export default SpinnerComponent;


// Component: ConfirmButton
export const ConfirmButton = styled.TouchableOpacity<{ disabled: boolean }>`
  position: absolute;
  background-color: ${(props) =>
    props?.disabled ? 'rgba(15, 16, 18, 1)' : 'rgba(187, 150, 69, 1)'};
  color: ${(props) => (props?.disabled ? 'rgba(48, 49, 51, 1)' : 'white')};
  font-size: ${(props) => props?.theme.height * 0.025}px;
  width: ${(props) => props?.theme.width * 0.325}px;
  height: ${(props) => props?.theme.height * 0.075}px;
  left: ${(props) =>
    props?.theme.width * 0.7 - props?.theme.width * 0.325 / 2}px;
  top: 0;
  border-radius: ${(props) => props?.theme.height * 0.075 / 2}px;
  justify-content: center;
  align-items: center;

  :focus {
    outline: none;
  }
`;

// Component: ConfirmButtonText
export const ConfirmButtonText = styled.Text`
  color: ${(props) => (props?.disabled ? '#303133' : 'white')};
  font-size: ${(props) => props?.theme.width * 0.04}px;
  text-align: center;
`;

// Component: AnimatedLoaderContainer
export const AnimatedLoaderContainer = styled(Animated.View)`
  position: absolute;
  top: ${(props) => props?.theme.height * 0.25}px;
  left: ${(props) => props?.theme.width * 0.05}px;
  width: ${(props) => props?.theme.width * 0.9}px;
  height: ${(props) => props?.theme.height * 0.15}px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: ${(props) => props?.theme.width * 0.05}px;
  justify-content: center;
  align-items: center;
`;

// Component: GradientOverlay
export const GradientOverlay = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props) => props?.theme.width}px;
  height: ${(props) => props?.theme.height * 0.15}px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
  z-index: 1;
`;

// Component: DynamicHeightSection
export const DynamicHeightSection = styled.View<{ dynamicHeight: number }>`
  position: absolute;
  top: ${(props) => props?.theme.height * 0.25}px;
  left: ${(props) => props?.theme.width * 0.05}px;
  width: ${(props) => props?.theme.width * 0.9}px;
  height: ${(props) => props?.dynamicHeight}px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: ${(props) => props?.theme.width * 0.05}px;
`;

// Component: AnimatedGradientView
export const AnimatedGradientView = styled(Animated.View)`
  position: absolute;
  top: ${(props) => props?.theme.height * 0.25}px;
  left: ${(props) => props?.theme.width * 0.05}px;
  width: ${(props) => props?.theme.width * 0.9}px;
  height: ${(props) => props?.theme.height * 0.1}px;
  background: linear-gradient(
    90deg,
    rgba(187, 150, 69, 0.5),
    rgba(255, 255, 255, 0.1)
  );
  border-radius: ${(props) => props?.theme.width * 0.05}px;
`;

// Component: AnimatedProgressBar
export const AnimatedProgressBar = styled(Animated.View)`
  position: absolute;
  top: ${(props) => props?.theme.height * 0.3}px;
  left: ${(props) => props?.theme.width * 0.1}px;
  width: ${(props) => props?.theme.width * 0.8}px;
  height: ${(props) => props?.theme.height * 0.02}px;
  background-color: rgba(187, 150, 69, 0.5);
  border-radius: ${(props) => props?.theme.height * 0.01}px;
`;

// Component: ProgressBarBackground
export const ProgressBarBackground = styled.View`
  position: absolute;
  top: ${(props) => props?.theme.height * 0.3}px;
  left: ${(props) => props?.theme.width * 0.1}px;
  width: ${(props) => props?.theme.width * 0.8}px;
  height: ${(props) => props?.theme.height * 0.02}px;
  background-color: rgba(48, 49, 51, 0.5);
  border-radius: ${(props) => props?.theme.height * 0.01}px;
`;

// Component: TestWrapper
export const TestWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.1);
`;

// Component: CustomTextComponent
export const CustomTextComponent = styled.Text`
  color: #ffffff;
  font-size: ${(props) => props?.theme.width * 0.05}px;
  text-align: center;
`;

// Component: SuccessContainer
export const SuccessContainer = styled.View`
  position: absolute;
  top: ${(props) => props?.theme.height * 0.2}px;
  left: ${(props) => props?.theme.width * 0.1}px;
  width: ${(props) => props?.theme.width * 0.8}px;
  height: ${(props) => props?.theme.height * 0.2}px;
  background-color: rgba(0, 255, 0, 0.2);
  border-radius: ${(props) => props?.theme.width * 0.05}px;
  justify-content: center;
  align-items: center;
`;

// Component: ErrorContainer
export const ErrorContainer = styled.View`
  position: absolute;
  top: ${(props) => props?.theme.height * 0.2}px;
  left: ${(props) => props?.theme.width * 0.1}px;
  width: ${(props) => props?.theme.width * 0.8}px;
  height: ${(props) => props?.theme.height * 0.2}px;
  background-color: rgba(255, 0, 0, 0.2);
  border-radius: ${(props) => props?.theme.width * 0.05}px;
  justify-content: center;
  align-items: center;
`;

// Define the props interface
interface CustomMessageTextProps {
  color?: string; // Optional color property
  theme: {
    width: number;
  };
}

// Apply the interface to the styled component
export const CustomMessageText = styled.Text<CustomMessageTextProps>`
  color: ${(props) => props.color || '#fff'};
  font-size: ${(props) => props.theme.width * 0.04}px;
  text-align: center;
`;

// Component: TestButtonWrapper
export const TestButtonWrapper = styled.TouchableOpacity`
  position: absolute;
  top: ${(props) => props?.theme.height * 0.35}px;
  left: ${(props) => props?.theme.width * 0.3}px;
  width: ${(props) => props?.theme.width * 0.4}px;
  height: ${(props) => props?.theme.height * 0.075}px;
  background-color: ${(props) => props?.theme.primaryColor || '#bb9645'};
  border-radius: ${(props) => props?.theme.height * 0.0375}px;
  justify-content: center;
  align-items: center;

  :focus {
    outline: none;
  }
`;

// Component: TestButtonText
export const TestButtonText = styled.Text`
  color: white;
  font-size: ${(props) => props?.theme.width * 0.035}px;
  text-align: center;
`;

// Component: GradientWrapper
export const GradientWrapper = styled.View`
  position: absolute;
  top: ${(props) => props?.theme.height * 0.4}px;
  left: ${(props) => props?.theme.width * 0.05}px;
  width: ${(props) => props?.theme.width * 0.9}px;
  height: ${(props) => props?.theme.height * 0.1}px;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
  z-index: 10;
  border-radius: ${(props) => props?.theme.width * 0.05}px;
`;

// Component: LargeTextContainer
export const LargeTextContainer = styled.View`
  position: absolute;
  top: ${(props) => props?.theme.height * 0.45}px;
  left: ${(props) => props?.theme.width * 0.05}px;
  width: ${(props) => props?.theme.width * 0.9}px;
  height: ${(props) => props?.theme.height * 0.15}px;
  justify-content: center;
  align-items: center;
  background-color: rgba(48, 49, 51, 0.8);
  border-radius: ${(props) => props?.theme.width * 0.05}px;
`;

// Component: LargeText
export const LargeText = styled.Text`
  color: white;
  font-size: ${(props) => props?.theme.width * 0.045}px;
  text-align: center;
`;

// Component: NotificationContainer
export const NotificationContainer = styled.View`
  position: absolute;
  bottom: ${(props) => props?.theme.height * 0.1}px;
  left: ${(props) => props?.theme.width * 0.1}px;
  width: ${(props) => props?.theme.width * 0.8}px;
  height: ${(props) => props?.theme.height * 0.1}px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: ${(props) => props?.theme.width * 0.05}px;
  justify-content: center;
  align-items: center;
`;

// Component: NotificationText
export const NotificationText = styled.Text`
  color: #fff;
  font-size: ${(props) => props?.theme.width * 0.04}px;
  text-align: center;
`;

// Component: Divider
export const Divider = styled.View`
  height: ${(props) => props?.theme.height * 0.001}px;
  width: ${(props) => props?.theme.width * 0.8}px;
  background-color: rgba(187, 150, 69, 0.5);
  align-self: center;
`;

// Component: CardContainer
export const CardContainer = styled.View`
  position: relative;
  top: ${(props) => props?.theme.height * 0.2}px;
  left: ${(props) => props?.theme.width * 0.05}px;
  width: ${(props) => props?.theme.width * 0.9}px;
  background-color: rgba(48, 49, 51, 0.9);
  border-radius: ${(props) => props?.theme.width * 0.05}px;
  padding: ${(props) => props?.theme.width * 0.05}px;
`;

// Component: CardTitle
export const CardTitle = styled.Text`
  color: white;
  font-size: ${(props) => props?.theme.width * 0.05}px;
  font-weight: bold;
  margin-bottom: ${(props) => props?.theme.width * 0.02}px;
`;

// Component: CardDescription
export const CardDescription = styled.Text`
  color: #bbb;
  font-size: ${(props) => props?.theme.width * 0.04}px;
  line-height: ${(props) => props?.theme.width * 0.05}px;
`;

// Component: InputWrapper
export const InputWrapper = styled.View`
  margin-top: ${(props) => props?.theme.height * 0.02}px;
  width: ${(props) => props?.theme.width * 0.8}px;
  align-self: center;
`;

// Component: TextInputField
export const TextInputField = styled.TextInput`
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(187, 150, 69, 0.8);
  border-radius: ${(props) => props?.theme.height * 0.025}px;
  padding: ${(props) => props?.theme.height * 0.02}px;
  color: white;
  font-size: ${(props) => props?.theme.width * 0.04}px;

  :focus {
    outline: none;
  }
`;

// Component: SubmitButton
export const SubmitButton = styled.TouchableOpacity`
  background-color: rgba(187, 150, 69, 1);
  margin-top: ${(props) => props?.theme.height * 0.02}px;
  width: ${(props) => props?.theme.width * 0.6}px;
  height: ${(props) => props?.theme.height * 0.075}px;
  align-self: center;
  justify-content: center;
  align-items: center;
  border-radius: ${(props) => props?.theme.height * 0.0375}px;
`;

// Component: SubmitButtonText
export const SubmitButtonText = styled.Text`
  color: white;
  font-size: ${(props) => props?.theme.width * 0.045}px;
  text-align: center;
`;

// Component: FooterWrapper
export const FooterWrapper = styled.View`
  position: absolute;
  bottom: ${(props) => props?.theme.height * 0.05}px;
  width: ${(props) => props?.theme.width}px;
  justify-content: center;
  align-items: center;
`;

// Component: FooterButton
export const FooterButton = styled.TouchableOpacity`
  background-color: ${(props) => (props?.disabled ? '#A9A9A9' : '#bb9645')};
  width: ${(props) => props?.theme.width * 0.4}px;
  height: ${(props) => props?.theme.height * 0.075}px;
  border-radius: ${(props) => props?.theme.height * 0.0375}px;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props?.theme.height * 0.01}px;
`;

// Component: FooterButtonText
export const FooterButtonText = styled.Text`
  color: ${(props) => (props?.disabled ? '#505050' : 'white')};
  font-size: ${(props) => props?.theme.width * 0.04}px;
  text-align: center;
`;

// Component: ErrorOverlay
export const ErrorOverlay = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props) => props?.theme.width}px;
  height: ${(props) => props?.theme.height}px;
  background-color: rgba(0, 0, 0, 0.6);
  justify-content: center;
  align-items: center;
`;

// Component: ErrorOverlayText
export const ErrorOverlayText = styled.Text`
  color: red;
  font-size: ${(props) => props?.theme.width * 0.05}px;
  text-align: center;
`;

// Component: SpinnerWrapper
import { ActivityIndicator } from 'react-native';

// Spinner component with customizable size and color
export const Spinner = styled(ActivityIndicator).attrs((props) => ({
  size: 'large',
  color: props?.theme.primaryColor || '#bb9645',
}))``;


// Component: ModalWrapper
export const ModalWrapper = styled.Modal`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`;

// Component: ModalContent
export const ModalContent = styled.View`
  width: ${(props) => props?.theme.width * 0.8}px;
  background-color: rgba(48, 49, 51, 0.95);
  border-radius: ${(props) => props?.theme.width * 0.05}px;
  padding: ${(props) => props?.theme.width * 0.05}px;
`;

// Component: ModalTitle
export const ModalTitle = styled.Text`
  font-size: ${(props) => props?.theme.width * 0.05}px;
  font-weight: bold;
  color: white;
  margin-bottom: ${(props) => props?.theme.width * 0.02}px;
`;

// Component: ModalMessage
export const ModalMessage = styled.Text`
  font-size: ${(props) => props?.theme.width * 0.04}px;
  color: #bbb;
  margin-bottom: ${(props) => props?.theme.width * 0.05}px;
`;

// Component: ModalButton
export const ModalButton = styled.TouchableOpacity`
  background-color: rgba(187, 150, 69, 1);
  width: ${(props) => props?.theme.width * 0.6}px;
  height: ${(props) => props?.theme.height * 0.075}px;
  align-self: center;
  justify-content: center;
  align-items: center;
  border-radius: ${(props) => props?.theme.height * 0.0375}px;
`;

// Component: ModalButtonText
export const ModalButtonText = styled.Text`
  color: white;
  font-size: ${(props) => props?.theme.width * 0.045}px;
  text-align: center;
`;

// Component: Overlay
export const Overlay = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props) => props?.theme.width}px;
  height: ${(props) => props?.theme.height}px;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

// Component: OverlayContent
export const OverlayContent = styled.View`
  width: ${(props) => props?.theme.width * 0.7}px;
  background-color: white;
  border-radius: ${(props) => props?.theme.width * 0.05}px;
  padding: ${(props) => props?.theme.width * 0.04}px;
  align-items: center;
`;

// Component: OverlayTitle
export const OverlayTitle = styled.Text`
  font-size: ${(props) => props?.theme.width * 0.05}px;
  font-weight: bold;
  color: black;
  margin-bottom: ${(props) => props?.theme.width * 0.02}px;
`;

// Component: OverlayMessage
export const OverlayMessage = styled.Text`
  font-size: ${(props) => props?.theme.width * 0.04}px;
  color: #333;
  text-align: center;
  margin-bottom: ${(props) => props?.theme.width * 0.05}px;
`;

// Component: OverlayButton
export const OverlayButton = styled.TouchableOpacity`
  background-color: ${(props) => props?.theme.primaryColor || '#bb9645'};
  width: ${(props) => props?.theme.width * 0.5}px;
  height: ${(props) => props?.theme.height * 0.07}px;
  justify-content: center;
  align-items: center;
  border-radius: ${(props) => props?.theme.height * 0.035}px;
`;

// Component: OverlayButtonText
export const OverlayButtonText = styled.Text`
  color: white;
  font-size: ${(props) => props?.theme.width * 0.04}px;
  text-align: center;
`;

// Props interface
interface SendProps {
  onSend: () => void; // Callback function when the button is pressed
  disabled?: boolean; // Whether the button is disabled
  visible?: boolean; // Whether the component is visible
  mlength?: number; // Message length
  loading?: boolean; // Whether the loading spinner should show
  message?: string; // Message text
  errorMessage?: string; // Error message text
}

// Add an interface for ContainerProps
interface ContainerProps {
  visible: boolean;
}

// Update the styled component
const Container = styled.View<ContainerProps>`
  position: relative;
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

import { View } from 'react-native';
import { Text } from 'react-native';
import { Button } from 'react-native';
import { StyleSheet } from 'react-native';


const Send: React.FC<SendProps> = ({
  visible = true,
  onSend,
  disabled = false,
  mlength = 0,
  message = '',
  errorMessage = '',
  loading = false,
}) => {
  if (!visible) return null;

  return (
    <View style={styles.container} testID="container">
      {/* Spinner */}
      {loading && (
        <View style={styles.spinnerWrapper} testID="spinner">
          <ActivityIndicator size="large" color="#bb9645" />
        </View>
      )}

      {/* Message Text */}
      {message && (
        <Text style={styles.message} testID="message-text">
          {message}
        </Text>
      )}

      {/* Error Message */}
      {errorMessage && (
        <Text style={styles.errorMessage} testID="error-message">
          {errorMessage}
        </Text>
      )}

      {/* Send Button */}
      <Button
        title="Send"
        testID="send-button"
        onPress={onSend}
        disabled={disabled}
        color={disabled ? '#A9A9A9' : '#bb9645'} // Change button color if disabled
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  spinnerWrapper: {
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  errorMessage: {
    fontSize: 14,
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default Send;

