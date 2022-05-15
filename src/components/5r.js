import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import CustomButton from './CustomButton';

type Props = {};
export default class App extends Component<Props> {
  _pushCheck() {
    this.props.navigator.push({
      screen: 'AwesomeProject.CheckList', // unique ID registered with Navigation.registerScreen
      title: 'CheckList', // navigation bar title of the pushed screen (optional)
      passProps: {}, // Object that will be passed as props to the pushed screen (optional)
    });
  }

  _pushChart() {
    this.props.navigator.push({
      screen: 'AwesomeProject.info', // unique ID registered with Navigation.registerScreen
      title: 'Chart', // navigation bar title of the pushed screen (optional)
      passProps: {}, // Object that will be passed as props to the pushed screen (optional)
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header} />
        <View style={styles.title}>
          <Text style={{ fontSize: 35, color: 'white' }}>Activity Part</Text>
        </View>
        <View style={styles.content}>
          <Image
            style={{ height: '100%', width: '100%', resizeMode: 'contain' }}
            source={require('./img.jpg')}
          />
        </View>
        <View style={styles.footer}>
          <CustomButton
            buttonColor={'#444'}
            title={'5R Check List'}
            onPress={this._pushCheck.bind(this)}
          />
          <CustomButton
            buttonColor={'#023e73'}
            title={'5R Information'}
            onPress={this._pushChart.bind(this)}
          />
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: 'white',
    },
    header: {
      width:'100%',
      height:'5%',
      //backgroundColor: '#ff9a9a',
    },
    title: {
      width:'100%',
      height:'18%',
      justifyContent: 'center',
      //backgroundColor: '#9aa9ff',
    },
    content: {
      flex: 1,
      paddingLeft:10,
      paddingRight:10,
      paddingBottom:30,
      //backgroundColor: '#d6ca1a',
    },
    footer: {
      width:'100%',
      height:'20%',
      //backgroundColor: '#1ad657',
    },
  });

export default 5r;

//image파일 필요