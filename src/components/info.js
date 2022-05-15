import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const info = () => {
  return (
    <SafeAreaView>
      <View style={styles.Container}>
        <Text style={{ fontSize: 7 }}>About 5R</Text>
        <Text style={{ fontSize: 5 }}>Refuse</Text>
        <Text style={{ fontSize: 3 }}>-refuse unnecessary products</Text>
        <Text style={{ fontSize: 5 }}>Reduce</Text>
        <Text style={{ fontSize: 3 }}>-reduce the consumtion</Text>
        <Text style={{ fontSize: 5 }}>Reuse</Text>
        <Text style={{ fontSize: 3 }}>-reuse multi-use products</Text>
        <Text style={{ fontSize: 5 }}>Recycle</Text>
        <Text style={{ fontSize: 3 }}>-recycle recyclables products</Text>
        <Text style={{ fontSize: 5 }}>Rot</Text>
        <Text style={{ fontSize: 3 }}>-use products that rot easily</Text>
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

export default info;
