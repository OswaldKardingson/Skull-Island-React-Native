import styled from 'styled-components/native';

const TitleFontSize = 1.5 / 21;
const SectionTitleFontSize = 1.5 / 36;
const RedFontSize = 1.5 / 52;
const DashAreaSize = 1.5 / 18;
const InputAreaSize = 1.5 / 24;
const InputAreaFontSize = 1.5 / 36;

interface ThemeProps {
  theme: {
    width: number;
    height: number;
  };
  visible?: string;
  flash?: boolean;
}
export const PrivateKeyDiv = styled.View<ThemeProps>`
  position: absolute;
  top: 0;
  left: 0;
  display: ${(props) => props.visible || 'flex'};
  transition: 500ms;
`;

export const PrivateKeySectionOverscroll = styled.ScrollView<ThemeProps>`
  position: absolute;
  top: ${(props) => props.theme.height * 0.0125}px;
  left: 0;
  height: ${(props) => props.theme.height * 0.975}px;
  width: ${(props) => props.theme.width}px;
  overscroll-behavior: contain;
`;

export const PrivateKeySection = styled.View<ThemeProps>`
  position: absolute;
  top: 0;
  left: 0;
  height: ${(props) =>
    props.theme.height * 0.4975 +
    props.theme.width * TitleFontSize +
    props.theme.width * SectionTitleFontSize * 2 +
    props.theme.width * (InputAreaSize * 8.25 + DashAreaSize - InputAreaSize) +
    props.theme.width * RedFontSize * 2}px;
  width: ${(props) => props.theme.width}px;
  display: ${(props) => props.visible || 'flex'};
`;

export const PrivateKeyTitle = styled.Text<ThemeProps>`
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

export const PrivateKeyPWTitle = styled.Text<ThemeProps>`
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

export const PrivateKeyPWArea = styled.View<ThemeProps>`
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

export const PrivateKeyPWInput = styled.TextInput<ThemeProps>`
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

export const PrivateKeyPWGradientCapLeft = styled.View<ThemeProps>`
  position: absolute;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 1);
  width: ${(props) => props.theme.width * 0.1}px;
  height: ${(props) => props.theme.width * DashAreaSize}px;
`;

export const PrivateKeyPWGradientCapRight = styled.View<ThemeProps>`
  position: absolute;
  right: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 1);
  width: ${(props) => props.theme.width * 0.1}px;
  height: ${(props) => props.theme.width * DashAreaSize}px;
`;

export const PrivateKeyCopyButton = styled.TouchableOpacity<ThemeProps>`
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
    props.theme.width * SectionTitleFontSize}px;
  border-radius: ${(props) => props.theme.height * 0.055 / 2}px;
  align-items: center;
  justify-content: center;
`;

export const PrivateKeyRedText = styled.Text<ThemeProps>`
  position: absolute;
  top: ${(props) =>
    props.theme.height * 0.1 +
    props.theme.width * TitleFontSize +
    props.theme.width * SectionTitleFontSize +
    props.theme.width * DashAreaSize}px;
  left: 0;
  height: ${(props) => props.theme.width * RedFontSize}px;
  width: ${(props) => props.theme.width}px;
  font-size: ${(props) => props.theme.width * RedFontSize}px;
  color: rgba(229, 66, 18, 1);
  text-align: center;
`;

export const PrivateKeyArea = styled.View<ThemeProps>`
  position: absolute;
  top: ${(props) =>
    props.theme.height * 0.1 +
    props.theme.width * TitleFontSize +
    props.theme.width * SectionTitleFontSize}px;
  left: ${(props) => props.theme.width * 0.05}px;
  background-color: rgba(187, 150, 69, 0.1);
  width: ${(props) => props.theme.width * 0.9}px;
  height: ${(props) =>
    props.theme.width * (InputAreaSize * 8.25 + DashAreaSize - InputAreaSize)}px;
`;

export const PrivateKeyInput = styled.TextInput<ThemeProps>`
  position: absolute;
  left: 0;
  top: 0;
  color: #ffffff;
  background-color: ${(props) =>
    props.flash ? 'rgba(187,150,69,0.5)' : 'rgba(0,0,0,0)'};
  width: ${(props) => props.theme.width * 0.9}px;
  height: ${(props) => props.theme.width * InputAreaSize * 8.25}px;
  margin: 0px;
  border-width: 0px 0px 2px 0px;
  border-style: dashed;
  border-color: #bb9645;
  font-size: ${(props) => props.theme.width * InputAreaFontSize}px;
  text-align: center;
  word-wrap: break-word;
`;

export const PrivateKeyNote1 = styled.Text<ThemeProps>`
  position: absolute;
  color: #bb9645;
  width: ${(props) => props.theme.width * 0.8}px;
  height: ${(props) => props.theme.width * RedFontSize}px;
  font-size: ${(props) => props.theme.width * RedFontSize}px;
  left: ${(props) =>
    props.theme.width * 0.5 - props.theme.width * 0.8 / 2}px;
  top: ${(props) =>
    props.theme.height * 0.2 +
    props.theme.width * TitleFontSize +
    props.theme.width * SectionTitleFontSize +
    props.theme.width * (InputAreaSize * 8.25 + DashAreaSize - InputAreaSize)}px;
  text-align: center;
`;

export const PrivateKeyNote2 = styled.Text<ThemeProps>`
  position: absolute;
  color: #bb9645;
  width: ${(props) => props.theme.width * 0.8}px;
  height: ${(props) => props.theme.width * RedFontSize}px;
  font-size: ${(props) => props.theme.width * RedFontSize}px;
  left: ${(props) =>
    props.theme.width * 0.5 - props.theme.width * 0.8 / 2}px;
  top: ${(props) =>
    props.theme.height * 0.2025 +
    props.theme.width * TitleFontSize +
    props.theme.width * SectionTitleFontSize +
    props.theme.width * (InputAreaSize * 8.25 + DashAreaSize - InputAreaSize) +
    props.theme.width * RedFontSize}px;
  text-align: center;
`;

export const PrivateKeyQRTitle = styled.Text<ThemeProps>`
  position: absolute;
  top: ${(props) =>
    props.theme.height * 0.2225 +
    props.theme.width * TitleFontSize +
    props.theme.width * SectionTitleFontSize +
    props.theme.width * (InputAreaSize * 8.25 + DashAreaSize - InputAreaSize) +
    props.theme.width * RedFontSize * 2}px;
  left: ${(props) => props.theme.width * 0.1}px;
  color: #bb9645;
  height: ${(props) => props.theme.width * SectionTitleFontSize}px;
  width: ${(props) => props.theme.width * 0.8}px;
  font-size: ${(props) => props.theme.width * SectionTitleFontSize}px;
  text-align: center;
`;

export const PrivateKeyQRBase = styled.View<ThemeProps>`
  position: absolute;
  left: ${(props) => props.theme.width * 0.05}px;
  top: ${(props) =>
    props.theme.height * 0.2525 +
    props.theme.width * TitleFontSize +
    props.theme.width * SectionTitleFontSize * 2 +
    props.theme.width * (InputAreaSize * 8.25 + DashAreaSize - InputAreaSize) +
    props.theme.width * RedFontSize * 2}px;
  width: ${(props) => props.theme.width * 0.9}px;
  height: ${(props) => props.theme.width * 0.9}px;
`;

export const PrivateKeyQR = styled.View<ThemeProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props) => props.theme.width * 0.9}px;
  height: ${(props) => props.theme.width * 0.9}px;
  flex-direction: row;
  justify-content: center;
`;

export const PrivateKeyBackButton = styled.TouchableOpacity<ThemeProps>`
  position: absolute;
  background-color: rgba(187, 150, 69, 1);
  font-size: ${(props) => props.theme.height * 0.025}px;
  width: ${(props) => props.theme.width * 0.325}px;
  height: ${(props) => props.theme.height * 0.075}px;
  left: ${(props) =>
    props.theme.width * 0.5 - props.theme.width * 0.325 / 2}px;
  top: ${(props) =>
    props.theme.height * 0.2725 +
    props.theme.width * TitleFontSize +
    props.theme.width * SectionTitleFontSize * 2 +
    props.theme.width * (InputAreaSize * 8.25 + DashAreaSize - InputAreaSize) +
    props.theme.width * RedFontSize * 2}px;
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
  padding: 10px;
`;

export const ReceiveQR = styled.View<ThemeProps>`
  position: absolute;
  bottom: ${(props) => props.theme.height * 0.13}px;
  left: ${(props) => props.theme.width * 0.125 - 5}px;
  width: ${(props) => props.theme.width * 0.7}px;
  height: ${(props) => props.theme.width * 0.7}px;
  border: 0px solid #000000;
`;

export const ReceiveButtonSection = styled.View<ThemeProps>`
  position: absolute;
  bottom: ${(props) => props.theme.height * 0.05}px;
  left: ${(props) => props.theme.width * 0.075 - 5}px;
  width: ${(props) => props.theme.width * 0.8}px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const ReceiveGreyButton = styled.TouchableOpacity<ThemeProps>`
  background-color: #707070;
  color: #000000;
  font-size: ${(props) => props.theme.height * 0.0225}px;
  height: ${(props) => props.theme.height * 0.0475}px;
  width: ${(props) => props.theme.width * 0.35}px;
  border-radius: 3px;
  justify-content: center;
  align-items: center;
`;

export const PinSection = styled.View<ThemeProps>`
  display: ${(props) => props.visible || 'none'};
`;

export const KeySection = styled.View<ThemeProps>`
  display: ${(props) => props.visible || 'none'};
`;

// export const ReceiveSection = styled.div`
//   text-align: center;
//   background-color: #000000;
//   color: #ffffff;
//   border-radius: 35px;
//   border: 5px solid black;
//   height: ${props => ((props.theme.height * 0.95) - 10) + 'px'};
//   width: ${props => ((props.theme.width * 0.95) - 10) + 'px'};
//   position: absolute;
//   top: ${props => ((props.theme.height * 0.025)) + 'px'};
//   left: ${props => ((props.theme.width * 0.025)) + 'px'};
// `
// export const ReceiveAddress = styled.textarea`
//   position: absolute;
//   top: ${props => ((props.theme.height * 0.025)) + 'px'};
//   left: ${props => ((props.theme.width * 0.075) - 5) + 'px'};
//   width: ${props => (props.theme.width * 0.8) + 'px'};
//   height: ${props => (props.theme.height * 0.30) + 'px'};
//   background-color: #151515;
//   color: #ffffff;
//   font-size: 14px;
//   border: 1px solid #000000;
//   border-radius: 10px;
// `
// export const ReceiveQR = styled.div`
//   position: absolute;
//   bottom: ${props => ((props.theme.height * 0.13)) + 'px'};
//   left: ${props => ((props.theme.width * 0.125) - 5) + 'px'};
//   width: ${props => ((props.theme.width * 0.7)) + 'px'};
//   height: ${props => ((props.theme.width * 0.7)) + 'px'};
//   border: 0px solid #000000;
// `
// export const ReceiveButtonSection = styled.div`
//   position: absolute;
//   bottom: ${props => ((props.theme.height * 0.05)) + 'px'};
//   left: ${props => ((props.theme.width * 0.075) - 5) + 'px'};
//   width: ${props => ((props.theme.width * 0.8)) + 'px'};
//   border: 0px solid #000000;
//   display: inline-block;
// `
// export const ReceiveGreyButton = styled.button`
//   background-color: #707070;
//   color: #000000;
//   font-size: ${props => (props.theme.height * 0.0225) + 'px'}
//   margin-top: ${props => (props.theme.height * 0.00125) + 'px'};
//   margin-bottom: ${props => (props.theme.height * 0.00125) + 'px'};
//   margin-left: ${props => (props.theme.width * 0.0125) + 'px'};
//   margin-right: ${props => (props.theme.width * 0.0125) + 'px'};
//   height: ${props => (props.theme.height * 0.0475) + 'px'};
//   width: ${props => (props.theme.width * 0.35)+ 'px'};
//   border-radius: 3px;
// `
// export const PinSection = styled.div`
//   display: ${props => props.visible};
// `
// export const KeySection = styled.div`
//   display: ${props => props.visible};
// `
