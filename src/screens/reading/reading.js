import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { StyleSheet, View, StatusBar, Dimensions, Text, TouchableOpacity, Button } from 'react-native';

export default class ReadingScreen extends Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>{this.props.navigation.getParam('readingName')} Screen</Text>
        </View>
      );
    }
  }