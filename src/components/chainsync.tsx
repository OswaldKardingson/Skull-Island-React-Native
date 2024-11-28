import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

// Screen Dimensions
const { width, height } = Dimensions.get('window');

// Theme Interface
interface ThemeProps {
  height: number;
  width: number;
  synced?: boolean;
}

// Styled Components
export const ChainSyncBody = styled.View<ThemeProps>`
  position: absolute;
  top: ${(props) => props.height * 0.05}px;
  left: 0;
  height: ${(props) => props.height * 0.1}px;
  width: ${(props) => props.width}px;
  z-index: 4;
`;

export const ChainSyncDiv = styled.View<ThemeProps>`
  position: absolute;
  top: 0;
  left: 0;
  height: ${(props) => props.height * 0.1}px;
  width: ${(props) => props.width}px;
  z-index: 4;
`;

export const ChainSyncStatus = styled.Text<ThemeProps>`
  position: absolute;
  top: 0;
  left: ${(props) => props.width * (0.075 + 0.02)}px;
  height: ${(props) => props.height * 0.015}px;
  width: ${(props) => props.width * 0.5}px;
  font-size: ${(props) => props.height * 0.015}px;
  color: ${(props) => (props.synced ? 'rgba(149,198,35,1)' : 'rgba(229,66,18,1)')};
  text-align: left;
`;

export const ChainSyncUSD = styled.Text<ThemeProps>`
  position: absolute;
  top: ${(props) => props.height * (0.0175 + 0.0375 + 0.0225)}px;
  right: ${(props) => props.width * 0.05}px;
  height: ${(props) => props.height * 0.02}px;
  width: ${(props) => props.width * 0.5}px;
  font-size: ${(props) => props.height * 0.02}px;
  color: white;
  text-align: right;
`;

export const ChainSyncCurrentBalance = styled.Text<ThemeProps>`
  position: absolute;
  top: ${(props) => props.height * (0.075 + 0.0175 - 0.018)}px;
  left: ${(props) => props.width * 0.1}px;
  height: ${(props) => props.height * 0.018}px;
  width: ${(props) => props.width * 0.5}px;
  font-size: ${(props) => props.height * 0.018}px;
  color: white;
  text-align: left;
`;

export const ChainSyncBTC = styled.Text<ThemeProps>`
  position: absolute;
  top: ${(props) => props.height * (0.0175 + 0.0375)}px;
  right: ${(props) => props.width * 0.05}px;
  height: ${(props) => props.height * 0.02}px;
  width: ${(props) => props.width * 0.5}px;
  font-size: ${(props) => props.height * 0.02}px;
  color: white;
  text-align: right;
`;

export const ChainSyncBalanceLogo = styled.View<ThemeProps>`
  position: absolute;
  top: ${(props) => props.height * 0.0175}px;
  left: ${(props) => props.width * 0.04}px;
  height: ${(props) => props.height * 0.075}px;
  width: ${(props) => props.height * 0.075}px;
`;

export const ChainSyncBalanceLogoImg = styled.Image<ThemeProps>`
  position: absolute;
  top: 0;
  left: 0;
  height: ${(props) => props.height * 0.075}px;
  width: ${(props) => props.height * 0.075}px;
  background-color: #000000;
`;

export const ChainSyncBalance = styled.Text<ThemeProps>`
  position: absolute;
  top: ${(props) => props.height * 0.0175}px;
  right: ${(props) => props.width * 0.05}px;
  height: ${(props) => props.height * 0.035}px;
  width: ${(props) => props.width * 0.75}px;
  font-size: ${(props) => props.height * 0.03}px;
  color: #bb9645;
  text-align: right;
  background-color: #000000;
`;

export const ChainSyncBalanceError = styled.Text<ThemeProps>`
  position: absolute;
  top: ${(props) => props.height * 0.0175}px;
  left: ${(props) => props.height * 0.079 + props.width * 0.05}px;
  height: ${(props) => props.height * 0.03}px;
  width: ${(props) => props.width * 0.9 - props.height * 0.079}px;
  font-size: ${(props) => props.height * 0.02}px;
  color: #bb9645;
  text-align: center;
  background-color: #000000;
`;

export const ChainSyncBalanceErrorMsg1 = styled.Text<ThemeProps>`
  position: absolute;
  top: ${(props) => props.height * (0.03 + 0.0175)}px;
  left: ${(props) => props.height * 0.079 + props.width * 0.05}px;
  height: ${(props) => props.height * 0.03}px;
  width: ${(props) => props.width * 0.9 - props.height * 0.079}px;
  font-size: ${(props) => props.height * 0.0175}px;
  color: #bb9645;
  text-align: center;
  background-color: #000000;
`;

export const ChainSyncBalanceUnits = styled.Text<ThemeProps>`
  position: absolute;
  top: ${(props) => props.height * (0.0175 + 0.0125)}px;
  right: ${(props) => props.width * 0.05}px;
  height: ${(props) => props.height * 0.0225}px;
  width: ${(props) => props.width * 0.12}px;
  font-size: ${(props) => props.height * 0.0225}px;
  color: #bb9645;
  text-align: right;
  background-color: #000000;
`;
