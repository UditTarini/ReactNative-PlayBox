import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View,Image,Dimensions,TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation ,useTheme} from '@react-navigation/native';
import {fetchLogo,fetchVideoInfo,abbreviateNumber} from '../Utils/Functions'

export default function CardItem(props){

  const navigation = useNavigation();
  const {colors} = useTheme()
  const textcolor = colors.iconColor
  const [logo,setLogo] = useState(null)
  const [vidInfo,setinfo] = useState("")

  useEffect(() => {
    
    fetchLogo(props.channelId).then((resp) => {setLogo(resp)})
    fetchVideoInfo(props.videoId).then((resp)=>{setinfo(resp)})
   
 }, [])

  return (
    
     <TouchableOpacity
      onPress={()=>navigation.navigate("VideoPlayerScreen",
       {videoId:props.videoId,title:props.title,logo:logo,
        channel:props.channel,channelId:props.channelId, 
        vidInfo:vidInfo, desc:props.desc })}
       >
       
     <View style={{marginBottom:5}}>
     
      <Image 
       source={{uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}
       style={{ width:"100%", height:200 }}/>
      <View style={{flexDirection:"row", margin:5 }}>
      
      <Image 
      
         style={{width: 40, height: 40,borderRadius: 44/2}} 
         
         source={{uri:logo}}
        />
       
    <View style={{ marginLeft:10}} >

   <Text style={{
       paddingRight:10,     
       fontSize:17,
       width:Dimensions.get("screen").width - 50,
       color:textcolor

   }}
   ellipsizeMode="tail"
   numberOfLines={2}
   >{props.title}</Text>
   <View style={{flexDirection:"row"}}>
  <Text style={{fontSize:12, color:textcolor }}>{props.channel}</Text>
  <Text style={{fontSize:12, color:textcolor, marginLeft:8 }}>{abbreviateNumber(vidInfo.viewCount)} Views</Text>
  <Text style={{fontSize:12, color:textcolor, marginLeft:8 }}>{abbreviateNumber(vidInfo.likeCount)} Likes</Text>

  </View>
   
</View>
<MaterialIcons name='more-vert' size={10} color="black" />
</View>
</View>
</TouchableOpacity>
  )
}



