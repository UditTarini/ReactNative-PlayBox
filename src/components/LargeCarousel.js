import React, { Component } from 'react';
import { Text, View, Dimensions,Image, StyleSheet,TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel'; 
import MovieItem from './MovieItem'
import { scrollInterpolator, animatedStyles } from '../Utils/Animation';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.93);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 0.6);
const TITLE_HEIGHT = Math.round(ITEM_HEIGHT * 0.25)

export default class LargeCarousel extends Component {
    
    constructor(props) {
        super(props);
        this._renderItem = this._renderItem.bind(this)
        
        
      }

      
    _renderItem({  }) {
        return (
          <MovieItem resizer={'large'} />
        );
    }
    
    render(){
      return(
          <View>
          
          
          <Carousel
          ref={(c) => this.carousel = c}
          data={this.props.data}
          renderItem={this._renderItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          containerCustomStyle={styles.carouselContainer}
          inactiveSlideShift={0}
          onSnapToItem={(index) => this.setState({ index })}
          scrollInterpolator={scrollInterpolator}
          slideInterpolatedStyle={animatedStyles}
          useScrollView={true}          
        />
     
          </View>
      )
  }

}


const styles = StyleSheet.create({
    carouselContainer: {
      marginTop: 10
    }

  });