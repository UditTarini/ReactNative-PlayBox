import React, { Component } from "react";
import { View, Text, Dimensions, PanResponder,Animated } from 'react-native';
import HeaderBar from "../components/Header"
import Video from 'react-native-video';
import YoutubePlayer from 'react-native-youtube-iframe';
import  WebView from 'react-native-webview'

let SCREEN_WIDTH = Dimensions.get('window').width
let SCREEN_HEIGHT = Dimensions.get('window').height 
const VIDEOS = [
  { id: "1", uri: 'https://www.youtube.com/embed/FoMlSB6ftQg?rel=0&autoplay=0&showinfo=0&controls=0&fullscreen=1' },
  { id: "2", uri: 'https://www.youtube.com/embed/yabDCV4ccQs?rel=0&autoplay=0&showinfo=0&controls=0&fullscreen=1' },
  { id: "3", uri: 'https://www.youtube.com/embed/quastuF2_7k?rel=0&autoplay=0&showinfo=0&controls=0&fullscreen=1' },
  { id: "4", uri: 'https://www.youtube.com/embed/0Xcfw3bQC28?rel=0&autoplay=0&showinfo=0&controls=0&fullscreen=1' },
  { id: "5", uri: 'https://www.youtube.com/embed/PFHf5nwmwIo?rel=0&autoplay=0&showinfo=0&controls=0&fullscreen=1' },
]
export default class VerticalScreen extends Component {
  
  constructor(props) {
    super(props)

    this.position = new Animated.ValueXY()
    this.swipedCardPosition = new Animated.ValueXY({ x: 0, y: -SCREEN_HEIGHT })
    this.state = {
        currentIndex: 0
    } 

  }
 UNSAFE_componentWillMount(){
     this.PanResponder = PanResponder.create({
        onStartShouldSetPanResponder: (e, gestureState) => true,
 
         onPanResponderMove: (evt, gestureState)=>{
          if(gestureState.dy >0 && (this.state.currentIndex>0)){
            this.swipedCardPosition.setValue({
              x:0, y:-SCREEN_HEIGHT+gestureState.dy
            })
          }else{
            this.position.setValue({x:0, y: gestureState.dy })

          }
         },
         onPanResponderRelease:(evt,gestureState)=>{
          if(this.state.currentIndex > 0 && gestureState.dy>50 && gestureState.vy>0.7){
              Animated.timing(this.swipedCardPosition,{
                toValue:({x:0,y:0}),
                duration:400,
                
              }).start(()=>{
                this.setState({currentIndex:this.state.currentIndex-1})
                this.swipedCardPosition.setValue({x:0, y:0})
             })
          }  
          
          else if(-gestureState.dy > 50 && -gestureState.vy > 0.7){
              Animated.timing(this.position,{
                toValue:({x:0, y:-SCREEN_HEIGHT}),
                duration:400,
                
              }).start(()=>{
                 this.setState({currentIndex:this.state.currentIndex+1})
                 this.position.setValue({x:0, y:0})
              })

            }else{
              Animated.parallel([
                Animated.spring(this.position,{
                  toValue:({x:0, y:0})
                }),
                Animated.spring(this.position,{
                  toValue:({x:0, y:-SCREEN_HEIGHT})
                })
              ]).start()
            }
         }
     })
 }
 
renderVideos = ()=>{
    return VIDEOS.map((item, i) => {
      if(i==this.state.currentIndex-1){
        return(
          <Animated.View key={item.id} style={this.swipedCardPosition.getLayout()}
        {...this.PanResponder.panHandlers} >
       <View style={{flex:1,position:"absolute",height:SCREEN_HEIGHT,width:SCREEN_WIDTH,backgroundColor:"black"}}>
        {/* <View style={{flex:1,backgroundColor:"black"}}>
        <Text style={{color:"white"}}>{ VIDEOS[i].uri}</Text>
        </View> */}
        <WebView 
        style={{flex:1}}
        javaScriptEnabled={true}
        source={{ uri:  VIDEOS[i].uri}}/>
       </View>
       </Animated.View>
        )
      }
      else if(i<this.state.currentIndex){
        return null
      }
      if(i== this.state.currentIndex){
       return( 
        <Animated.View key={item.id} style={this.position.getLayout()}
        {...this.PanResponder.panHandlers} >
       <View style={{flex:1,position:"absolute",height:SCREEN_HEIGHT,width:SCREEN_WIDTH,backgroundColor:"black"}}>
        {/* <View style={{flex:1,backgroundColor:"black"}}>
        <Text style={{color:"white"}}>{ VIDEOS[i].uri}</Text>
        </View> */}
        <WebView 
        style={{flex:1}}
        javaScriptEnabled={true}
        source={{ uri:  VIDEOS[i].uri}}/>
       </View>
       </Animated.View>
        )
      }
      else{
        return(
        <Animated.View key={item.id}  >
       <View style={{flex:1,position:"absolute",height:SCREEN_HEIGHT,width:SCREEN_WIDTH,backgroundColor:"black"}}>
        {/* <View style={{flex:1,backgroundColor:"black"}}>
        <Text style={{color:"white"}}>{ VIDEOS[i].uri}</Text>
        </View> */}
        <WebView 
        style={{flex:1}}
        javaScriptEnabled={true}
        source={{ uri:  VIDEOS[i].uri}}/>
       </View>
       </Animated.View>
        )
      }

    }).reverse()
}

render() {
  return (
      <View style={{ flex: 1 }}>
     
     
          {this.renderVideos()}
      </View>
  )

}

}
