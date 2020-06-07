import React,{useState,useEffect} from "react";
import {  StyleSheet, View, FlatList} from 'react-native';
import {fetchData, fetchLogo} from '../Utils/Functions'
import CardItem from "./Card"


export default function VideoList (props) {
   
 
    const [cardData,setData] = useState([])
    const [loading,setLoading] = useState(false)
    const [logo,setLogo] = useState(null)

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
             let vid = props.type == 'q'? item.id.videoId : item.id
          
             fetchLogo(item.snippet.channelId).then(resp=>{setLogo(resp)}) 

             
             return <CardItem
             videoId={vid}
             title={item.snippet.title}
             channel={item.snippet.channelTitle}
             channelId={item.snippet.channelId}
             
             logoUrl ={logo}
             
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