import styled from 'styled-components/native';

// Constants
const TitleFontSize = 1.5 / 21;
const SectionTitleFontSize = 1.5 / 36;
const RedFontSize = 1.5 / 52;
const DashAreaSize = 1.5 / 18;
const InputAreaSize = 1.5 / 24;
const InputAreaFontSize = 1.5 / 36;

// Main Container
export const ReceiveDiv = styled.View<{ visible: string }>`
  position: absolute;
  top: 0;
  left: 0;
  display: ${(props) => props.visible};
  transition: 500ms;
`;

export const ReceiveSectionOverscroll = styled.ScrollView`
  position: absolute;
  top: ${(props) => props.theme.height * 0.0125}px;
  left: 0;
  height: ${(props) => props.theme.height * 0.975}px;
  width: ${(props) => props.theme.width}px;
  overflow: scroll;
  overscroll-behavior: contain;
`;

export const ReceiveSection = styled.View<{ visible?: string }>`
  position: absolute;
  top: 0;
  left: 0;
  height: ${(props) =>
    props.theme.height * 0.4975 +
    props.theme.width * TitleFontSize +
    props.theme.width * SectionTitleFontSize * 2 +
    props.theme.width * ((InputAreaSize * 3) + DashAreaSize - InputAreaSize) +
    props.theme.width * RedFontSize * 2 +
    props.theme.width * 0.9}px;
  width: ${(props) => props.theme.width}px;
  display: ${(props) => props.visible};
`;

export const ReceiveTitle = styled.Text`
  position: absolute;
  top: ${(props) => props.theme.height * 0.05}px;
  left: 0;
  color: #bb9645;
  height: ${(props) => props.theme.width * TitleFontSize}px;
  width: ${(props) => props.theme.width}px;
  font-family: 'Bai Jamjuree';
  font-style: normal;
  font-weight: bold;
  font-size: ${(props) => props.theme.width * TitleFontSize}px;
  text-align: center;
`;

export const ReceiveAddressTitle = styled.Text`
  position: absolute;
  top: ${(props) =>
    props.theme.height * 0.075 + props.theme.width * TitleFontSize}px;
  left: ${(props) => props.theme.width * 0.15}px;
  color: #bb9645;
  height: ${(props) => props.theme.width * SectionTitleFontSize}px;
  width: ${(props) => props.theme.width * 0.8}px;
  font-size: ${(props) => props.theme.width * SectionTitleFontSize}px;
  text-align: left;
`;

export const ReceiveAddressArea = styled.View`
  position: absolute;
  top: ${(props) =>
    props.theme.height * 0.1 +
    props.theme.width * TitleFontSize +
    props.theme.width * SectionTitleFontSize}px;
  left: ${(props) => props.theme.width * 0.05}px;
  background-color: rgba(187, 150, 69, 0.1);
  width: ${(props) => props.theme.width * 0.9}px;
  height: ${(props) =>
    props.theme.width * ((InputAreaSize * 3) + DashAreaSize - InputAreaSize)}px;
`;

export const ReceiveAddressInput = styled.TextInput<{ flash?: boolean }>`
  position: absolute;
  left: 0;
  top: 0;
  color: #ffffff;
  background-color: ${(props) =>
    props.flash ? 'rgba(187,150,69,0.5)' : 'rgba(0,0,0,0)'};
  width: ${(props) => props.theme.width * 0.9}px;
  height: ${(props) => props.theme.width * InputAreaSize * 3}px;
  margin: 0px;
  border-width: 0 0 2px 0;
  border-style: dashed;
  border-color: #bb9645;
  font-size: ${(props) => props.theme.width * InputAreaFontSize}px;
  text-align: center;
  word-wrap: break-word;
  transition: 60ms;

  :focus {
    outline: none;
  }
`;

export const ReceiveCopyButton = styled.TouchableOpacity`
  position: absolute;
  background-color: rgba(48, 49, 51, 1);
  color: white;
  font-size: ${(props) => props.theme.height * 0.025}px;
  width: ${(props) => props.theme.width * 0.25}px;
  height: ${(props) => props.theme.height * 0.055}px;
  left: ${(props) =>
    props.theme.width * 0.5 - props.theme.width * 0.25 / 2}px;
  top: ${(props) =>
    props.theme.height * 0.12 +
    props.theme.width * TitleFontSize +
    props.theme.width * SectionTitleFontSize +
    props.theme.width * ((InputAreaSize * 3) + DashAreaSize - InputAreaSize)}px;
  border-radius: ${(props) => props.theme.height * 0.055 / 2}px;
  justify-content: center;
  align-items: center;
`;

export const ReceiveNote1 = styled.Text`
  position: absolute;
  color: #bb9645;
  width: ${(props) => props.theme.width * 0.8}px;
  height: ${(props) => props.theme.width * RedFontSize}px;
  font-size: ${(props) => props.theme.width * RedFontSize}px;
  left: ${(props) => props.theme.width * 0.5 - props.theme.width * 0.8 / 2}px;
  top: ${(props) =>
    props.theme.height * 0.2 +
    props.theme.width * TitleFontSize +
    props.theme.width * SectionTitleFontSize +
    props.theme.width * ((InputAreaSize * 3) + DashAreaSize - InputAreaSize)}px;
  text-align: center;
`;

export const ReceiveNote2 = styled.Text`
  position: absolute;
  color: #bb9645;
  width: ${(props) => props.theme.width * 0.8}px;
  height: ${(props) => props.theme.width * RedFontSize}px;
  font-size: ${(props) => props.theme.width * RedFontSize}px;
  left: ${(props) => props.theme.width * 0.5 - props.theme.width * 0.8 / 2}px;
  top: ${(props) =>
    props.theme.height * 0.2025 +
    props.theme.width * TitleFontSize +
    props.theme.width * SectionTitleFontSize +
    props.theme.width * ((InputAreaSize * 3) + DashAreaSize - InputAreaSize) +
    props.theme.width * RedFontSize}px;
  text-align: center;
`;

export const ReceiveQRTitle = styled.Text`
  position: absolute;
  top: ${(props) =>
    props.theme.height * 0.2225 +
    props.theme.width * TitleFontSize +
    props.theme.width * SectionTitleFontSize +
    props.theme.width * ((InputAreaSize * 3) + DashAreaSize - InputAreaSize) +
    props.theme.width * RedFontSize * 2}px;
  left: ${(props) => props.theme.width * 0.1}px;
  color: #bb9645;
  height: ${(props) => props.theme.width * SectionTitleFontSize}px;
  width: ${(props) => props.theme.width * 0.8}px;
  font-size: ${(props) => props.theme.width * SectionTitleFontSize}px;
  text-align: center;
`;

export const ReceiveQRBase = styled.View`
  position: absolute;
  left: ${(props) => props.theme.width * 0.05}px;
  top: ${(props) =>
    props.theme.height * 0.2525 +
    props.theme.width * TitleFontSize +
    props.theme.width * SectionTitleFontSize * 2 +
    props.theme.width * ((InputAreaSize * 3) + DashAreaSize - InputAreaSize) +
    props.theme.width * RedFontSize * 2}px;
  width: ${(props) => props.theme.width * 0.9}px;
  height: ${(props) => props.theme.width * 0.9}px;
`;

export const ReceiveQR = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props) => props.theme.width * 0.9}px;
  height: ${(props) => props.theme.width * 0.9}px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ReceiveBackButton = styled.TouchableOpacity`
  position: absolute;
  background-color: rgba(187, 150, 69, 1);
  color: white;
  font-size: ${(props) => props.theme.height * 0.025}px;
  width: ${(props) => props.theme.width * 0.325}px;
  height: ${(props) => props.theme.height * 0.075}px;
  left: ${(props) =>
    props.theme.width * 0.5 - props.theme.width * 0.325 / 2}px;
  top: ${(props) =>
    props.theme.height * 0.2725 +
    props.theme.width * TitleFontSize +
    props.theme.width * SectionTitleFontSize * 2 +
    props.theme.width * ((InputAreaSize * 3) + DashAreaSize - InputAreaSize) +
    props.theme.width * RedFontSize * 2 +
    props.theme.width * 0.9}px;
  border-radius: ${(props) => props.theme.height * 0.075 / 2}px;
  justify-content: center;
  align-items: center;
`;

// export const ReceiveGreyButton = styled.TouchableOpacity`
//  background-color: #707070;
//  color: #000000;
//  border: 0px solid #707070;
//  font-size: ${(props) => props.theme.height * 0.0225}px;
//  margin-top: ${(props) => props.theme.height * 0.00125}px;
//  margin-bottom: ${(props) => props.theme.height * 0.00125}px;
//  margin-left: ${(props) => props.theme.width * 0.0125}px;
//  margin-right: ${(props) => props.theme.width * 0.0125}px;
//  height: ${(props) => props.theme.height * 0.0475}px;
//  width: ${(props) => props.theme.width * 0.35}px;
//  border-radius: 3px;
//  justify-content: center;
//  align-items: center;
//`
// export const ReceiveButtonSection = styled.View`
//  position: absolute;
//  bottom: ${(props) => props.theme.height * 0.05}px;
//  left: ${(props) => props.theme.width * 0.075 - 5}px;
//  width: ${(props) => props.theme.width * 0.8}px;
//  border: 0px solid #000000;
//  display: flex;
//  flex-direction: row;
//  justify-content: space-between;
//`
// export const PinSection = styled.View<{ visible: string }>`
//  display: ${(props) => props.visible};
//`
// export const KeySection = styled.View<{ visible: string }>`
//  display: ${(props) => props.visible};
//`


