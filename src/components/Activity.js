import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Activity = () => {
  return (
    <SafeAreaView>
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'powderblue',
            flexDirection: 'row',
          }}
        >
          <View style={{ flex: 1, backgroundColor: 'red' }} />
          <View style={{ flex: 3, backgroundColor: 'blue' }} />
        </View>
        <View style={{ flex: 2, backgroundColor: 'skyblue' }} />
        <View style={{ flex: 3, backgroundColor: 'steelblue' }} />
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
