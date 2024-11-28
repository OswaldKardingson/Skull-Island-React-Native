import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

// Props Interface
interface TransactionProps {
  theme: {
    width: number;
    height: number;
  };
  title: string;
  details: Array<{ fieldName: string; fieldData: string }>;
  onBackPress: () => void;
  onExplorerPress: () => void;
  testID?: string;
}

const Transaction: React.FC<TransactionProps> = ({
  theme,
  title,
  details,
  onBackPress,
  onExplorerPress,
  testID = 'transaction-container',
}) => {
  const { width, height } = theme;

  return (
    <View style={[styles.container, { width, height: height * 0.9 }]} testID={testID}>
      {/* Title */}
      <Text
        style={[
          styles.title,
          { top: height * 0.05, height: width * (1.5 / 21), fontSize: width * (1.5 / 21) },
        ]}
        testID={`${testID}-title`}
      >
        {title}
      </Text>

      {/* Details Scroll */}
      <ScrollView
        style={[
          styles.overScroll,
          { top: height * 0.0125, height: height * 0.89, width },
        ]}
        testID={`${testID}-over-scroll`}
      >
        <View
          style={[
            styles.details,
            {
              top: height * 0.05 + width * (1.5 / 21),
              height: height * 0.89 - height * 0.05 - width * (1.5 / 21),
              width,
            },
          ]}
          testID={`${testID}-details`}
        >
          {details.map((detail, index) => (
            <View key={index} testID={`${testID}-detail-${index}`}>
              <Text
                style={[
                  styles.detailFieldName,
                  { fontSize: width * (1.5 / 44), width: width * 0.95 },
                ]}
              >
                {detail.fieldName}
              </Text>
              <Text
                style={[
                  styles.detailFieldData,
                  { fontSize: width * (1.5 / 44), width: width * 0.9 },
                ]}
              >
                {detail.fieldData}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Button Bar */}
      <View style={styles.buttonBar} testID={`${testID}-button-bar`}>
        <TouchableOpacity
          onPress={onBackPress}
          style={[
            styles.backButton,
            {
              left: width * 0.25 - (width * 0.325) / 2,
              width: width * 0.325,
              height: height * 0.075,
              borderRadius: height * 0.075 / 2,
            },
          ]}
          testID={`${testID}-back-button`}
        >
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onExplorerPress}
          style={[
            styles.explorerButton,
            {
              left: width * 0.75 - (width * 0.325) / 2,
              width: width * 0.325,
              height: height * 0.075,
              borderRadius: height * 0.075 / 2,
            },
          ]}
          testID={`${testID}-explorer-button`}
        >
          <Text style={styles.buttonText}>Explorer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 98,
  },
  title: {
    position: 'absolute',
    left: 0,
    color: '#bb9645',
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Bai Jamjuree',
  },
  overScroll: {
    position: 'absolute',
    left: 0,
  },
  details: {
    position: 'absolute',
    left: 0,
    color: '#bb9645',
    fontWeight: 'bold',
    fontFamily: 'Bai Jamjuree',
  },
  detailFieldName: {
    position: 'relative',
    left: '2.5%',
    color: '#bb9645',
    textAlign: 'left',
    fontWeight: 'bold',
    fontFamily: 'Bai Jamjuree',
  },
  detailFieldData: {
    position: 'relative',
    left: '5%',
    color: 'white',
    textAlign: 'left',
    fontWeight: 'bold',
    fontFamily: 'Bai Jamjuree',
  },
  buttonBar: {
    position: 'relative',
    left: 0,
  },
  backButton: {
    position: 'absolute',
    top: 0,
    backgroundColor: 'rgba(187,150,69,1)',
    borderWidth: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  explorerButton: {
    position: 'absolute',
    top: 0,
    backgroundColor: 'grey',
    borderWidth: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Transaction;
