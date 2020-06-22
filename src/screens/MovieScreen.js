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
         MostPopular:[],
         Trending:[],
         Handpicked:[],
         Bollywood:[],
         Hollywood:[]


        }
      }
     UNSAFE_componentWillMount(){
     
    this.setState({testData0:ytdata.data0.items})
    this.setState({testData1:ytdata.data1.items})

    fetchData('q','new movies 2020 full movie').then(resp=>this.setState({Data:resp}))
    fetchData('q','most popular new movies full length').then(resp=>this.setState({MostPopular:resp}))
    fetchData('q','trending movies full length').then(resp=>this.setState({Trending:resp}))
    fetchData('q','oscar movies full length').then(resp=>this.setState({Handpicked:resp}))
    fetchData('q','top bollywood full movie').then(resp=>this.setState({Bollywood:resp}))
    fetchData('q','hollywood movies full length').then(resp=>this.setState({Hollywood:resp,loading:false}))
    
     }
     
       
    
    render(){
      return(
        
        <ScrollView style={styles.container}>
        {console.log(this.state.Hollywood)}
          <HeaderBar/>
          {this.state.loading?
          <ActivityIndicator style={{marginTop:"80%"}} size="large" color="red"/>:
          <View>
         
         
          <LargeCarousel data={this.state.Data} type={'q'} />
          <SmallCarousel heading={'Most Popular'} type={'q'} data={this.state.MostPopular} />          
          <SmallCarousel heading={'Trending'} type={'q'} data={this.state.Trending} />          
          <SmallCarousel heading={'Handpicked'} type={'q'} data={this.state.Handpicked} size={"mid"}/>          
          <SmallCarousel heading={'Bollywood'} type={'q'} data={this.state.Bollywood} />          
          <SmallCarousel heading={'Hollywood'} type={'q'} data={this.state.Hollywood} />  
                    
          
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