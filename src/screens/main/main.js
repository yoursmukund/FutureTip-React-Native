import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { StyleSheet, View, StatusBar, Dimensions, Text, TouchableOpacity, Button } from 'react-native';


export default class MainScreen extends Component {
  openReadingView(key) {
      this.props.navigation.push('ReadingScreen', {
        readingName: key
      });
  }
  render() {
    return (
      // <Provider store={store}>
        <View style={styles.wrapper}>
          {/* <StatusBar barStyle = "light-content" hidden = {false} translucent = {true} style={styles.statusBar}/> */}
          <View style={styles.container}>
          <TouchableOpacity onPress={() => {this.openReadingView('Health')}}>
            <View style={styles.readingButton}>
              <Text style={styles.ReadingName}>Health</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {this.openReadingView('Family')}}>
            <View style={styles.readingButton}>
              <Text style={styles.ReadingName}>Family</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {this.openReadingView('Career')}}>
            <View style={styles.readingButton}>
              <Text style={styles.ReadingName}>Career</Text> 
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {this.openReadingView('Love')}}>
            <View style={styles.readingButton}>
              <Text style={styles.ReadingName}>Love</Text>
            </View>
          </TouchableOpacity>
          </View>
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