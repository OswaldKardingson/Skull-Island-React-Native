import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';

// Props Interface
interface Address {
  id: string;
  label: string;
  value: string;
  details?: string;
}

interface ZAddressListProps {
  theme: {
    width: number;
    height: number;
  };
  addresses: Address[];
  onAddressPress: (address: Address) => void;
  testID?: string;
}

const ZAddressList: React.FC<ZAddressListProps> = ({
  theme,
  addresses,
  onAddressPress,
  testID = 'z-address-list',
}) => {
  const { width, height } = theme;

  return (
    <View
      style={[
        styles.container,
        {
          width,
          height: height * 0.1625 - (width * 0.7) / 15 * 1.5,
        },
      ]}
      testID={testID}
    >
      <FlatList
        data={addresses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.listItem,
              {
                borderRadius: height * 0.015 / 2,
                width: width * 0.9,
              },
            ]}
            onPress={() => onAddressPress(item)}
            testID={`${testID}-item-${item.id}`}
          >
            <View style={styles.row}>
              {/* Column 1 */}
              <View style={styles.col1} testID={`${testID}-col1-${item.id}`} />

              {/* Column 2 (Label and Value) */}
              <View style={styles.col2}>
                <Text
                  style={[
                    styles.col2Top,
                    { width: width * 0.45, fontSize: (width * 0.45) / 22 * 1.5 },
                  ]}
                  testID={`${testID}-label-${item.id}`}
                >
                  {item.label}
                </Text>
                <Text
                  style={[
                    styles.col2Bottom,
                    { width: width * 0.45, fontSize: (width * 0.45) / 25 * 1.5 },
                  ]}
                  testID={`${testID}-value-${item.id}`}
                >
                  {item.value}
                </Text>
              </View>

              {/* Column 3 */}
              <View style={styles.col3} testID={`${testID}-col3-${item.id}`} />

              {/* Column 4 (Details) */}
              <View style={styles.col4}>
                <Text
                  style={[
                    styles.col4Top,
                    { width: width * 0.35, fontSize: (width * 0.45) / 20 * 1.5 },
                  ]}
                  testID={`${testID}-details-${item.id}`}
                >
                  {item.details}
                </Text>
              </View>

              {/* Column 5 */}
              <View style={styles.col5} testID={`${testID}-col5-${item.id}`} />
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.listContainer}
        testID={`${testID}-list`}
      />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  listContainer: {
    paddingBottom: 10,
  },
  listItem: {
    backgroundColor: '#111111',
    marginBottom: 10,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  col1: {
    flex: 0.0125,
  },
  col2: {
    flex: 0.475,
  },
  col2Top: {
    color: '#907435',
    textAlign: 'left',
  },
  col2Bottom: {
    color: 'grey',
    textAlign: 'left',
  },
  col3: {
    flex: 0.025,
  },
  col4: {
    flex: 0.375,
  },
  col4Top: {
    color: '#907435',
    textAlign: 'left',
  },
  col5: {
    flex: 0.0125,
  },
});

export default ZAddressList;
