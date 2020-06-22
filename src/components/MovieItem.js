import React, {  useState, useEffect } from 'react';
import {  Dimensions,Image, StyleSheet,TouchableOpacity } from 'react-native';
import { useNavigation ,useTheme} from '@react-navigation/native';
import {fetchLogo,fetchVideoInfo} from '../Utils/Functions'

const SLIDER_WIDTH = Dimensions.get('window').width;


export  const MovieItem = (props)=>{
    const navigation = useNavigation();
    const [logo,setLogo] = useState(null)
    const [vidInfo,setinfo] = useState("")
    

    useEffect(() => {
    
      fetchLogo(props.channelId).then((resp) => {setLogo(resp)})
      fetchVideoInfo(props.videoId).then((resp)=>{setinfo(resp)})
      
   }, [])

    const navigateToPlayer=()=>{
      navigation.navigate("VideoPlayerScreen",
       {videoId:props.videoId,title:props.title,logo:logo,
        channel:props.channel,channelId:props.channelId, 
        vidInfo:vidInfo, desc:props.desc})
    }

    
    let [a,b] = ({
      "small":[0.47,0.55],
      "mid":[0.77,0.65],
      "large":[0.93,0.6]
    })[props.resizer] 
    const ITEM_WIDTH = Math.round(SLIDER_WIDTH * a);
    const ITEM_HEIGHT = Math.round(ITEM_WIDTH * b);
 
    return(
        <TouchableOpacity 
        onPress={()=>navigateToPlayer()}
        style={{...styles.itemContainer,width: ITEM_WIDTH,height: ITEM_HEIGHT,paddingHorizontal: 5}}>
        <Image 
          
           source={{uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}

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