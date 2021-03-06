import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { AsyncStorage, Image, Text, TouchableOpacity, View } from 'react-native';
import { ParallaxImage } from 'react-native-snap-carousel';
import { withNavigation } from "react-navigation";
import styles from '../styles/SliderEntry.style';

class SliderEntry extends Component {

    static propTypes = {
        data: PropTypes.object.isRequired,
        even: PropTypes.bool,
        parallax: PropTypes.bool,
        parallaxProps: PropTypes.object
    };

    openReadingView(key) {
      AsyncStorage.getItem('date').then((savedDate)=>{
        if((savedDate === null) || (savedDate === (new Date).getDate().toString())){
          AsyncStorage.getItem(key).then((res) => {
            this.props.navigation.push('ReadingScreen', {
              readingName: key,
              existingReading: res
            });
          });
        } else if(savedDate !== (new Date).getDate().toString()){
          //Date has passed, refresh the readings
          AsyncStorage.clear().then(() => {
            AsyncStorage.setItem('hideWelcomeScreen', 'true');
            this.props.navigation.push('ReadingScreen', {
              readingName: key,
              existingReading: null
            });
          });
        }
      });
  
    }

    get image () {
        const { data: { illustration }, parallax, parallaxProps, even} = this.props;

        return parallax ? (
            <ParallaxImage
              source={illustration}
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
        const { data: { title, subtitle, isRequired, id }, even } = this.props;

        

        const uppercaseTitle = title ? (
            <Text
              style={[styles.title, even ? styles.titleEven : {}]}
              numberOfLines={2}
            >
                { title }
            </Text>
        ) : false;

        return (
            <TouchableOpacity
              activeOpacity={1}
              style={styles.slideInnerContainer}
              onPress={() => {this.openReadingView(id)}}
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

export default withNavigation(SliderEntry);
