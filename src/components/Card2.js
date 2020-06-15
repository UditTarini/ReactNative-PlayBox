import React,{useEffect,useState} from 'react';
import { StyleSheet, Text, View,Image,Dimensions,TouchableOpacity} from 'react-native';
import { useNavigation,useTheme } from '@react-navigation/native';
import {fetchVideoInfo,abbreviateNumber,fetchLogo} from '../Utils/Functions'


export default function CardItem2(props){
    const navigation = useNavigation();
    const {colors} = useTheme()
    const textcolor = colors.iconColor
    const [logo,setLogo] = useState(null)
    const [vidInfo,setinfo] = useState("")

    useEffect(() => {
      fetchLogo(props.channelId).then((resp) => {setLogo(resp)})
      fetchVideoInfo(props.videoId).then((resp)=>{setinfo(resp)})
      
    }, [])

  return(
      <TouchableOpacity
      onPress={()=>navigation.navigate("VideoPlayerScreen",
      {videoId:props.videoId,title:props.title,logo:logo,
        channel:props.channel,channelId:props.channelId, 
        vidInfo:vidInfo, desc:props.desc })}
      >
    <View style={{flexDirection:"row",margin:10,marginBottom:0}}>
        <Image 
           source={{uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}
           style={{ width:"45%", height:90 }} />
           <View style={{paddingLeft:7}}>
            <Text style={{
                   paddingRight:10, 
                   fontSize:17,
                   width:Dimensions.get("screen").width/2,
                   color:textcolor
               }}
               ellipsizeMode="tail"
               numberOfLines={3}
              >{props.title}</Text>
               <Text style={{fontSize:12,  color:textcolor}}>{props.channel}</Text>
               <View style={{flexDirection:"row"}}>
               <Text style={{fontSize:12, color:textcolor}}>{abbreviateNumber(vidInfo.viewCount)} Views</Text>
               <Text style={{fontSize:12, color:textcolor, marginLeft:8 }}>{abbreviateNumber(vidInfo.likeCount)} Likes</Text>
               </View>
           </View>
    </View>
    </TouchableOpacity>
  )
}
