import React, {Component} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <StatusBar barStyle = "light-content" hidden = {false} translucent = {true} style={styles.statusBar}/>
        <View style={styles.container}>
          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1 
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#363f45',
  },
  statusBar: {
    backgroundColor:"#363f45"
  }
});
