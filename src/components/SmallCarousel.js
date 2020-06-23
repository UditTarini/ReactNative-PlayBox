import React from 'react'
import { View, Text,StyleSheet,FlatList } from 'react-native'
import {useTheme} from '@react-navigation/native';

import MovieItem from './MovieItem'

export const SmallCarousel = (props) => {
  const {colors} = useTheme()
  const { data, heading, size, type } = props;
  const resizer = size == "mid"?"mid":"small"
  
  return (
    <View style={styles.container}>
      <Text style={{...styles.heading,color:colors.text}}>{heading}</Text>
      

      <FlatList
        keyExtractor={item=>`${item.id}+${Math.random()}`}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.movie}
        data={data}
        
        renderItem={({item})=>{
         
          return  <MovieItem resizer={resizer} 
             videoId={(type == 'q'||type =='home')? (item.id.videoId):(item.id)}
             title={item.snippet.title}
             channel={item.snippet.channelTitle}
             channelId={item.snippet.channelId}
             desc={item.snippet.description}/>
        }}

      />

      </View>
  )
}


const styles = StyleSheet.create({
  container: {
    width: '100%', 
   },
  heading:{
    fontWeight:"bold",    
    fontSize:17,
    marginStart:10
  }
});


export default SmallCarousel;