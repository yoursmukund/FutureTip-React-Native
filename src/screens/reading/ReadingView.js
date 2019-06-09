import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { colors } from '../main/styles/index.style';

export default class ReadingView extends Component{

  constructor(props){
    super(props);
  }
  render(){
    let { karma, destiny, cardName } = this.props.cardDetails;
    return(
      <View style={styles.wrapper}>
        <Text style={styles.cardName}>{cardName.replace('_', ' ').toUpperCase()}</Text>
        <Text style={styles.titles}>DESTINY</Text>
        <View style = {styles.lineStyle} />
        <Text style={styles.subtitles}>"The situations surrounding you"</Text>
        <Text style={styles.readingText}>{destiny}</Text>
        <Text style={styles.titles}>KARMA</Text>
        <View style = {styles.lineStyle} />
        <Text style={styles.subtitles}>"Things you can do"</Text>
        <Text style={styles.readingTextBottom}>{karma}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  titles: {
    paddingTop: 20,
    fontFamily: 'bold',
    color: 'rgba(255, 255, 255, 0.75)',
    fontSize: 22,
    letterSpacing: 0.5
  },
  subtitles: {
    paddingTop: 5,
    fontFamily: 'light',
    color: 'rgba(255, 255, 255, 0.75)',
    fontSize: 13,
    letterSpacing: 0.5,
    fontStyle: 'italic'
  },
  cardName: {
    fontFamily: 'regular',
    color: 'rgba(255, 255, 255, 0.75)',
    color: '#ffff19',
    fontSize: 20,
    letterSpacing: 0.5,
    paddingTop: 20,
    paddingBottom: 20,
  },
  readingText: {
    fontFamily: 'light',
    paddingTop: 20,
    color: 'rgba(255, 255, 255, 0.75)',
    fontSize: 17,
    textAlign: 'center',
    paddingLeft: 40,
    paddingRight: 40
  },
  wrapper:{
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height/1.5
  },
  lineStyle:{
    borderWidth: 0.5,
    borderColor:'rgba(255, 255, 255, 0.75)',
    margin:5,
    width: 40
  },
  readingTextBottom: {
    fontFamily: 'light',
    paddingTop: 20,
    paddingBottom: 60,
    color: 'rgba(255, 255, 255, 0.75)',
    fontSize: 17,
    textAlign: 'center',
    paddingLeft: 40,
    paddingRight: 40
  }
});