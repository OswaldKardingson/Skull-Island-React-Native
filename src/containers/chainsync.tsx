import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import {
  setHeight,
  setSyncedBlocks,
  setRefreshSecondsRemaining,
  setAddress,
  setBalance,
  setSynced,
  setSaving,
  setZAddresses,
  setTAddresses,
  setMenuReady,
  setRefreshAddresses,
  setTxList,
  setWalletInUse,
  setDisconnected,
  setActiveServer,
} from '../actions/Context';
import {
  setReconnectPage,
  setTransactionPage,
  setReindexPage,
  setPassPhrasePage,
  setPrivateKeyPage,
  setReceivePage,
  setSendPage,
  setMainPage,
} from '../actions/MainSubPage';
import { coins } from '../utils/coins';
import { balance, list, sync, syncStatus, info, save, unlock } from '../utils/litewallet';
import PirateLogo from '../assets/svg/pirate_logo.svg'; // Use the correct import for SVG

// Props Interface
interface ChainSyncProps {
  setReconnectPage: (visibility: string) => void;
  setTransactionPage: (visibility: string) => void;
  setReindexPage: (visibility: string) => void;
  setPassPhrasePage: (visibility: string) => void;
  setPrivateKeyPage: (visibility: string) => void;
  setReceivePage: (visibility: string) => void;
  setSendPage: (visibility: string) => void;
  setMainPage: (visibility: string) => void;
  setHeight: (height: number) => void;
  setSyncedBlocks: (blocks: number) => void;
  setRefreshSecondsRemaining: (seconds: number) => void;
  setWalletInUse: (inUse: boolean) => void;
  setRefreshAddresses: (refresh: boolean) => void;
  setTAddresses: (addresses: any[]) => void;
  setZAddresses: (addresses: any[]) => void;
  setTxList: (transactions: any[]) => void;
  setMenuReady: (ready: boolean) => void;
  setSynced: (synced: boolean) => void;
  setSaving: (saving: boolean) => void;
  setAddress: (address: string) => void;
  setBalance: (balance: number) => void;
  setDisconnected: (disconnected: boolean) => void;
  setActiveServer: (server: string) => void;
  context: {
    saving: boolean;
    syncedBlocks: number;
    address: string;
    refreshAddresses: boolean;
    menuReady: boolean;
    transactionList: any[];
    height: number;
    currencyValue: number;
    BTCValue: number;
  };
  settings: { currentCoin: string };
  mainSubPage: { mainPage: string };
}

// State Interface
interface ChainSyncState {
  walletBalance: number;
  walletHeight: number;
  DownloadPercentage: number;
  chainHeight: number;
  syncing: boolean;
  walletError: boolean;
  errorCount: number;
  syncWalletTimer: any;
  updateTimer: any;
  syncAddressesTimer: any;
  saveWalletCounter: number;
  firstRun: boolean;
  syncTime: number;
}

// Component Class
class ChainSync extends Component<ChainSyncProps, ChainSyncState> {
  constructor(props: ChainSyncProps) {
    super(props);

    this.state = {
      walletBalance: 0.0,
      walletHeight: 0,
      DownloadPercentage: 0,
      chainHeight: 1,
      syncing: false,
      walletError: false,
      errorCount: 0,
      syncWalletTimer: null,
      updateTimer: null,
      syncAddressesTimer: null,
      saveWalletCounter: 0,
      firstRun: true,
      syncTime: 0,
    };
  }

  // Fetch Wallet Status
  async getWalletStatus() {
    try {
      this.props.setWalletInUse(true);
      if (!this.props.context.saving) {
        // Fetch wallet info, balance, and sync status
        const walletInfo = JSON.parse(await info());
        const walletBalance = JSON.parse(await balance());
        const walletStatus = JSON.parse(await syncStatus());

        this.setState({
          walletBalance: (walletBalance.verified_zbalance + walletBalance.tbalance).toFixed(8),
          walletHeight: walletStatus.end_block + walletStatus.synced_blocks,
          chainHeight: walletInfo.latest_block_height,
        });

        // Set synced status
        this.props.setSynced(
          walletInfo.latest_block_height <= walletStatus.end_block + walletStatus.synced_blocks + 10
        );
        this.props.setHeight(walletInfo.latest_block_height);
        this.props.setSyncedBlocks(walletStatus.end_block + walletStatus.synced_blocks);
      }
    } catch (error) {
      this.setState({ walletError: true });
    } finally {
      this.props.setWalletInUse(false);
    }
  }

  // Update Wallet Periodically
  async updateWallet() {
    if (!this.props.context.saving && Date.now() > this.state.syncTime + 30000) {
      sync(); // Trigger wallet sync
      this.setState({ syncTime: Date.now() });
    }
  }

  // Lifecycle Methods
  componentDidMount() {
    this.getWalletStatus();
    this.updateWallet();
  }

  componentWillUnmount() {
    clearTimeout(this.state.syncWalletTimer);
    clearTimeout(this.state.updateTimer);
  }

  render() {
    const { walletError, walletBalance } = this.state;
    const { currencyValue, BTCValue } = this.props.context;

    return (
      <View style={styles.container}>
        {walletError ? (
          <View style={styles.errorContainer}>
            <PirateLogo width={100} height={100} />
            <Text style={styles.errorText}>Wallet Sync Error!!!</Text>
            <Text style={styles.errorSubText}>Recovering...</Text>
          </View>
        ) : (
          <View style={styles.balanceContainer}>
            <Text style={styles.balanceText}>
              {((walletBalance / 1e08) * currencyValue).toFixed(6)} USD
            </Text>
            <Text style={styles.balanceText}>
              {((walletBalance / 1e08) * BTCValue).toFixed(8)} BTC
            </Text>
            <PirateLogo width={100} height={100} />
            <Text style={styles.balanceText}>
              {(walletBalance / 1e08).toFixed(8)} ARRR
            </Text>
          </View>
        )}
      </View>
    );
  }
}

// Styles
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff' },
  errorContainer: { alignItems: 'center', marginBottom: 20 },
  balanceContainer: { alignItems: 'center', marginBottom: 20 },
  balanceText: { fontSize: 18, fontWeight: 'bold', marginVertical: 4 },
  errorText: { fontSize: 20, color: 'red', marginVertical: 4 },
  errorSubText: { fontSize: 16, color: 'gray', marginVertical: 2 },
});

// Redux Integration
const mapStateToProps = (state: any) => ({
  context: state.context,
  settings: state.settings,
  mainSubPage: state.mainSubPage,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      setReconnectPage,
      setTransactionPage,
      setReindexPage,
      setPassPhrasePage,
      setPrivateKeyPage,
      setReceivePage,
      setSendPage,
      setMainPage,
      setHeight,
      setSyncedBlocks,
      setRefreshSecondsRemaining,
      setWalletInUse,
      setRefreshAddresses,
      setTAddresses,
      setZAddresses,
      setTxList,
      setMenuReady,
      setAddress,
      setBalance,
      setSynced,
      setSaving,
      setDisconnected,
      setActiveServer,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(ChainSync);
