import React,{useState,useEffect} from "react";
import {  StyleSheet, View, FlatList} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {fetchData, fetchHomeData} from '../Utils/Functions'
import CardItem from "./Card"



export default function VideoList (props) {
   
    const {colors}= useTheme()
    const [cardData,setData] = useState([])
    const [loading,setLoading] = useState(false)
  
    

    useEffect(() => {
      setLoading(true)
      props.type == 'home'? 
      fetchHomeData().then(resp=>setData(resp)) :
      fetchData(props.type,props.query).then(resp=>setData(resp))
    }, [])
    
    
   
    return ( 
      <View style={{flex:1, backgroundColor:colors.background}}>
      
        <FlatList
           
          data={cardData}
         
          renderItem={({item})=>{
           
             return <CardItem
             videoId={(props.type == 'q'||props.type =='home')? (item.id.videoId):(item.id)}
             title={item.snippet.title}
             channel={item.snippet.channelTitle}
             channelId={item.snippet.channelId}
             desc={item.snippet.description}
             
             />
          }}
          keyExtractor={item=>`${item.id}+${Math.random()}`}
        />
       
      
     </View>
    )
  
}
