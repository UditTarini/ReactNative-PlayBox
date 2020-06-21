import React, { Component } from 'react';
import { Text, View,ScrollView, Dimensions, StyleSheet } from 'react-native';
import HeaderBar from "../components/Header"

import LargeCarousel from '../components/LargeCarousel'
import SmallCarousel from '../components/SmallCarousel'


const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.93);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 0.6);


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
        <ScrollView style={styles.container}>
          <HeaderBar/>
          <LargeCarousel  data={this.state.DATA} />
          
        <SmallCarousel
        style='stats'
        itemsPerInterval={2}
        items={[{
          label: 'TODAY',
          value: 1,
        }, {
          label: 'THIS WEEK',
          value: 39,
        }, {
          label: 'THIS MONTH',
          value: 120,
        }, {
          label: 'YESTERDAY',
          value: 3,
        }, {
          label: 'LAST WEEK',
          value: 25,
        }, {
          label: 'LAST MONTH',
          value: 175,
        }]}
      />          
          </ScrollView>
      )
  }

}


const styles = StyleSheet.create({
  container:{
    backgroundColor:"white"
  }
  });