import React, { Component } from 'react';
import { AsyncStorage, Dimensions, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import data from '../../data/data';
import ReadingView from './ReadingView';
import FlipCard from 'react-native-flip-card';

CardImage = (props) => {
  let {back, state} = props;

  let source = state.cardDetails.image ? state.cardDetails.image : null;
  if(back){
    source = require('../../assets/images/card_back.png')
  } else {
  }
  return (
    <View style={styles.readingButton}>
      <Image resizeMethod="resize" source={source} style={{width: 50, height: 100}}/>
    </View>
  )
}

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
        image = card.image;
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


      this.getReading = this.getReading.bind(this);
      this.saveReading = this.saveReading.bind(this);
      this.cards = Object.keys(data);
    }

    getReading = () => {
      let cardName = this.cards[Math.floor(Math.random() * Math.floor(77))];
      let card = data[cardName];
      let readingName = this.state.cardDetails.readingName;
      this.setState({
        cardDetails: {
          readingName: readingName,
          cardName: cardName,
          destiny: card[readingName].destiny,
          karma: card[readingName].karma,
          image: data[cardName].image
        }
      });
    }

    saveReading = () => {
      this.setState({
        readingVisible: true
      },() => {
        AsyncStorage.setItem(this.state.cardDetails.readingName, this.state.cardDetails.cardName);
      });
    }

    componentDidMount(){
      if(!this.state.readingVisible){
        this.getReading();
      }
    }

    render() {
      return (
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <Text style={styles.ReadingName}>{this.state.cardDetails.readingName} Screen</Text>
            <FlipCard
                flipHorizontal={true}
                flipVertical={false}
                onFlipEnd={()=>{this.saveReading()}}
                flip={this.state.readingVisible}
                clickable={!this.state.readingVisible}
            >
              <CardImage back={true} state={this.state} />
              <CardImage back={false} state={this.state}/>
            </FlipCard>
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
      width: 50,
      justifyContent: 'center',
      backgroundColor: 'cyan',
      alignItems: 'center',
    },
  
    ReadingName: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 30,
    }
  });