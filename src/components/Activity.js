import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Activity = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.case1} />
        <View style={styles.case2} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'white',
  },
  case1: {
    flex: 1,
    backgroundColor: 'red',
  },
  case2: {
    flex: 1,
    backgroundColor: 'green',
  },
});

export default Activity;
