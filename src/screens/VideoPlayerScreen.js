import React,{useState,useRef, useEffect} from 'react';
import { StyleSheet, Text,SafeAreaView,TouchableOpacity, View,Dimensions,ScrollView,Image,FlatList,ActivityIndicator} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import CardItem2 from '../components/Card2'
import {useTheme} from '@react-navigation/native'
import {fetchData,abbreviateNumber} from '../Utils/Functions'



export const BottomIcon=(props)=>{
  const {colors} =  useTheme()
  return(
  <View style={{flexDirection:"column", alignItems: 'center'}}>
  { props.icon=='a'?
  <AntDesign name={props.name} size={25} color='grey'/>:
  <MaterialIcons name={props.name} size={25} color='grey'/>
  }
  <Text style={{fontSize:10,padding:5,color:colors.text}}>{props.count}</Text>
  </View>)
}

const VideoPlayerScreen = ({route})=>{
  const {colors} =  useTheme()
    
    let screenWidth = Dimensions.get('window').width
    let screenHeight = Dimensions.get('window').height

    const {videoId,title,logo,channel,channelId,vidInfo,desc} = route.params
    const playerRef = useRef(null);
    const [playing, setPlaying] = useState(true);

    const [loading,setLoading] = useState(false)
    const [cardData, setData] = useState([])
    const [description, setDesc] = useState(desc)
    const [dropdown,setDropdown] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetchData('rel_vid',videoId).then((resp)=>
        { 
          
          setData(resp)
          setLoading(false) 
        })
       fetchData('vid_id',videoId).then((resp)=>{setDesc(resp[0].snippet.description)})
      
        
    }, [])

  
      
   return(
       <View style={{flex:1 }}>
     
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
        <ScrollView>
        <View style={{borderBottomWidth: 1,  borderBottomColor: colors.border}}>
        <View style={{flexDirection:"row", margin:5  }}>
        
        <Image 
         style={{width: 40, height: 40,borderRadius: 44/2}} 
         source={{uri:logo}} />

        <View style={{ marginLeft:10}} >
          <Text style={{paddingRight:10,fontSize:17, width:Dimensions.get("screen").width - 50,color:colors.text}}
           ellipsizeMode="tail"
           numberOfLines={2}
           >{title}</Text>
          <View style={{flexDirection:"row"}}>
          <Text style={{fontSize:12, color:"grey",marginBottom:7 }}>{channel}</Text>
      
          </View>
        </View>        
        </View>
       
        <View style={{flexDirection:"row",justifyContent:'space-between',marginHorizontal:20}}>
           <BottomIcon icon={'a'} name={'eye'}  count={dropdown?vidInfo.viewCount:abbreviateNumber(vidInfo.viewCount)}/>
           <BottomIcon icon={'a'} name={'like1'} count={dropdown?vidInfo.likeCount:abbreviateNumber(vidInfo.likeCount)}/>
           <BottomIcon icon={'a'} name={'dislike1'}  count={dropdown?vidInfo.dislikeCount:abbreviateNumber(vidInfo.dislikeCount)}/>
           <BottomIcon name={'share'}/>
           <BottomIcon name={'file-download'}/>
           <TouchableOpacity onPress={()=>setDropdown(!dropdown)}>
           <BottomIcon name={dropdown?'arrow-drop-up':'arrow-drop-down'}/>
           </TouchableOpacity>
        </View>
        {dropdown?<Text style={{color:colors.text,padding:10,paddingHorizontal:20}}>{description}</Text>:null}
       
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
             />
         }}
         keyExtractor={item=>item.id.videoId}
        />
        
        </View> 
      
        </ScrollView>
       </View>
   )
}

export default VideoPlayerScreen






