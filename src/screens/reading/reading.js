import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { StyleSheet, View, StatusBar, Dimensions, Text, TouchableOpacity, Button, Image } from 'react-native';
import ReadingView from './ReadingView';
import data from '../../data/data';

export default class ReadingScreen extends Component {

    constructor(props){
      super(props);
      this.state = {
        readingVisible: false,
        cardDetails: {
          readingName: this.props.navigation.getParam('readingName'),
          cardName: '',
          destiny: '',
          image:'',
          karma: '',
        }
      }
      this.openReading = this.openReading.bind(this);
      this.cards = Object.keys(data);
    }

    openReading = () => {
      let cardName = this.cards[Math.floor(Math.random() * Math.floor(77))];
      let card = data[cardName];
      let readingName = this.state.cardDetails.readingName;
      this.setState({
        readingVisible: true,
        cardDetails: {
          cardName: cardName,
          destiny: card[readingName].destiny,
          karma: card[readingName].karma,
          image: data[cardName].image
        }
      })
    }

    render() {
      return (
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <Text style={styles.ReadingName}>{this.state.cardDetails.readingName} Screen</Text>
          <TouchableOpacity onPress={this.openReading}>
          <View style={styles.readingButton}>
            <Text style={styles.ReadingName}>Click Card</Text>
          </View>
          </TouchableOpacity>
          {this.state.readingVisible ? <ReadingView cardDetails = {this.state.cardDetails}/>: null}
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