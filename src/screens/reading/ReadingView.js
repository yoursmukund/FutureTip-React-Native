import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, Dimensions } from 'react-native';

export default class ReadingView extends Component{

  constructor(props){
    super(props);
  }
  render(){
    let { karma, destiny } = this.props.cardDetails;
    return(
      <View>
        <Image/>
        <Text style={styles.ReadingName}>Destiny</Text>
        <Text style={styles.ReadingText}>{destiny}</Text>
        <Text style={styles.ReadingName}>Karma</Text>
        <Text style={styles.ReadingText}>{karma}</Text>
      </View>
    )
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
  },
  ReadingText: {
    color: 'white',
    fontSize: 20,
  }
});