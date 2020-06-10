import React,{useState,useEffect} from "react";
import {  StyleSheet, View, FlatList} from 'react-native';
import {fetchData} from '../Utils/Functions'
import CardItem from "./Card"


export default function VideoList (props) {
   
 
    const [cardData,setData] = useState([])
    const [loading,setLoading] = useState(false)
  

    useEffect(() => {
      setLoading(true)
   
      fetchData(props.type,props.query).then((response) => {
        setData(response)
        })
       
   
  }, [])
    
    
   
    return ( 
      <View style={styles.container}>
      
        <FlatList
           
          data={cardData}
         
          renderItem={({item})=>{
           
             return <CardItem
             videoId={props.type == 'q'? item.id.videoId : item.id}
             title={item.snippet.title}
             channel={item.snippet.channelTitle}
             channelId={item.snippet.channelId}
          
             
             />
          }}
          keyExtractor={item=>`${item.id}+${Math.random()}`}
        />
       
      
     </View>
    )
  
}
const styles = StyleSheet.create({
  container: {
  flex:1
   
  }
  
 
});