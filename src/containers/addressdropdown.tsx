// File: AddressDropdown.tsx
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { setAddress, setBalance } from '../actions/Context';
import { setAddressList } from '../actions/MainSubPage';

// Define Redux state interfaces
interface MainSubPageState {
  addressList: string; // Reflects visibility: 'visible' or 'none'
}

interface ContextState {
  zAddresses: { address: string; balance: number }[];
  address: string;
  balance: number;
}

// Define the props interface
interface AddressDropdownProps {
  mainSubPage: MainSubPageState;
  context: ContextState;
  setAddress: (address: string) => void;
  setBalance: (balance: number) => void;
  setAddressList: (visibility: string) => void; // Adjusted to match Redux action
}

class AddressDropdown extends Component<AddressDropdownProps> {
  constructor(props: AddressDropdownProps) {
    super(props);
    this.toggleList = this.toggleList.bind(this);
  }

  // Toggle dropdown list visibility
  toggleList() {
    const { mainSubPage, setAddressList } = this.props;
    setAddressList(mainSubPage.addressList === 'visible' ? 'none' : 'visible');
  }

  // Render individual address item
  renderAddressItem = ({ item }: { item: { address: string; balance: number } }) => {
    const { setAddress, setBalance } = this.props;

    return (
      <TouchableOpacity
        style={styles.addressButton}
        onPress={() => {
          this.toggleList();
          setAddress(item.address);
          setBalance(item.balance);
        }}
      >
        <View style={styles.addressItem}>
          <View style={styles.col2}>
            <Text style={styles.col2Text}>
              {`Address: ${item.address.substr(0, 6)}...${item.address.substr(-6, 6)}`}
            </Text>
          </View>
          <View style={styles.col4}>
            <Text style={styles.col4Text}>
              {`ARRR: ${(item.balance / 1e08).toFixed(8)}`}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    const { context, mainSubPage } = this.props;
    const listVisible = mainSubPage.addressList === 'visible';

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.dropdownButton} onPress={this.toggleList}>
          <View style={styles.dropdownItem}>
            <View style={styles.col2}>
              <Text style={styles.col2Text}>
                {`Address: ${context.address.substr(0, 6)}...${context.address.substr(-6, 6)}`}
              </Text>
            </View>
            <View style={styles.col4}>
              <Text style={styles.col4Text}>
                {`ARRR: ${(context.balance / 1e08).toFixed(8)}`}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        {listVisible && (
          <View style={styles.dropdownContent}>
            <Text style={styles.title}>Select Address</Text>
            <FlatList
              data={context.zAddresses}
              keyExtractor={(item) => item.address}
              renderItem={this.renderAddressItem}
            />
          </View>
        )}
      </View>
    );
  }
}

// Styles for the component
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  dropdownButton: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    marginBottom: 5,
  },
  dropdownItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  col2: {
    flex: 3,
  },
  col2Text: {
    fontSize: 14,
  },
  col4: {
    flex: 1,
    alignItems: 'flex-end',
  },
  col4Text: {
    fontSize: 14,
  },
  dropdownContent: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  addressButton: {
    paddingVertical: 8,
  },
  addressItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

// Map state to props
const mapStateToProps = (state: any): Pick<AddressDropdownProps, 'mainSubPage' | 'context'> => ({
  mainSubPage: state.mainSubPage,
  context: state.context,
});

// Map dispatch to props
const mapDispatchToProps = (dispatch: Dispatch): Pick<
  AddressDropdownProps,
  'setAddress' | 'setBalance' | 'setAddressList'
> =>
  bindActionCreators(
    {
      setAddress,
      setBalance,
      setAddressList, // This is aligned to take 'string' for visibility
    },
    dispatch
  );

// Connect the component to Redux
export default connect(mapStateToProps, mapDispatchToProps)(AddressDropdown);
