import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

export default class AuthScreen extends Component {
    componentDidMount() {
      // do stuff while splash screen is shown
        // After having done stuff (such as async tasks) hide the splash screen
        SplashScreen.hide();
    }
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <Button
            title="Login"
            onPress={() => this.props.navigation.navigate('MainScreen')}
          />
        </View>
      );
    }
  }