import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default class ScoreChart extends Component<Props> {
  _pop() {
    this.props.navigator.pop({
      animated: true, // does the pop have transition animation or does it happen immediately (optional)
      animationType: 'fade', // 'fade' (for both) / 'slide-horizontal' (for android) does the pop have different transition animation (optional)
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>5R Score Chart</Text>
        <View style={styles.bodyContainer}>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => {
              this.setState({ inputText: text });
            }}
            placeholder="아무거나 입력해주세요."
          />
          <Button title="제출" onPress={this.submitBtn} />
          <Text style={styles.showText}>{this.state.text}</Text>
        </View>
        <View style={styles.footer}>
          <CustomButton
            buttonColor={'#444'}
            title={'취소'}
            onPress={this._pop.bind(this)}
          />
        </View>
      </View>
    );
  }
}

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



export default ScoreChart;


///차트 코드 구현할것