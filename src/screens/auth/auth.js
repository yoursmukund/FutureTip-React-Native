import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

export default class AuthScreen extends Component {
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