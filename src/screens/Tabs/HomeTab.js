import React,{useState,useEffect} from "react";
import { StyleSheet, View, FlatList} from 'react-native';
import {fetchLogo, fetchHomeData} from '../../Utils/Functions'
import CardItem from "../../components/Card"


export default function HomeTab (props) {
   
 
    const [cardData,setData] = useState([])
    const [loading,setLoading] = useState(false)
    const [logo,setLogo] = useState(null)

    useEffect(() => {
      setLoading(true)
      fetchHomeData().then((resp)=>setData(resp))
      //fetchHomeData()
     
  }, [])
    
    
   
    return ( 
      <View style={styles.container}>
     
        <FlatList
       
          data={cardData}
          renderItem={({item})=>{
             let vid = props.type == 'q'? item.id.videoId : item.id
             //console.log(item)
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