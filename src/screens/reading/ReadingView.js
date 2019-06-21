import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
ReadingText = (props) => {
  let { titles, subtitles, readingText } = props;
  return (
    <View>
      <Text style={styles.titles}>{titles}</Text>
      <View style={styles.lineStyle} />
      <Text style={styles.subtitles}>"{subtitles}"</Text>
      <Text style={styles.readingText}>{readingText}</Text>
    </View>
  )
}

export default class ReadingView extends Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    let { karma, destiny } = this.props.cardDetails;
    return (
      <View style={styles.wrapper}>
        <ReadingText
          titles={'DESTINY'}
          subtitles={'The situations surrounding you'}
          readingText={destiny} />
        <ReadingText
          titles={'KARMA'}
          subtitles={'Things you can do'}
          readingText={karma} />
      </View>
    )
  }
}

const styles = StyleSheet.create({

  titles: {
    fontFamily: 'bold',
    color: 'rgba(255, 255, 255, 0.75)',
    fontSize: 22,
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  subtitles: {
    paddingTop: 5,
    fontFamily: 'light',
    color: 'rgba(255, 255, 255, 0.75)',
    fontSize: 13,
    letterSpacing: 0.5,
    fontStyle: 'italic',
    textAlign: 'center',
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
  wrapper: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: Dimensions.get('window').height / 1.5,
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: 'rgba(255, 255, 255, 0.75)',
    alignSelf: 'center',
    width: 40,
  },
});