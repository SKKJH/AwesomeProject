import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const UselessTextInput = () => {
  const [number1, onChangeText] = React.useState(null);
}

export default class CheckList extends Component<Props> {
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
            value={number1}
            placeholder="Refuse."
            keyboardType = "numeric"
          />
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => {
              this.setState({ inputText: text });
            }}
            value={number1}
            placeholder="Reduce."
            keyboardType = "numeric"
          />
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => {
              this.setState({ inputText: text });
            }}
            value={number1}
            placeholder="Reuse."
            keyboardType = "numeric"
          />
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => {
              this.setState({ inputText: text });
            }}
            value={number1}
            placeholder="Recycle."
            keyboardType = "numeric"
          />
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => {
              this.setState({ inputText: text });
            }}
            value={number1}
            placeholder="Rot."
            keyboardType = "numeric"
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
  container: {
    backgroundColor: '#FFEAD0',
    paddingHorizontal: 30,
    flex: 1,
  },
  headerText: {
    paddingTop: 50,
    alignItems: 'center',
    fontSize: 30,
  },
  bodyContainer: {
    backgroundColor: '#FDF5DC',
    paddingHorizontal: 20,
    marginVertical: 30,
    flex: 1
  },
  textInput: {
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 10,
    height: 40,
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1
  },
  showText: {
    marginTop: 10,
    fontSize: 25,
  }
})

export default CheckList;


// 입력 값 형변환 및 변수로 저장
//propos 해결
//styles text input 사이즈 조절