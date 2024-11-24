import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import ChainOps from '../containers/chainsync';
import LowerBar from '../containers/lowerbar';
import ZMain from '../containers/zmain';
import Send from '../containers/send';
import Receive from '../containers/receive';
import PrivateKey from '../containers/privatekey';
import PassPhrase from '../containers/passphrase';
import Reindex from '../containers/reindex';
import Qr from '../containers/qr';
import ZTransaction from '../containers/ztransaction';
import Reconnect from '../containers/reconnect';

const MainPage = () => {
  const context = useSelector((state) => state.context);
  const mainSubPage = useSelector((state) => state.mainSubPage);

  const mainStyle = context.qrScanning
    ? [styles.hidden]
    : [styles.visible];

  const pageMapping = {
    mainPage: (
      <View style={styles.mainBody}>
        <ChainOps />
        <ZMain />
      </View>
    ),
    receivePage: <Receive />,
    privateKeyPage: <PrivateKey />,
    passPhrasePage: <PassPhrase />,
    reindexPage: <Reindex />,
    transactionPage: <ZTransaction />,
    reconnectPage: <Reconnect />,
  };

  const currentPage = Object.keys(pageMapping).find(
    (key) => mainSubPage[key] === 'visible'
  );

  return (
    <View style={styles.container}>
      <View style={mainStyle}>
        <View style={styles.background}>
          <View style={styles.body}>
            {pageMapping[currentPage]}
            <Send />
            <LowerBar />
          </View>
        </View>
      </View>
      <Qr />
    </View>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Black background
  },
  hidden: {
    opacity: 0,
    display: 'none',
  },
  visible: {
    opacity: 1,
    display: 'flex',
  },
  background: {
    flex: 1,
    backgroundColor: '#000',
  },
  body: {
    flex: 1,
    padding: 10,
  },
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
