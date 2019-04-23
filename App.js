import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { StyleSheet, View, StatusBar, Dimensions, Text, TouchableOpacity, Button } from 'react-native';
import MainScreen from './src/screens/main/main';
import AuthScreen from './src/screens/auth/auth';
import ReadingScreen from './src/screens/reading/reading';

// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import reducer from './store/reducer'

// const store = createStore(reducer);

const AppNavigator = createStackNavigator(
  {
    Home: AuthScreen,
    MainScreen: MainScreen,
    ReadingScreen: ReadingScreen
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);
