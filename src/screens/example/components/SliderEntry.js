import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';
import { ParallaxImage } from 'react-native-snap-carousel';
import styles from '../styles/SliderEntry.style';

export default class SliderEntry extends Component {

    static propTypes = {
        data: PropTypes.object.isRequired,
        even: PropTypes.bool,
        parallax: PropTypes.bool,
        parallaxProps: PropTypes.object
    };

    minutesUntilMidnight = () => {
        var midnight = new Date();
        midnight.setHours( 24 );
        midnight.setMinutes( 0 );
        midnight.setSeconds( 0 );
        midnight.setMilliseconds( 0 );
        return ( midnight.getTime() - new Date().getTime() ) / 1000 / 60;
      }
      openReadingView(key) {
          if(this.minutesUntilMidnight() <= 0){
            AsyncStorage.clear();
          }
          AsyncStorage.getItem(key).then((res) => {
            this.props.navigation.push('ReadingScreen', {
              readingName: key,
              existingReading: res
            });
          })
    
      }

    get image () {
        const { data: { illustration }, parallax, parallaxProps, even } = this.props;

        return parallax ? (
            <ParallaxImage
              source={{ uri: illustration }}
              containerStyle={[styles.imageContainer, even ? styles.imageContainerEven : {}]}
              style={styles.image}
              parallaxFactor={0.35}
              showSpinner={true}
              spinnerColor={even ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.25)'}
              {...parallaxProps}
            />
        ) : (
            <Image
              source={{ uri: illustration }}
              style={styles.image}
            />
        );
    }

    render () {
        const { data: { title, subtitle, isRequired }, even } = this.props;

        const uppercaseTitle = title ? (
            <Text
              style={[styles.title, even ? styles.titleEven : {}]}
              numberOfLines={2}
            >
                { title.toUpperCase() }
            </Text>
        ) : false;

        return (
            <TouchableOpacity
              activeOpacity={1}
              style={styles.slideInnerContainer}
              onPress={() => {this.openReadingView(title)}}
              >
                <View style={styles.shadow} />
                <View style={[styles.imageContainer, even ? styles.imageContainerEven : {}]}>
                    { this.image }
                    <View style={[styles.radiusMask, even ? styles.radiusMaskEven : {}]} />
                </View>
                <View style={[styles.textContainer, even ? styles.textContainerEven : {}]}>
                    { uppercaseTitle }
                    <Text
                      style={[styles.subtitle, even ? styles.subtitleEven : {}]}
                      numberOfLines={2}
                    >
                        { subtitle }
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}
