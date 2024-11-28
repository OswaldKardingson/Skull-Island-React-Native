import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import backgroundImage from '../assets/login.jpg'; // Ensure this is compatible with React Native's asset system

// Screen Dimensions
const { width, height } = Dimensions.get('window');

// Theme Interface
interface ThemeProps {
  topBuffer?: number;
  height: number;
  width: number;
  visible?: string;
  size?: number;
  hPositionMod?: number;
  pos?: number;
}

// Styled Components
export const MainGrid = styled.View<ThemeProps>`
  background-image: url(${backgroundImage}); /* Note: Use <ImageBackground> in components for React Native */
  background-color: #cccccc;
  position: absolute;
  top: ${(props) => props.topBuffer || 0}px;
  left: 0;
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: ${(props) => props.visible || 'flex'};
`;

export const UpperButtonSection = styled.View<ThemeProps>`
  height: ${(props) => props.height * 0.05}px;
  width: ${(props) => props.width}px;
  position: absolute;
  bottom: ${(props) => props.height * 0.015}px;
  left: 0;
  opacity: 1;
`;

export const UpperSection = styled.View<ThemeProps>`
  height: ${(props) => props.height * 0.4}px;
  width: ${(props) => props.width}px;
  background-color: #000000;
  color: #ffffff;
  position: absolute;
  top: ${(props) => props.height * 0.05}px;
  left: 0;
  opacity: 0.8;
`;

export const UpperSectionOpaque = styled.View<ThemeProps>`
  height: ${(props) => props.height * 0.4}px;
  width: ${(props) => props.width}px;
  color: #ffffff;
  position: absolute;
  top: ${(props) => props.height * 0.05}px;
  left: 0;
  opacity: 1;
`;

export const LowerButtonSection = styled.View<ThemeProps>`
  height: ${(props) => props.height * 0.05}px;
  width: ${(props) => props.width}px;
  background-color: #000000;
  position: absolute;
  bottom: 0;
  left: 0;
  opacity: 1;
`;

export const LowerSection = styled.View<ThemeProps>`
  height: ${(props) => props.height * 0.4}px;
  width: ${(props) => props.width}px;
  background-color: #000000;
  color: #ffffff;
  position: absolute;
  bottom: 0;
  left: 0;
  opacity: 0.75;
`;

export const LowerSectionOpaque = styled.View<ThemeProps>`
  height: ${(props) => props.height * 0.4}px;
  width: ${(props) => props.width}px;
  color: #ffffff;
  position: absolute;
  bottom: ${(props) => props.height * (props.hPositionMod || 0)}px;
  left: 0;
  opacity: 1;
  transition: 500ms;
`;

export const Menu = styled.View<ThemeProps>`
  position: absolute;
  top: 0;
  left: 0;
  height: ${(props) => props.height * 0.05}px;
  width: ${(props) => props.width}px;
  background-color: #505050;
  color: #ffffff;
  display: ${(props) => props.visible || 'flex'};
`;

export const MenuTitle = styled.Text<ThemeProps>`
  position: absolute;
  top: ${(props) => props.height * 0.0125}px;
  left: ${(props) => props.width * 0.2}px;
  font-size: ${(props) => props.height * 0.025}px;
  font-weight: bold;
  text-align: center;
  background-color: #505050;
  color: #ffffff;
  width: ${(props) => props.width * 0.6}px;
`;

export const MenuContent = styled.View<ThemeProps>`
  display: ${(props) => props.visible || 'flex'};
  position: absolute;
  top: ${(props) => props.height * 0.05}px;
  left: 0;
  background-color: #303030;
  height: ${(props) => props.height * 0.05 * (props.size || 1)}px;
  width: ${(props) => props.width * 0.25}px;
  z-index: 1;
`;

export const MenuButton = styled.TouchableOpacity<ThemeProps>`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #303030;
  color: #ffffff;
  width: ${(props) => props.width * 0.15}px;
  height: ${(props) => props.height * 0.05}px;
  font-size: ${(props) => props.height * 0.025}px;
  border-width: 0;
`;

export const MenuButtonLine = styled.TouchableOpacity<ThemeProps>`
  position: absolute;
  top: ${(props) => props.height * 0.05 * (props.pos || 0)}px;
  left: 0;
  background-color: #505050;
  color: white;
  width: ${(props) => props.width * 0.45}px;
  height: ${(props) => props.height * 0.05}px;
  font-size: ${(props) => props.height * 0.025}px;
  border-width: 0;
`;
