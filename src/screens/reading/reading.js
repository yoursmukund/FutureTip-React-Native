import React, { Component } from 'react';
import { AsyncStorage, Image, StyleSheet, Text, View, Animated, StatusBar, ScrollView, Dimensions } from 'react-native';
import FlipCard from 'react-native-flip-card';
import data from '../../data/data';
import ReadingView from './ReadingView';
import style, { colors } from '../main/styles/index.style';
import LinearGradient from 'react-native-linear-gradient';

CardImage = (props) => {
  let { back, state } = props;

  let source = state.cardDetails.image ? state.cardDetails.image : null;
  if (back) {
    source = require('../../assets/images/card_back.png')
  } else {
  }
  return (
    <Image resizeMethod="resize" source={source} style={{ width: 120, height: 200 }} />
  )
}

export default class ReadingScreen extends Component {

  constructor(props) {
    super(props);
    let readingName = this.props.navigation.getParam('readingName');
    let cardName = this.props.navigation.getParam('existingReading');
    let destiny = '';
    let image = '';
    let karma = '';
    if (cardName !== null) {
      let card = data[cardName];
      destiny = card[readingName].destiny;
      karma = card[readingName].karma;
      image = card.image;
    }

    this.state = {
      readingVisible: cardName !== null ? true : false,
      cardDetails: {
        readingName: readingName,
        cardName: cardName !== null ? cardName : '',
        destiny: destiny,
        image: image,
        karma: karma,
      }
    }


    this.getReading = this.getReading.bind(this);
    this.saveReading = this.saveReading.bind(this);
    this.cards = Object.keys(data);
  }

  get gradient() {
    return (
      <LinearGradient
        colors={[colors.background1, colors.background2]}
        startPoint={{ x: 1, y: 0 }}
        endPoint={{ x: 0, y: 1 }}
        style={style.gradient}
      />
    );
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
    }, () => {
      AsyncStorage.setItem(this.state.cardDetails.readingName, this.state.cardDetails.cardName);
      AsyncStorage.setItem('date', (new Date()).getDate().toString());
    });
  }

  componentDidMount() {
    if (!this.state.readingVisible) {
      this.getReading();
    }
  }

  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar
          translucent={true}
          backgroundColor={'rgba(0, 0, 0, 0.3)'}
          barStyle={'light-content'}
        />
        {this.gradient}
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-evenly', alignItems: 'center' }}>
          <View style={styles.wrapper}>
            {!this.state.readingVisible ? <Text style={styles.relaxText}>Focus, relax and pick the card below</Text> : null}
            {this.state.readingVisible ? <Text style={styles.cardName}>{this.state.cardDetails.cardName.replace('_', ' ').toUpperCase()}</Text> : null}
            <FlipCard
              style={styles.flipCard}
              flipHorizontal={true}
              flipVertical={false}
              onFlipEnd={() => { this.saveReading() }}
              flip={this.state.readingVisible}
              clickable={!this.state.readingVisible}
            >
              <CardImage back={true} state={this.state} />
              <CardImage back={false} state={this.state} />
            </FlipCard>
          </View>
          {this.state.readingVisible ? <ReadingView cardDetails={this.state.cardDetails} /> : null}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    height: Dimensions.get('window').height / 3,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  flipCard: {
    paddingTop: 20,
  },
  cardName: {
    fontFamily: 'regular',
    color: 'rgba(255, 255, 255, 0.75)',
    color: '#ffff19',
    fontSize: 20,
    letterSpacing: 0.5,
    paddingTop: 50,
  },
  relaxText: {
    paddingTop: Dimensions.get('window').height / 3,
    fontFamily: 'bold',
    color: 'rgba(255, 255, 255, 0.75)',
    fontSize: 20,
    letterSpacing: 0.5
  }
});