import React,{useState,useRef, useEffect} from 'react';
import { StyleSheet, Text, View,Dimensions,ScrollView,Image,FlatList,ActivityIndicator} from 'react-native';

import YoutubePlayer from 'react-native-youtube-iframe';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import CardItem2 from '../components/Card2'
import {fetchData} from '../Utils/Functions'

const VideoPlayer = ({route})=>{

    let screenWidth = Dimensions.get('window').width
    let screenHeight = Dimensions.get('window').height

    const {videoId,title,logo,channel,channelId} = route.params
    const playerRef = useRef(null);
    const [playing, setPlaying] = useState(true);

    const [loading,setLoading] = useState(false)
    const [cardData, setData] = useState([])

    useEffect(() => {
        setLoading(true)
        fetchData('ch_id',channelId)
        .then((resp)=>{
           setData(resp)
           setLoading(false)

        })
       
      
    }, [])
      
   return(
       <View style={{flex:1,  }}>
 
        <YoutubePlayer
        ref={playerRef}
        height={200}
        width={screenWidth}
        videoId={`${videoId}`}
        play={playing}
       
        loop={true}
        
        volume={50}
        playbackRate={1}
        playerParams={{
          cc_lang_pref: "us",
          showClosedCaptions: true,
          rel:false
        }}
        />

        <View style={{flexDirection:"row", margin:5,  borderBottomColor: 'grey',borderBottomWidth: 1,  }}>
        
        <Image 
         style={{width: 40, height: 40,borderRadius: 44/2}} 
         source={{uri:logo}} />

        <View style={{ marginLeft:10}} >
           <Text style={{paddingRight:10,fontSize:17, width:Dimensions.get("screen").width - 50,color:"black"}}
           ellipsizeMode="tail"
           numberOfLines={2}
           >{title}</Text>
          <Text style={{color:"grey",fontSize:12, color:'black',marginBottom:7 }}>{channel}</Text>
           
        </View>
        
        </View>

        {loading ?<ActivityIndicator style={{marginTop:10}} size="large" color="red"/>:null } 
        <View>
        
        <FlatList
        contentContainerStyle={{ paddingBottom: screenHeight/7 }}    
         data={cardData}
        
         renderItem={({item})=>{
             return <CardItem2
              videoId={item.id.videoId}
              title={item.snippet.title}
              channel={item.snippet.channelTitle}
             />
         }}
         keyExtractor={item=>item.id.videoId}
        />
        
        </View> 
 
           
       </View>
   )
}

export default VideoPlayer






