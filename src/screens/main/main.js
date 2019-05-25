import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { StyleSheet, View, StatusBar, Dimensions, Text, TouchableOpacity, Button, AsyncStorage } from 'react-native';
import Index from '../example/index';

export default class MainScreen extends Component {

  minutesUntilMidnight = () => {
    var midnight = new Date();
    midnight.setHours( 24 );
    midnight.setMinutes( 0 );
    midnight.setSeconds( 0 );
    midnight.setMilliseconds( 0 );
    return ( midnight.getTime() - new Date().getTime() ) / 1000 / 60;
  }
  openReadingView(key) {
      if(this.minutesUntilMidnight() <= 0){
        AsyncStorage.clear();
      }
      AsyncStorage.getItem(key).then((res) => {
        this.props.navigation.push('ReadingScreen', {
          readingName: key,
          existingReading: res
        });
      })

  }
  render() {
    return (
      // <Provider store={store}>
        <View style={styles.wrapper}>
          {/* <StatusBar barStyle = "light-content" hidden = {false} translucent = {true} style={styles.statusBar}/> */}
          {/* <View style={styles.container}>
          <TouchableOpacity onPress={() => {this.openReadingView('health')}}>
            <View style={styles.readingButton}>
              <Text style={styles.ReadingName}>Health</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {this.openReadingView('family')}}>
            <View style={styles.readingButton}>
              <Text style={styles.ReadingName}>Family</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {this.openReadingView('career')}}>
            <View style={styles.readingButton}>
              <Text style={styles.ReadingName}>Career</Text> 
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {this.openReadingView('love')}}>
            <View style={styles.readingButton}>
              <Text style={styles.ReadingName}>Love</Text>
            </View>
          </TouchableOpacity>
          </View> */}
          <Index/>
        </View>
      // </Provider>
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
    flexDirection: 'column',
  },

  statusBar: {
    backgroundColor:"#363f45"
  },

  readingButton: {
    height: 100,
    marginTop: 20,
    width: Dimensions.get('window').width-20,
    backgroundColor: 'lightseagreen',
    justifyContent: 'center',
    alignItems: 'center'
  },

  ReadingName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  }
});