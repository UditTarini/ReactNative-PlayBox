import React, { Component } from 'react';
import { Text, View, Dimensions,Image, StyleSheet,TouchableOpacity } from 'react-native';

const SLIDER_WIDTH = Dimensions.get('window').width;


export  const MovieItem = (props)=>{
  
 
    {console.log(props.data)}
    
    let [a,b,c] = ({
      "small":[0.47,0.55],
      "mid":[0.77,0.65],
      "large":[0.93,0.6]
    })[props.resizer] 
    const ITEM_WIDTH = Math.round(SLIDER_WIDTH * a);
    const ITEM_HEIGHT = Math.round(ITEM_WIDTH * b);
 
    return(
        <TouchableOpacity style={{...styles.itemContainer,width: ITEM_WIDTH,height: ITEM_HEIGHT,paddingHorizontal: 5}}>
        <Image 
          
           source={{uri:props.data.snippet.thumbnails.high.url}}

           style={{ width:"100%", height:ITEM_HEIGHT,borderRadius:10 }}/>
         
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    itemContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 7,
        
        
      }
})
export default MovieItem