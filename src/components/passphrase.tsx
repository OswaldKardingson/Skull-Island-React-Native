import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// Font and Size Constants
const TitleFontSize = 1.5 / 21;
const SectionTitleFontSize = 1.5 / 36;
const RedFontSize = 1.5 / 52;
const DashAreaSize = 1.5 / 18;
const InputAreaSize = 1.5 / 24;
const InputAreaFontSize = 1.5 / 36;

// Theme Interface
interface ThemeProps {
  theme: {
    height: number;
    width: number;
  };
  visible?: string;
  flash?: boolean;
}

// Styled Components
export const PassPhraseDiv = styled.View<ThemeProps>`
  position: absolute;
  top: 0;
  left: 0;
  display: ${(props) => props.visible || 'flex'};
  transition: 500ms;
`;

export const PassPhraseSectionOverscroll = styled.ScrollView<ThemeProps>`
  position: absolute;
  top: ${(props) => props.theme.height * 0.0125}px;
  left: 0;
  height: ${(props) => props.theme.height * 0.975}px;
  width: ${(props) => props.theme.width}px;
  overscroll-behavior: contain;
`;

export const PassPhraseSection = styled.View<ThemeProps>`
  position: absolute;
  top: 0;
  left: 0;
  height: ${(props) =>
    props.theme.height * 0.5575 +
    props.theme.width * TitleFontSize +
    props.theme.width * SectionTitleFontSize * 3 +
    props.theme.width * (InputAreaSize * 6.25 + DashAreaSize - InputAreaSize) +
    props.theme.width * RedFontSize * 2 +
    props.theme.width * 0.9}px;
  width: ${(props) => props.theme.width}px;
  display: ${(props) => props.visible || 'flex'};
`;

export const PassPhraseTitle = styled.Text<ThemeProps>`
  position: absolute;
  top: ${(props) => props.theme.height * 0.05}px;
  color: #bb9645;
  font-size: ${(props) => props.theme.width * TitleFontSize}px;
  text-align: center;
`;

export const PassPhrasePWTitle = styled.Text<ThemeProps>`
  position: absolute;
  top: ${(props) =>
    props.theme.height * 0.075 + props.theme.width * TitleFontSize}px;
  left: ${(props) => props.theme.width * 0.15}px;
  color: #bb9645;
  font-size: ${(props) => props.theme.width * SectionTitleFontSize}px;
  text-align: left;
`;

export const PassPhrasePWArea = styled.View<ThemeProps>`
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

export const PassPhrasePWInput = styled.TextInput<ThemeProps>`
  position: absolute;
  left: 0;
  top: 0;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0);
  width: ${(props) => props.theme.width * 0.9}px;
  height: ${(props) => props.theme.width * InputAreaSize}px;
  margin: 0px;
  border-width: 0px 0px 2px 0px;
  border-style: dashed;
  border-color: #bb9645;
  font-size: ${(props) => props.theme.width * InputAreaFontSize}px;
  text-align: center;
`;

export const PassPhrasePWGradientCapLeft = styled.View<ThemeProps>`
  position: absolute;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 1);
  width: ${(props) => props.theme.width * 0.1}px;
  height: ${(props) => props.theme.width * DashAreaSize}px;
  z-index: 1;
`;

export const PassPhrasePWGradientCapRight = styled.View<ThemeProps>`
  position: absolute;
  right: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 1);
  width: ${(props) => props.theme.width * 0.1}px;
  height: ${(props) => props.theme.width * DashAreaSize}px;
  z-index: 1;
`;

export const PassPhraseRedText = styled.Text<ThemeProps>`
  position: absolute;
  color: rgba(229, 66, 18, 1);
  font-size: ${(props) => props.theme.width * RedFontSize}px;
  text-align: center;
`;

export const PassPhraseHeightTitle = styled.Text<ThemeProps>`
  position: absolute;
  top: ${(props) =>
    props.theme.height * 0.13 +
    props.theme.width * TitleFontSize +
    props.theme.width * SectionTitleFontSize * 2}px;
  left: ${(props) => props.theme.width * 0.15}px;
  color: #bb9645;
  font-size: ${(props) => props.theme.width * SectionTitleFontSize}px;
  text-align: left;
`;

export const PassPhraseHeightArea = styled.View<ThemeProps>`
  position: absolute;
  top: ${(props) =>
    props.theme.height * 0.13 +
    props.theme.width * TitleFontSize +
    props.theme.width * SectionTitleFontSize * 2}px;
  left: ${(props) => props.theme.width * 0.55}px;
  background-color: rgba(187, 150, 69, 0.1);
  width: ${(props) => props.theme.width * 0.4}px;
  height: ${(props) => props.theme.width * DashAreaSize}px;
`;

export const PassPhraseHeightInput = styled.TextInput<ThemeProps>`
  position: absolute;
  left: 0;
  top: 0;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0);
  width: ${(props) => props.theme.width * 0.4}px;
  height: ${(props) => props.theme.width * InputAreaSize}px;
  border-width: 0px 0px 2px 0px;
  border-style: dashed;
  border-color: #bb9645;
  font-size: ${(props) => props.theme.width * InputAreaFontSize}px;
  text-align: center;
`;

export const PassPhraseNote1 = styled.Text<ThemeProps>`
  position: absolute;
  color: #bb9645;
  font-size: ${(props) => props.theme.width * RedFontSize}px;
  text-align: center;
`;

export const PassPhraseNote2 = styled.Text<ThemeProps>`
  position: absolute;
  color: #bb9645;
  font-size: ${(props) => props.theme.width * RedFontSize}px;
  text-align: center;
`;

export const PassPhraseQRTitle = styled.Text<ThemeProps>`
  position: absolute;
  top: ${(props) =>
    props.theme.height * 0.2825 +
    props.theme.width * TitleFontSize +
    props.theme.width * SectionTitleFontSize * 3}px;
  left: ${(props) => props.theme.width * 0.1}px;
  color: #bb9645;
  font-size: ${(props) => props.theme.width * SectionTitleFontSize}px;
  text-align: center;
`;

export const PassPhraseQRBase = styled.View<ThemeProps>`
  position: absolute;
  left: ${(props) => props.theme.width * 0.05}px;
  top: ${(props) =>
    props.theme.height * 0.3125 +
    props.theme.width * TitleFontSize +
    props.theme.width * SectionTitleFontSize * 3}px;
  width: ${(props) => props.theme.width * 0.9}px;
  height: ${(props) => props.theme.width * 0.9}px;
`;

export const PassPhraseQR = styled.View<ThemeProps>`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: ${(props) => props.theme.width * 0.9}px;
  height: ${(props) => props.theme.width * 0.9}px;
`;

export const PassPhraseCopyButton = styled.TouchableOpacity<ThemeProps>`
  position: absolute;
  background-color: rgba(48, 49, 51, 1);
  font-size: ${(props) => props.theme.height * 0.025}px;
  width: ${(props) => props.theme.width * 0.25}px;
  height: ${(props) => props.theme.height * 0.055}px;
  left: ${(props) =>
    props.theme.width * 0.5 - props.theme.width * 0.25 / 2}px;
  top: ${(props) =>
    props.theme.height * 0.18 +
    props.theme.width * TitleFontSize +
    props.theme.width * SectionTitleFontSize * 2}px;
  border-radius: ${(props) => props.theme.height * 0.055 / 2}px;
`;

export const PassPhraseBackButton = styled.TouchableOpacity<ThemeProps>`
  position: absolute;
  background-color: rgba(187, 150, 69, 1);
  font-size: ${(props) => props.theme.height * 0.025}px;
  width: ${(props) => props.theme.width * 0.325}px;
  height: ${(props) => props.theme.height * 0.075}px;
  left: ${(props) =>
    props.theme.width * 0.5 - props.theme.width * 0.325 / 2}px;
  top: ${(props) =>
    props.theme.height * 0.3325 +
    props.theme.width * TitleFontSize +
    props.theme.width * SectionTitleFontSize * 3}px;
  border-radius: ${(props) => props.theme.height * 0.075 / 2}px;
`;

export const ReceiveSection = styled.View<ThemeProps>`
  text-align: center;
  background-color: #000000;
  color: #ffffff;
  border-radius: 35px;
  border: 5px solid black;
  height: ${(props) => props.theme.height * 0.95 - 10}px;
  width: ${(props) => props.theme.width * 0.95 - 10}px;
  position: absolute;
  top: ${(props) => props.theme.height * 0.025}px;
  left: ${(props) => props.theme.width * 0.025}px;
`;

export const ReceiveAddress = styled.TextInput<ThemeProps>`
  position: absolute;
  top: ${(props) => props.theme.height * 0.025}px;
  left: ${(props) => props.theme.width * 0.075 - 5}px;
  width: ${(props) => props.theme.width * 0.8}px;
  height: ${(props) => props.theme.height * 0.3}px;
  background-color: #151515;
  color: #ffffff;
  font-size: 14px;
  border: 1px solid #000000;
  border-radius: 10px;
`;

export const ReceiveQR = styled.View<ThemeProps>`
  position: absolute;
  bottom: ${(props) => props.theme.height * 0.13}px;
  left: ${(props) => props.theme.width * 0.125 - 5}px;
  width: ${(props) => props.theme.width * 0.7}px;
  height: ${(props) => props.theme.width * 0.7}px;
`;

export const ReceiveButtonSection = styled.View<ThemeProps>`
  position: absolute;
  bottom: ${(props) => props.theme.height * 0.05}px;
  left: ${(props) => props.theme.width * 0.075 - 5}px;
  width: ${(props) => props.theme.width * 0.8}px;
  display: inline-block;
`;

export const ReceiveGreyButton = styled.TouchableOpacity<ThemeProps>`
  background-color: #707070;
  color: #000000;
  font-size: ${(props) => props.theme.height * 0.0225}px;
  margin-top: ${(props) => props.theme.height * 0.00125}px;
  margin-bottom: ${(props) => props.theme.height * 0.00125}px;
  margin-left: ${(props) => props.theme.width * 0.0125}px;
  margin-right: ${(props) => props.theme.width * 0.0125}px;
  height: ${(props) => props.theme.height * 0.0475}px;
  width: ${(props) => props.theme.width * 0.35}px;
  border-radius: 3px;
  justify-content: center;
  align-items: center;
`;

export const PassPhraseArea = styled.View<ThemeProps>`
  position: absolute;
  top: ${(props) =>
    props.theme.height * 0.1 +
    props.theme.width * TitleFontSize +
    props.theme.width * SectionTitleFontSize}px;
  left: ${(props) => props.theme.width * 0.05}px;
  background-color: rgba(187, 150, 69, 0.1);
  width: ${(props) => props.theme.width * 0.9}px;
  height: ${(props) =>
    props.theme.width * (InputAreaSize * 6.25 + DashAreaSize - InputAreaSize)}px;
`;

export const PassPhraseInput = styled.View<ThemeProps>`
  position: absolute;
  left: 0;
  top: 0;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0);
  width: ${(props) => props.theme.width * 0.9}px;
  height: ${(props) => props.theme.width * InputAreaSize * 6.25}px;
  margin: 0px;
  border-width: 0px 0px 2px 0px;
  border-style: dashed;
  border-color: #bb9645;
  font-size: ${(props) => props.theme.width * InputAreaFontSize}px;
  text-align: center;
  word-wrap: break-word;
`;

export const PassPhraseInnerInput = styled.View<ThemeProps>`
  position: absolute;
  left: ${(props) => props.theme.width * 0.1}px;
  top: 0;
  color: #ffffff;
  background-color: ${(props) =>
    props.flash ? 'rgba(187,150,69,0.5)' : 'rgba(0,0,0,0)'};
  width: ${(props) => props.theme.width * 0.7}px;
  height: ${(props) => props.theme.width * InputAreaSize * 6.25}px;
  margin: 0px;
  border: 0px solid rgba(0, 0, 0, 0);
  font-size: ${(props) => props.theme.width * InputAreaFontSize}px;
  text-align: center;
  word-wrap: break-word;
`;

export const PassPhraseGradientCapLeft = styled.View<ThemeProps>`
  position: absolute;
  left: 0;
  top: 0;
  background-image: linear-gradient(90deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  width: ${(props) => props.theme.width * 0.1}px;
  height: ${(props) =>
    props.theme.width * (InputAreaSize * 6.25 + DashAreaSize - InputAreaSize)}px;
  z-index: 1;
`;

export const PassPhraseGradientCapRight = styled.View<ThemeProps>`
  position: absolute;
  right: 0;
  top: 0;
  background-image: linear-gradient(90deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  width: ${(props) => props.theme.width * 0.1}px;
  height: ${(props) =>
    props.theme.width * (InputAreaSize * 6.25 + DashAreaSize - InputAreaSize)}px;
  z-index: 1;
`;

//export const PinSection = styled.View<ThemeProps>`
//display: ${(props) => props.visible || 'none'};
//`;

//export const KeySection = styled.View<ThemeProps>`
//  display: ${(props) => props.visible || 'none'};
//`;
