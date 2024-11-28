import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

// Props Interface
interface Transaction {
  id: string;
  memo: string;
  inbound: boolean;
  amount: string;
  date: string;
  icon?: string | null; // Optional icon for the transaction
}

interface TransactionListProps {
  theme: {
    width: number;
    height: number;
  };
  transactions: Transaction[];
  onMemoPress: (transaction: Transaction) => void;
  testID?: string;
}

const TransactionList: React.FC<TransactionListProps> = ({
  theme,
  transactions,
  onMemoPress,
  testID = 'transaction-list-container',
}) => {
  const { width, height } = theme;

  return (
    <View
      style={[styles.container, { width, height: height * 0.55 }]}
      testID={testID}
    >
      <ScrollView
        style={[
          styles.overScroll,
          { width: width * 0.9, height: height * 0.55 },
        ]}
        contentContainerStyle={styles.scrollContent}
        testID={`${testID}-scroll-view`}
      >
        {transactions.map((transaction) => (
          <TouchableOpacity
            key={transaction.id}
            style={[
              styles.transactionItem,
              { borderRadius: height * 0.015 / 2 },
            ]}
            onPress={() => onMemoPress(transaction)}
            testID={`${testID}-transaction-${transaction.id}`}
          >
            <View style={styles.row}>
              {/* Icon or Placeholder */}
              <View style={styles.iconContainer}>
                {transaction.icon ? (
                  <Image
                    source={{ uri: transaction.icon }}
                    style={[
                      styles.transactionIcon,
                      { width: width * 0.05, height: width * 0.05 },
                    ]}
                    testID={`${testID}-icon-${transaction.id}`}
                  />
                ) : (
                  <View
                    style={[
                      styles.placeholderIcon,
                      {
                        width: width * 0.05,
                        height: width * 0.05,
                        borderRadius: width * 0.025,
                      },
                    ]}
                    testID={`${testID}-placeholder-icon-${transaction.id}`}
                  />
                )}
              </View>

              {/* Transaction Details */}
              <View style={styles.details}>
                <Text style={styles.memoText} testID={`${testID}-memo-${transaction.id}`}>
                  {transaction.memo}
                </Text>
                <View style={styles.subDetails}>
                  <Text style={styles.amountText}>{transaction.amount}</Text>
                  <Text style={styles.dateText}>{transaction.date}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}

        {/* Spacer to handle bottom padding */}
        <View
          style={{ height: height * 0.25 }}
          testID={`${testID}-bottom-spacer`}
        />
      </ScrollView>
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
  overScroll: {
    position: 'absolute',
    left: '5%',
  },
  scrollContent: {
    paddingBottom: 20,
  },
  transactionItem: {
    backgroundColor: '#111111',
    marginBottom: 10,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  transactionIcon: {
    resizeMode: 'contain',
  },
  placeholderIcon: {
    backgroundColor: '#737373',
  },
  details: {
    marginLeft: 10,
    flex: 1,
  },
  memoText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  subDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  amountText: {
    color: '#95c623',
    fontSize: 14,
  },
  dateText: {
    color: '#737373',
    fontSize: 12,
  },
});



export default TransactionList;
