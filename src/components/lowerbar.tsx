import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

// Screen Dimensions
const { width, height } = Dimensions.get('window');

// Theme Interface
interface ThemeProps {
  width: number;
  height: number;
  hPosition?: number;
  opacity?: number;
  visible?: string;
  active?: string;
}

// Styled Components
export const LowerBarDiv = styled.View<ThemeProps>`
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 1);
  color: white;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height * 0.095}px;
  z-index: 99;
`;

export const LowerBarCenterButton = styled.TouchableOpacity<ThemeProps>`
  position: absolute;
  background-color: #000000;
  color: white;
  font-size: ${(props) => props.height * 0.025}px;
  width: ${(props) => props.height * 0.075}px;
  height: ${(props) => props.height * 0.075}px;
  left: ${(props) => props.width * 0.5 - props.height * 0.075 / 2}px;
  bottom: ${(props) => props.height * 0.01}px;
  border-radius: ${(props) => props.height * 0.075 / 2}px;
  border-width: 0;
  z-index: 1;

  :focus {
    outline: none;
  }
`;

export const LowerBarCenterButtonImg = styled.Image<ThemeProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props) => props.height * 0.075 - 12}px;
  height: ${(props) => props.height * 0.075 - 12}px;
  border-radius: ${(props) => props.height * 0.075 / 2}px;
  border-width: 6px;
  border-color: #000000;
`;

export const LowerBarSection = styled.View<ThemeProps>`
  position: absolute;
  left: ${(props) => props.width * 0.05}px;
  bottom: ${(props) => props.height * 0.01}px;
  background-color: #382d14;
  color: white;
  width: ${(props) => props.width * 0.9}px;
  height: ${(props) => props.height * 0.075}px;
  border-radius: ${(props) => props.height * 0.075 / 2}px;
`;

export const LowerBarButton = styled.View<ThemeProps>`
  display: ${(props) => props.visible};
  position: absolute;
  left: ${(props) => props.width * (props.hPosition || 0)}px;
  top: ${(props) =>
    props.height * 0.075 / 2 - props.height * 0.06 / 2}px;
  width: ${(props) => props.width * 0.16}px;
  height: ${(props) => props.height * 0.06}px;
  border-radius: 50px;
  text-align: center;
  opacity: ${(props) => props.opacity || 1};
`;

export const LowerBarButtonImg = styled.Image<ThemeProps>`
  height: ${(props) => props.height * 0.0325}px;
  margin-top: ${(props) => props.height * 0.0025}px;
`;

export const LowerBarButtonText = styled.Text<ThemeProps>`
  position: absolute;
  left: 0;
  bottom: ${(props) => props.height * 0.0045}px;
  width: ${(props) => props.width * 0.16}px;
  height: ${(props) => props.width * 0.0225}px;
  font-size: ${(props) => props.width * 0.0225}px;
  text-align: center;
  color: ${(props) => (props.active === 'visible' ? '#f0bc5e' : 'white')};
`;

export const LowerBarCenteredDiv = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;
