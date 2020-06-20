import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet } from 'react-native';
import HeaderBar from "../components/Header"
import Carousel from 'react-native-snap-carousel'; 
import CarouselComponent from '../components/Carousel'

import { scrollInterpolator, animatedStyles } from '../Utils/Animation';
import { Thumbnail } from 'native-base';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.93);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 0.6);

// const DATA = [];
// for (let i = 0; i < 10; i++) {
//   DATA.push(i)
// }


export default class MovieScreen extends Component {
    state = {index: 0}
    constructor(props) {
        super(props);
        this._renderItem = this._renderItem.bind(this)
        this.state={
         DATA : [1,2,3]
        }
      }
    //  UNSAFE_componentWillMount(){
    //  this.data()
    //  }
    //  data = ()=>{
    //     for (let i = 0; i < 10; i++) {
    //         this.setState({DATA:[1,2,3,4]})
    //       }
    //  }
    _renderItem({ item }) {
        return (
          <View style={styles.itemContainer}>
            <Text style={styles.itemLabel}>{`Item ${item}`}</Text>
          </View>
        );
    }
    
    render(){
      return(
          <View>
          <HeaderBar/>
       
         <CarouselComponent  data={this.state.DATA} />
          </View>
      )
  }

}


const styles = StyleSheet.create({
    carouselContainer: {
      marginTop: 10
    },
    itemContainer: {
      width: ITEM_WIDTH,
      height: ITEM_HEIGHT,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'dodgerblue'
    },
    itemLabel: {
      color: 'white',
      fontSize: 24
    },
    counter: {
      marginTop: 25,
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center'
    }
  });