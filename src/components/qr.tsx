import styled from 'styled-components/native';

// Define common props for dynamic styles
interface QrProps {
  theme: {
    topBuffer: number;
    width: number;
    height: number;
  };
  qrScanning?: {
    opacity: number;
    display: string;
  };
}

// QrSection
export const QrSection = styled.View<QrProps>`
  position: absolute;
  top: ${(props) => props.theme.topBuffer}px;
  left: 0;
  margin: 0;
  padding: 0;
  width: ${(props) => props.theme.width}px;
  height: ${(props) => props.theme.height}px;
  opacity: ${(props) => props.qrScanning?.opacity || 1};
  display: ${(props) => props.qrScanning?.display || 'flex'};
`;

// QrLeft
export const QrLeft = styled.View<QrProps>`
  position: absolute;
  top: ${(props) => props.theme.height * 0.3}px;
  left: 0;
  margin: 0;
  padding: 0;
  opacity: 0.65;
  width: ${(props) => props.theme.width * 0.15}px;
  height: ${(props) => props.theme.height * 0.4}px;
  background-color: #303030;
`;

// QrRight
export const QrRight = styled.View<QrProps>`
  position: absolute;
  top: ${(props) => props.theme.height * 0.3}px;
  right: 0;
  margin: 0;
  padding: 0;
  opacity: 0.65;
  width: ${(props) => props.theme.width * 0.15}px;
  height: ${(props) => props.theme.height * 0.4}px;
  background-color: #303030;
`;

// QrTop
export const QrTop = styled.View<QrProps>`
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  opacity: 0.65;
  width: ${(props) => props.theme.width}px;
  height: ${(props) => props.theme.height * 0.3}px;
  background-color: #303030;
`;

// QrBottom
export const QrBottom = styled.View<QrProps>`
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 0;
  padding: 0;
  opacity: 0.65;
  width: ${(props) => props.theme.width}px;
  height: ${(props) => props.theme.height * 0.3}px;
  background-color: #303030;
`;

// QrTopLeft
export const QrTopLeft = styled.View<QrProps>`
  position: absolute;
  top: ${(props) => props.theme.height * 0.3}px;
  left: ${(props) => props.theme.width * 0.15}px;
  margin: 0;
  padding: 0;
  opacity: 1;
  width: ${(props) => props.theme.width * 0.045}px;
  height: ${(props) => props.theme.width * 0.045}px;
  border-left-width: 2px;
  border-top-width: 2px;
  border-color: red;
`;

// QrBottomLeft
export const QrBottomLeft = styled.View<QrProps>`
  position: absolute;
  bottom: ${(props) => props.theme.height * 0.3}px;
  left: ${(props) => props.theme.width * 0.15}px;
  margin: 0;
  padding: 0;
  opacity: 1;
  width: ${(props) => props.theme.width * 0.045}px;
  height: ${(props) => props.theme.width * 0.045}px;
  border-left-width: 2px;
  border-bottom-width: 2px;
  border-color: red;
`;

// QrTopRight
export const QrTopRight = styled.View<QrProps>`
  position: absolute;
  top: ${(props) => props.theme.height * 0.3}px;
  right: ${(props) => props.theme.width * 0.15}px;
  margin: 0;
  padding: 0;
  opacity: 1;
  width: ${(props) => props.theme.width * 0.045}px;
  height: ${(props) => props.theme.width * 0.045}px;
  border-right-width: 2px;
  border-top-width: 2px;
  border-color: red;
`;

// QrBottomRight
export const QrBottomRight = styled.View<QrProps>`
  position: absolute;
  bottom: ${(props) => props.theme.height * 0.3}px;
  right: ${(props) => props.theme.width * 0.15}px;
  margin: 0;
  padding: 0;
  opacity: 1;
  width: ${(props) => props.theme.width * 0.045}px;
  height: ${(props) => props.theme.width * 0.045}px;
  border-right-width: 2px;
  border-bottom-width: 2px;
  border-color: red;
`;

// QrCancelButton
export const QrCancelButton = styled.TouchableOpacity<QrProps>`
  position: absolute;
  left: ${(props) =>
    props.theme.width * 0.5 - (props.theme.width * 0.25) / 2}px;
  bottom: ${(props) => props.theme.height * 0.1}px;
  background-color: red;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  width: ${(props) => props.theme.width * 0.25}px;
  height: ${(props) => props.theme.height * 0.075}px;
  font-size: ${(props) => props.theme.height * 0.025}px;
  border-radius: ${(props) => props.theme.height * 0.075 / 2}px;
  z-index: 1;
`;
