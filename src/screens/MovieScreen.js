import React, { Component } from 'react';
import { Text, View, ScrollView, Dimensions, StyleSheet, ActivityIndicator } from 'react-native';
import HeaderBar from "../components/Header"

import LargeCarousel from '../components/LargeCarousel'
import SmallCarousel from '../components/SmallCarousel'
import {fetchData} from '../Utils/Functions'
import { Content } from 'native-base';
import ytdata from '../data.json'

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.93);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 0.6);


export default class MovieScreen extends Component {
    state = {index: 0}
    constructor(props) {
        super(props);
       
        this.state={
         loading:true, 
         testData0:[],
         testData1:[],

         Data : [],
         DataMostPopular:[]
        }
      }
     UNSAFE_componentWillMount(){
     
    this.setState({testData0:ytdata.data0.items})
    this.setState({testData1:ytdata.data1.items,loading:false})

    //fetchData('q','top movies 2020 full movie').then(resp=>this.setState({Data:resp,loading:false}))
    //fetchData('q','most popular new movies full length').then(resp=>this.setState({DataMostPopular:resp,loading:false}))
    
     }
     
    
    
    render(){
      return(
        
        <ScrollView style={styles.container}>
          
          <HeaderBar/>
          {this.state.loading?
          <ActivityIndicator style={{marginTop:"80%"}} size="large" color="red"/>:
          <View>
          <LargeCarousel data={this.state.testData0}  />
          <SmallCarousel heading={'Most Popular'} data={this.state.testData1} />          
          

          <SmallCarousel heading={'Trending'} data={this.state.testData0} />          
          <SmallCarousel heading={'Handpicked'} data={this.state.testData1} size={"mid"}/>          
          <SmallCarousel heading={'Bollywood'} data={this.state.testData0} />          
          {/* <SmallCarousel heading={'Hollywood'} items={this.state.DATA} />   */}
      </View>      
          }
          </ScrollView>
      )
  }

}


const styles = StyleSheet.create({
  container:{
    backgroundColor:"white"
  },
  heading:{
    fontWeight:"bold",
    fontSize:19,
    marginStart:10
  }
  });