import React, { Component } from 'react';
import { Text, View, Dimensions,Image, StyleSheet,TouchableOpacity } from 'react-native';

const SLIDER_WIDTH = Dimensions.get('window').width;


export  const MovieItem = (props)=>{
    const {resizer} = props
    let [a,b,c]=resizer == 'large'?[0.93,0.6,0.25]:[0.45,0.5,0.05]
    const ITEM_WIDTH = Math.round(SLIDER_WIDTH * a);
    const ITEM_HEIGHT = Math.round(ITEM_WIDTH * b);
    const TITLE_HEIGHT = Math.round(ITEM_HEIGHT * c)
    return(
        <TouchableOpacity style={{...styles.itemContainer,width: ITEM_WIDTH,height: ITEM_HEIGHT}}>
        <Image 
           source={{uri:'https://i.pinimg.com/736x/55/3c/50/553c50be9b34f7c4d04fb2445091a280.jpg'}}
           style={{ width:"100%", height:ITEM_HEIGHT, borderRadius:10 }}/>
         {/* <Text style={{...styles.itemLabel,width: ITEM_WIDTH,height: TITLE_HEIGHT}}>{`new south indian movies dubbed in hindi 2020 full love story New Hindi movie 2019`}</Text> */}
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    itemContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        
      },
      itemLabel: {
        color: 'white',
        fontSize: 13,
        backgroundColor:"black",
  
      }
})
export default MovieItem