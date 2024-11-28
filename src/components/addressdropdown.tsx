import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

// Screen Dimensions
const { width, height } = Dimensions.get('window');

// Theme Constants
const theme = {
  titleFontSize: 1.5 / 21,
  dashAreaSize: 1.5 / 18,
  borderRadius: height * 0.015 * 0.5,
  colorPrimary: '#ffffff',
  colorSecondary: '#111111',
  colorAccent: '#bb9645',
  colorGrey: 'grey',
  colorHighlight: '#ffd700',
};

// Interfaces for Props
interface AddressDropdownContentProps {
  visible: boolean;
  theme: {
    topBuffer?: number;
  };
}

// Layout Components
export const AddressDiv = styled.View`
  position: absolute;
  top: 0;
  left: 0;
`;

export const Spacer = styled.View`
  min-height: ${height * 0.005}px;
`;

// Buttons
export const AddressDropdownButton = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  left: 0;
  width: ${width * 0.9}px;
  height: ${width * theme.dashAreaSize}px;
  background-color: transparent;
  justify-content: flex-start;
`;

export const ZAddressButton = styled.TouchableOpacity`
  width: ${width * 0.9}px;
  border-radius: ${theme.borderRadius}px;
  background-color: transparent;
  margin: 0;
  padding: 0;
`;

// Content Containers
export const AddressDropdownContent = styled.View<AddressDropdownContentProps>`
  position: absolute;
  top: ${(props) => props.theme.topBuffer || 0}px;
  left: 0;
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  width: ${width}px;
  height: ${height}px;
  background-color: rgba(0, 0, 0, 1);
  z-index: 101;
`;

export const AddressSectionOverscroll = styled.ScrollView`
  position: absolute;
  top: ${height * 0.023 + width * theme.titleFontSize}px;
  left: ${width * 0.05}px;
  height: ${height * 0.96}px;
  width: ${width * 0.9}px;
  overscroll-behavior: contain;
`;

// Typography
export const AddressTitle = styled.Text`
  position: absolute;
  top: ${height * 0.013}px;
  left: 0;
  color: ${theme.colorAccent};
  height: ${width * theme.titleFontSize}px;
  width: ${width}px;
  font-family: 'Bai Jamjuree';
  font-style: normal;
  font-weight: bold;
  font-size: ${width * theme.titleFontSize}px;
  text-align: center;
`;

export const Col2Top = styled.Text`
  color: ${theme.colorAccent};
  width: ${width * 0.45}px;
  height: ${(width * 0.125) / 2}px;
  font-size: ${(width * 0.45) / 22 * 1.5}px;
  text-align: left;
`;

export const Col2Bottom = styled.Text`
  color: ${theme.colorGrey};
  width: ${width * 0.45}px;
  height: ${(width * 0.125) / 2}px;
  font-size: ${(width * 0.45) / 25 * 1.5}px;
  text-align: left;
`;

export const Col4Top = styled.Text`
  color: ${theme.colorAccent};
  width: ${width * 0.35}px;
  height: ${(width * 0.125) / 2}px;
  font-size: ${(width * 0.45) / 20 * 1.5}px;
  text-align: left;
`;

export const Col4Bottom = styled.Text`
  color: ${theme.colorGrey};
  width: ${width * 0.35}px;
  height: ${(width * 0.125) / 2}px;
  font-size: ${(width * 0.45) / 25 * 1.5}px;
  text-align: left;
`;

// List Elements
export const AddressListUl = styled.View`
  margin: 0;
  padding: 0;
`;

export const AddressListLi = styled.View`
  flex-direction: row;
  margin: 0;
  background-color: ${theme.colorSecondary};
  border-radius: ${theme.borderRadius}px;
  justify-content: space-between;
`;

// Column Layout
export const Col1Div = styled.View`
  flex: 1;
`;

export const Col2Div = styled.View`
  flex: 2;
`;

export const Col3Div = styled.View`
  flex: 3;
`;

export const Col4Div = styled.View`
  flex: 4;
`;

export const Col5Div = styled.View`
  flex: 5;
`;

export const Col5All = styled.View`
  top: 0;
  left: 0;
`;
