import React,{useState} from 'react';
import { StyleSheet, Text, View,Dimensions, TextInput, FlatList, ActivityIndicator} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import CardItem2 from '../components/Card2'
import {useTheme} from '@react-navigation/native'
import {fetchData} from '../Utils/Functions'


export default function SearchScreen( {navigation} ){
    const {colors} =  useTheme()
    const mycolor = colors.iconColor

   
    const [value,setValue] = useState("")
    const [cardData, setData] = useState([])
    const [loading,setLoading] = useState(false)


    
    const fetchResult = () =>{
        setLoading(true)
    
        fetchData('q',value).then(data=>
        {   setData(data) 
            setLoading(false)           
        })
  }
  
  global.screenHeight = Math.round(Dimensions.get('window').height) - 80;

  return(
      <View style={{ flex:1, }}>
          

      <View style={{
          top: 0,
          left:0,
          right:0,
          backgroundColor:"#fff",
          flexDirection:"row",
          justifyContent: "center",
          alignItems:"center",
          height:60,
          borderBottomColor: 'grey',
          borderBottomWidth: 1}} >
        
          <Ionicons style={{ color: "black",marginRight:20 }} name="md-arrow-back" size={32}
          onPress={()=>navigation.goBack()}
            />
         
            <TextInput
              style={{ width:"70%",height:40 ,backgroundColor: "#e6e6e6", borderRadius: 12, fontSize: 15 }}
              placeholder="search..."
              placeholderTextColor = "#000"
              onChangeText={text => setValue(text)} 
              value={value}
              onSubmitEditing={() => fetchResult()}
              />
        
           <Ionicons style={{color:"black",marginLeft:20}} name="md-send" size={32}
               onPress={()=>fetchResult()}
               />
           
        </View>
      
      
 
      {loading ?<ActivityIndicator style={{marginTop:10}} size="large" color="#3edced"/>:null } 
      <View>
      
      <FlatList
      contentContainerStyle={{ paddingBottom: screenHeight/7 }}    
       data={cardData}
      
       renderItem={({item})=>{
           return <CardItem2
            videoId={item.id.videoId}
            title={item.snippet.title}
            channel={item.snippet.channelTitle}
            channelId={item.snippet.channelId}
            desc={item.snippet.description}
           />
       }}
       keyExtractor={item=>item.id.videoId}
      />
      
      </View>  
  
      </View>
  )
}


