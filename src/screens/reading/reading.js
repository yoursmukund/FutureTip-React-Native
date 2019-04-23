import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { StyleSheet, View, StatusBar, Dimensions, Text, TouchableOpacity, Button } from 'react-native';

export default class ReadingScreen extends Component {

    constructor(props){
      super(props);
      this.state = {
        showText: false
      }

      this.openReading = this.openReading.bind(this);
    }

    openReading = () => {
      this.setState({showText: true})
    }

    render() {
  
      return (
          <View style={styles.wrapper}>
            <View style={styles.container}>
              <Text style={styles.ReadingName}>{this.props.navigation.getParam('readingName')} Screen</Text>
              <TouchableOpacity onPress={this.openReading}>
                <View style={styles.readingButton}>
                  <Text style={styles.ReadingName}>Click Card</Text>
                </View>
              </TouchableOpacity>
              {this.state.showText && <Text style={styles.ReadingName}>Reading text</Text>}
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