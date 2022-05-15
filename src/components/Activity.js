import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Activity = () => {
  return (
    <SafeAreaView>
      <View style={styles.case1} />
      <View style={styles.case2} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  case1: {
    height: '50%',
    width: '100%',
    backgroundColor: 'white',
  },
  case2: {
    height: '50%',
    width: '100%',
    backgroundColor: 'green',
  },
});

export default Activity;

// 5Rjs에서 구현중
