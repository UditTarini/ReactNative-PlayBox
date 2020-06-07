import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View,Image,Dimensions,TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation ,useTheme} from '@react-navigation/native';
import {fetchLogo} from '../Utils/Functions'

export default function CardItem(props){
  let img = "https://f1.pngfuel.com/png/386/684/972/face-icon-user-icon-design-user-profile-share-icon-avatar-black-and-white-silhouette-png-clip-art.png"
  const navigation = useNavigation();
  const {colors} = useTheme()
  const textcolor = colors.iconColor
 
  return (
    
     <TouchableOpacity
      onPress={()=>navigation.navigate("VideoPlayerScreen",{videoId:props.videoId,title:props.title,channel:props.channel})}
       >
       
     <View style={{marginBottom:5}}>
     
      <Image 
       source={{uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}
       style={{ width:"100%", height:200 }}/>
      <View style={{flexDirection:"row", margin:5 }}>
      
      <Image 
      
         style={{width: 40, height: 40,borderRadius: 44/2}} 
         
         source={{uri:props.logoUrl}}
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
  <Text style={{color:"grey",fontSize:12, color:textcolor }}>{props.channel}</Text>
   
</View>
<MaterialIcons name='more-vert' size={10} color="black" />
</View>
</View>
</TouchableOpacity>
  )
}



