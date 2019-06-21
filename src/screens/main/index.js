/* eslint-disable no-return-assign */
import React, { Component } from 'react';
import { AsyncStorage, ScrollView, StatusBar, Text, View, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import SliderEntry from './components/SliderEntry';
import { ENTRIES1 } from './static/entries';
import styles, { colors } from './styles/index.style';
import { itemWidth, sliderWidth } from './styles/SliderEntry.style';
import SplashScreen from 'react-native-splash-screen';
import {
  AdMobBanner,
} from 'react-native-admob';
import AppIntroSlider from 'react-native-app-intro-slider';

const SLIDER_1_FIRST_ITEM = 1;
const slides = [
  {
    key: '1',
    title: 'Get inspired!',
    text: 'Daily insights from the ancient wisdom of Tarot to get the best out of your day.',
    colors: ['#081E40', '#84DEE1'],
    source: require('../../assets/images/futuretip_get_inspired.png')
  },
  {
    key: '2',
    title: 'Daily destiny!',
    text: 'Get the gist of your surroundings and powers that help or hurt you.',
    colors: ['#A3A1FF', '#3A3897'],
    source: require('../../assets/images/futuretip_daily_destiny.png')
  },
  {
    key: '3',
    title: 'Daily karma!',
    text: 'Know what you can do to get on the right path.',
    colors: ['#29ABE2', '#4F00BC'],
    source: require('../../assets/images/futuretip_daily_karma.png')
  }
];

export default class MainScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
      showApp: false
    };
  }

  static navigationOptions = {
    header: null
  };

  _renderWelcomeScreen = (props) => (
    <LinearGradient
      style={[
        styles.mainContent,
        {
          paddingTop: props.topSpacer,
          paddingBottom: props.bottomSpacer,
          width: props.width,
          height: props.height,
        },
      ]}
      colors={props.colors}
      start={{ x: 0, y: 0.1 }}
      end={{ x: 0.1, y: 1 }}
    >
      <View style={styles.wrapper}>
        <Image style={styles.image} source={props.source} resizeMethod="resize"></Image>
        <Text style={styles.welcomeTitle}>{props.title}</Text>
        <Text style={styles.welcomeText}>{props.text}</Text>
      </View>
    </LinearGradient>
  );
  _onWelcomeDone = () => {
    AsyncStorage.setItem('hideWelcomeScreen', 'true').then(() => {
      this.setState({ showApp: true });
    });
  }

  _renderItemWithParallax({ item, index }, parallaxProps) {
    return (
      <SliderEntry
        data={item}
        even={(index + 1) % 2 === 0}
        parallax={true}
        parallaxProps={parallaxProps}
      />
    );
  }

  renderSlider(number, title) {
    const { slider1ActiveSlide } = this.state;

    return (
      <View style={styles.exampleContainer}>
        <Text style={styles.title}>{number}</Text>
        <Text style={styles.subtitle}>{title}</Text>
        <Carousel
          ref={c => this._slider1Ref = c}
          data={ENTRIES1}
          renderItem={this._renderItemWithParallax}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          hasParallaxImages={true}
          firstItem={SLIDER_1_FIRST_ITEM}
          inactiveSlideScale={0.94}
          inactiveSlideOpacity={0.7}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContentContainer}
          loop={true}
          loopClonesPerSide={2}
          onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index })}
        />
        <Pagination
          dotsLength={ENTRIES1.length}
          activeDotIndex={slider1ActiveSlide}
          containerStyle={styles.paginationContainer}
          dotColor={'rgba(255, 255, 255, 0.92)'}
          dotStyle={styles.paginationDot}
          inactiveDotColor={colors.black}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          carouselRef={this._slider1Ref}
          tappableDots={!!this._slider1Ref}
        />
      </View>
    );
  }


  get gradient() {
    return (
      <LinearGradient
        colors={[colors.background1, colors.background2]}
        startPoint={{ x: 1, y: 0 }}
        endPoint={{ x: 0, y: 1 }}
        style={styles.gradient}
      />
    );
  }

  componentDidMount() {
    AsyncStorage.getItem('hideWelcomeScreen').then((hideWelcomeScreen) => {
      if (hideWelcomeScreen === null) {
        SplashScreen.hide();
      } else if (hideWelcomeScreen === 'true') {
        this.setState({ showApp: true }, () => {
          SplashScreen.hide();
        });
      }
    });
  }

  render() {
    const carousel = this.renderSlider('Daily Tarot Readings', 'Let the tarot cards guide you daily. We reset the readings every midnight so you can start fresh each day.');

    if (this.state.showApp) {
      return (
        <View style={styles.container}>
          <StatusBar
            translucent={true}
            backgroundColor={'rgba(0, 0, 0, 0.3)'}
            barStyle={'light-content'}
          />
          {this.gradient}
          <ScrollView
            style={styles.scrollview}
            scrollEventThrottle={200}
            contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }}
            directionalLockEnabled={true}
          >
            {carousel}
            <AdMobBanner
              adSize="fullBanner"
              adUnitID="ca-app-pub-3940256099942544/6300978111"
            />
          </ScrollView>
        </View>
      );
    } else {
      return (
        <AppIntroSlider renderItem={this._renderWelcomeScreen} slides={slides} onDone={this._onWelcomeDone} />
      );
    }
  }
}
