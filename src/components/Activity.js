import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Activity = () => {
  return (
    <SafeAreaView>
      <View style={styles.Container}>
        <Text style={{fontSize: 50}}>Hi~~</Text>
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
  },
});

export default Activity;
