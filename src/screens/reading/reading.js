import React, { Component } from 'react';
import { AsyncStorage, Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import data from '../../data/data';
import ReadingView from './ReadingView';

export default class ReadingScreen extends Component {

    constructor(props){
      super(props);
      let readingName = this.props.navigation.getParam('readingName');
      let cardName = this.props.navigation.getParam('existingReading');
      let destiny = '';
      let image = '';
      let karma = '';
      if(cardName!==null){
        let card = data[cardName];
        destiny = card[readingName].destiny;
        karma = card[readingName].karma;
        image = card[readingName].image;
      }

      this.state = {
        readingVisible: cardName !==null ? true: false,
        cardDetails: {
          readingName: readingName,
          cardName: cardName!==null ? cardName : '',
          destiny: destiny,
          image: image,
          karma: karma,
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
        readingDone: true,
        readingVisible: true,
        cardDetails: {
          cardName: cardName,
          destiny: card[readingName].destiny,
          karma: card[readingName].karma,
          image: data[cardName].image
        }
      }, () => {
        AsyncStorage.setItem(readingName, cardName);
      });
    }

    render() {
      return (
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <Text style={styles.ReadingName}>{this.state.cardDetails.readingName} Screen</Text>
          {!this.state.readingVisible ? <TouchableOpacity onPress={this.openReading}>
          <View style={styles.readingButton}>
            <Text style={styles.ReadingName}>Click Card</Text>
          </View>
          </TouchableOpacity>: null}
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