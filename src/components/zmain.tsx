import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

interface ZMainProps {
  visible: boolean;
  qrScanningOpacity?: number;
  synced: boolean;
  onMenuPress?: () => void;
  onSendPress?: () => void;
  onReceivePress?: () => void;
  onCenterPress?: () => void;
}

const ZMain: React.FC<ZMainProps> = ({
  visible,
  qrScanningOpacity = 0,
  synced,
  onMenuPress,
  onSendPress,
  onReceivePress,
  onCenterPress,
}) => {
  const { height, width } = Dimensions.get('window');

  return (
    <View style={[styles.container, { display: visible ? 'flex' : 'none' }]}>
      {/* Black Background */}
      <View
        style={[
          styles.blackBackground,
          { opacity: qrScanningOpacity, height, width },
        ]}
        testID="zmain-black-background"
      />

      {/* Menu Section */}
      <View style={[styles.menu, { height: height * 0.05 }]}>
        <TouchableOpacity
          style={[styles.menuButton, { top: height * 0.015, left: height * 0.02 }]}
          onPress={onMenuPress}
          testID="zmain-menu-button"
        >
          <Text style={styles.menuText}>☰</Text>
        </TouchableOpacity>
        <View
          style={[styles.menuSyncedIndicator, { top: height * 0.015, left: height * 0.075 }]}
        >
          <Text style={[styles.syncText, { color: synced ? 'green' : 'red' }]}>
            {synced ? 'Synced' : 'Not Synced'}
          </Text>
        </View>
      </View>

      {/* Address List Section */}
      <View style={[styles.middleSection, { top: height * 0.175 }]}>
        <Text style={[styles.sectionHeader, { top: 0 }]}>Address List</Text>
        <View style={[styles.addressList, { top: height * 0.035 }]} />
        <View style={[styles.addressListEndCap, { top: height * 0.3375 }]} />
      </View>

      {/* Transaction List Section */}
      <View style={[styles.lowerSection, { top: height * 0.35 }]}>
        <Text style={[styles.sectionHeader, { top: 0 }]}>
          Transaction List
        </Text>
        <View
          style={[styles.transactionList, { top: height * 0.05 }]}
          testID="zmain-transaction-list"
        />
      </View>

      {/* Buttons Section */}
      <TouchableOpacity
        style={[
          styles.sendButton,
          { left: width * 0.05, top: height * 0.9, opacity: qrScanningOpacity },
        ]}
        onPress={onSendPress}
        testID="zmain-send-button"
      >
        <Text style={styles.buttonText}>Send</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.receiveButton,
          { right: width * 0.05, top: height * 0.9, opacity: qrScanningOpacity },
        ]}
        onPress={onReceivePress}
        testID="zmain-receive-button"
      >
        <Text style={styles.buttonText}>Receive</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.centerButton,
          {
            left: width * 0.5 - width * 0.2 / 2,
            top: height * 0.9,
            opacity: qrScanningOpacity,
          },
        ]}
        onPress={onCenterPress}
        testID="zmain-center-button"
      >
        <Text style={styles.buttonText}>Center</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#000',
    width: '100%',
    height: '100%',
  },
  blackBackground: {
    position: 'absolute',
    backgroundColor: '#000',
  },
  menu: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    backgroundColor: '#000',
    color: '#fff',
    zIndex: 2,
  },
  menuButton: {
    position: 'absolute',
    zIndex: 3,
  },
  menuText: {
    color: '#fff',
    fontSize: 18,
  },
  menuSyncedIndicator: {
    position: 'absolute',
  },
  syncText: {
    fontSize: 14,
  },
  middleSection: {
    position: 'absolute',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,1)',
    borderRadius: 15,
    zIndex: 1,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#bb9645',
    textAlign: 'center',
  },
  addressList: {
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  addressListEndCap: {
    backgroundColor: 'rgba(0,0,0,1)',
  },
  lowerSection: {
    position: 'absolute',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,1)',
    borderRadius: 15,
    zIndex: 2,
  },
  transactionList: {
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  sendButton: {
    position: 'absolute',
    backgroundColor: '#bb9645',
    width: 120,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  receiveButton: {
    position: 'absolute',
    backgroundColor: '#303133',
    width: 120,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerButton: {
    position: 'absolute',
    backgroundColor: '#a6a6a6',
    width: 80,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ZMain;
