// src/components/reindex.tsx

import React from 'react';
import styled from 'styled-components/native';

// Constants
const TitleFontSize = 1.5 / 21;
const SectionTitleFontSize = 1.5 / 36;
const RedFontSize = 1.5 / 52;
const DashAreaSize = 1.5 / 18;
const InputAreaSize = 1.5 / 24;
const InputAreaFontSize = 1.5 / 36;

// Main Container
interface ReindexDivProps {
  visible: boolean;
}

export const ReindexDiv = styled.View<ReindexDivProps>`
  position: absolute;
  top: 0;
  left: 0;
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  transition: 500ms;
`;

export const ReindexSectionOverscroll = styled.ScrollView`
  position: absolute;
  top: ${(props) => props.theme.height * 0.0125}px;
  left: 0;
  height: ${(props) => props.theme.height * 0.975}px;
  width: ${(props) => props.theme.width}px;
  overscroll-behavior: contain;
`;

interface ReindexSectionProps {
  visible: boolean;
}

export const ReindexSection = styled.View<ReindexSectionProps>`
  position: absolute;
  top: 0;
  left: 0;
  height: ${(props) => props.theme.height * 0.875}px;
  width: ${(props) => props.theme.width}px;
  display: ${(props) => (props.visible ? 'flex' : 'none')};
`;

export const ReindexTitle = styled.Text`
  position: absolute;
  top: ${(props) => props.theme.height * 0.05}px;
  left: 0;
  color: #bb9645;
  height: ${(props) => props.theme.width * TitleFontSize}px;
  width: ${(props) => props.theme.width}px;
  font-family: 'Bai Jamjuree';
  font-weight: bold;
  font-size: ${(props) => props.theme.width * TitleFontSize}px;
  text-align: center;
`;

export const ReindexLoader = styled.View`
  position: absolute;
  left: ${(props) => props.theme.width * 0.5}px;
  align-items: center;
`;

export const ReindexPWArea = styled.View`
  position: absolute;
  top: ${(props) =>
    props.theme.height * 0.1 +
    props.theme.width * TitleFontSize +
    props.theme.width * SectionTitleFontSize}px;
  left: ${(props) => props.theme.width * 0.05}px;
  background-color: rgba(187, 150, 69, 0.1);
  width: ${(props) => props.theme.width * 0.9}px;
  height: ${(props) => props.theme.width * DashAreaSize}px;
`;

export const ReindexPWInput = styled.TextInput`
  position: absolute;
  left: 0;
  top: 0;
  color: #ffffff;
  background-color: transparent;
  width: ${(props) => props.theme.width * 0.9}px;
  height: ${(props) => props.theme.width * InputAreaSize}px;
  border-width: 0 0 2px 0;
  border-style: dashed;
  border-color: #bb9645;
  font-size: ${(props) => props.theme.width * InputAreaFontSize}px;
  text-align: center;
`;

export const ReindexPWGradientCapLeft = styled.View`
  position: absolute;
  left: 0;
  top: 0;
  background: linear-gradient(90deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  width: ${(props) => props.theme.width * 0.1}px;
  height: ${(props) => props.theme.width * DashAreaSize}px;
`;

export const ReindexPWGradientCapRight = styled.View`
  position: absolute;
  right: 0;
  top: 0;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  width: ${(props) => props.theme.width * 0.1}px;
  height: ${(props) => props.theme.width * DashAreaSize}px;
`;

export const ReindexNote1 = styled.Text`
  position: absolute;
  color: #bb9645;
  width: ${(props) => props.theme.width * 0.8}px;
  font-size: ${(props) => props.theme.width * RedFontSize}px;
  left: ${(props) => props.theme.width * 0.1}px;
  top: ${(props) =>
    props.theme.height * 0.12 +
    props.theme.width * TitleFontSize +
    props.theme.width * SectionTitleFontSize +
    props.theme.width * DashAreaSize}px;
  text-align: center;
`;

export const ReindexFirstKnownButton = styled.TouchableOpacity`
  position: absolute;
  background-color: transparent;
  width: ${(props) => props.theme.height * 0.055}px;
  height: ${(props) => props.theme.height * 0.055}px;
  left: ${(props) => props.theme.width * 0.4}px;
  top: ${(props) =>
    props.theme.height * 0.155 +
    props.theme.width * TitleFontSize +
    props.theme.width * SectionTitleFontSize +
    props.theme.width * DashAreaSize}px;
  border-radius: ${(props) => props.theme.height * 0.0275}px;
  justify-content: center;
  align-items: center;
`;

export const ReindexBackButton = styled.TouchableOpacity`
  position: absolute;
  background-color: #bb9645;
  width: ${(props) => props.theme.width * 0.325}px;
  height: ${(props) => props.theme.height * 0.075}px;
  left: ${(props) => props.theme.width * 0.5375}px;
  top: ${(props) =>
    props.theme.height * 0.225 +
    props.theme.width * TitleFontSize +
    props.theme.width * SectionTitleFontSize +
    props.theme.width * DashAreaSize}px;
  border-radius: ${(props) => props.theme.height * 0.0375}px;
  justify-content: center;
  align-items: center;
`;

export const ReindexQRTitle = styled.Text`
  position: absolute;
  top: ${(props) =>
    props.theme.height * 0.2225 +
    props.theme.width * TitleFontSize +
    props.theme.width * SectionTitleFontSize +
    props.theme.width * DashAreaSize}px;
  left: ${(props) => props.theme.width * 0.1}px
   ::contentReference[oaicite:0]{index=0}
     color: #bb9645;
  height: ${(props) => props.theme.width * SectionTitleFontSize}px;
  width: ${(props) => props.theme.width * 0.8}px;
  font-size: ${(props) => props.theme.width * SectionTitleFontSize}px;
  text-align: center;
`;

export const ReindexQRBase = styled.View`
  position: absolute;
  left: ${(props) => props.theme.width * 0.05}px;
  top: ${(props) =>
    props.theme.height * 0.2525 +
    props.theme.width * TitleFontSize +
    props.theme.width * SectionTitleFontSize * 2 +
    props.theme.width * DashAreaSize}px;
  width: ${(props) => props.theme.width * 0.9}px;
  height: ${(props) => props.theme.width * 0.9}px;
`;

export const ReindexQR = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props) => props.theme.width * 0.9}px;
  height: ${(props) => props.theme.width * 0.9}px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ReindexFullButton = styled.TouchableOpacity`
  position: absolute;
  background-color: transparent;
  width: ${(props) => props.theme.height * 0.055}px;
  height: ${(props) => props.theme.height * 0.055}px;
  left: ${(props) => props.theme.width * 0.4}px;
  top: ${(props) =>
    props.theme.height * 0.1905 +
    props.theme.width * TitleFontSize +
    props.theme.width * SectionTitleFontSize +
    props.theme.width * DashAreaSize}px;
  border-radius: ${(props) => props.theme.height * 0.0275}px;
  justify-content: center;
  align-items: center;
`;

export const ReindexArea = styled.View`
  position: absolute;
  top: ${(props) =>
    props.theme.height * 0.1 +
    props.theme.width * TitleFontSize +
    props.theme.width * SectionTitleFontSize}px;
  left: ${(props) => props.theme.width * 0.05}px;
  background-color: rgba(187, 150, 69, 0.1);
  width: ${(props) => props.theme.width * 0.9}px;
  height: ${(props) =>
    props.theme.width * ((InputAreaSize * 8.25) + DashAreaSize - InputAreaSize)}px;
`;

export const ReindexInput = styled.TextInput`
  position: absolute;
  left: 0;
  top: 0;
  color: #ffffff;
  background-color: transparent;
  width: ${(props) => props.theme.width * 0.9}px;
  height: ${(props) => props.theme.width * InputAreaSize * 8.25}px;
  margin: 0px;
  border-width: 0 0 2px 0;
  border-style: dashed;
  border-color: #bb9645;
  font-size: ${(props) => props.theme.width * InputAreaFontSize}px;
  text-align: center;
  word-wrap: break-word;
`;

export const ReindexQRTitleFull = styled.Text`
  position: absolute;
  top: ${(props) =>
    props.theme.height * 0.2225 +
    props.theme.width * TitleFontSize +
    props.theme.width * SectionTitleFontSize +
    props.theme.width * ((InputAreaSize * 8.25) + DashAreaSize - InputAreaSize) +
    props.theme.width * RedFontSize * 2}px;
  left: ${(props) => props.theme.width * 0.1}px;
  color: #bb9645;
  height: ${(props) => props.theme.width * SectionTitleFontSize}px;
  width: ${(props) => props.theme.width * 0.8}px;
  font-size: ${(props) => props.theme.width * SectionTitleFontSize}px;
  text-align: center;
`;

export const ReindexQRBaseFull = styled.View`
  position: absolute;
  left: ${(props) => props.theme.width * 0.05}px;
  top: ${(props) =>
    props.theme.height * 0.2525 +
    props.theme.width * TitleFontSize +
    props.theme.width * SectionTitleFontSize * 2 +
    props.theme.width * ((InputAreaSize * 8.25) + DashAreaSize - InputAreaSize) +
    props.theme.width * RedFontSize * 2}px;
  width: ${(props) => props.theme.width * 0.9}px;
  height: ${(props) => props.theme.width * 0.9}px;
`;

export const ReindexQRFull = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props) => props.theme.width * 0.9}px;
  height: ${(props) => props.theme.width * 0.9}px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ReindexBackButtonFull = styled.TouchableOpacity`
  position: absolute;
  background-color: rgba(187, 150, 69, 1);
  width: ${(props) => props.theme.width * 0.325}px;
  height: ${(props) => props.theme.height * 0.075}px;
  left: ${(props) =>
    props.theme.width * 0.5 - props.theme.width * 0.325 / 2}px;
  top: ${(props) =>
    props.theme.height * 0.2725 +
    props.theme.width * TitleFontSize +
    props.theme.width * SectionTitleFontSize * 2 +
    props.theme.width * ((InputAreaSize * 8.25) + DashAreaSize - InputAreaSize) +
    props.theme.width * RedFontSize * 2 +
    props.theme.width * 0.9}px;
  border-radius: ${(props) => props.theme.height * 0.0375}px;
  justify-content: center;
  align-items: center;
`;
