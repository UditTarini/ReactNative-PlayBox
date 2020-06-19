import React, { Component } from "react";
import { View, Text, Dimensions, PanResponder,Animated } from 'react-native';
import  WebView from 'react-native-webview'
import  {fetchVerticalVideo} from '../Utils/Functions'

let SCREEN_WIDTH = Dimensions.get('window').width
let SCREEN_HEIGHT = Dimensions.get('window').height 
export default class VerticalScreen extends Component {
  
  constructor(props) {
    super(props)

    this.position = new Animated.ValueXY()
   
    this.swipedCardPosition = new Animated.ValueXY({ x: 0, y: -SCREEN_HEIGHT })
    this.state = {
        currentIndex: 0,
        videos:[],
        loading:true
    } 

  }
 UNSAFE_componentWillMount(){
  fetchVerticalVideo().then(data=>{this.setState({videos:data,loading:false})})
  this.PanResponder = PanResponder.create({

      onStartShouldSetPanResponder: (e, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {

          if (gestureState.dy > 0 && (this.state.currentIndex > 0)) {
              this.swipedCardPosition.setValue({
                  x: 0, y: -SCREEN_HEIGHT + gestureState.dy
              })
          }
          else {

              this.position.setValue({x:0, y: gestureState.dy })

          }
      },
      onPanResponderRelease: (evt, gestureState) => {

          if (this.state.currentIndex > 0 && gestureState.dy > 50 && gestureState.vy > 0.7) {
              Animated.timing(this.swipedCardPosition, {
                  toValue: ({ x: 0, y: 0 }),
                  duration: 400
              }).start(() => {

                  this.setState({ currentIndex: this.state.currentIndex - 1 })
                  this.swipedCardPosition.setValue({ x: 0, y: -SCREEN_HEIGHT })

              })
          }
          else if (-gestureState.dy > 50 && -gestureState.vy > 0.7) {

              Animated.timing(this.position, {
                  toValue: ({ x: 0, y: -SCREEN_HEIGHT }),
                  duration: 400
              }).start(() => {

                  this.setState({ currentIndex: this.state.currentIndex + 1 })
                  this.position.setValue({ x: 0, y: 0 })

              })
          }
          else {
              Animated.parallel([
                  Animated.spring(this.position, {
                      toValue: ({ x: 0, y: 0 })
                  }),
                  Animated.spring(this.swipedCardPosition, {
                      toValue: ({ x: 0, y: -SCREEN_HEIGHT })
                  })

              ]).start()

          }
      }
  })

}
 
videoLayout = (i)=>{
  let id=this.state.loading?null:this.state.videos[i].snippet.resourceId.videoId
  return(
  <View style={{flex:1,position:"absolute",height:SCREEN_HEIGHT,width:SCREEN_WIDTH,backgroundColor:"black"}}>
  
  <WebView 
  style={{flex:1}}
  javaScriptEnabled={true}
  source={{ uri:  `https://www.youtube.com/embed/${id}?rel=0&autoplay=0&showinfo=0&controls=0&fullscreen=1`}}/>
 </View>)
}
renderVideos = ()=>{
 
  
    return this.state.videos.map((item, i) => {
      
      if(i==this.state.currentIndex-1){
        return(
          <Animated.View key={item.id} style={this.swipedCardPosition.getLayout()}
        {...this.PanResponder.panHandlers} >
       {this.videoLayout(i)}
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
       {this.videoLayout(i)}
       </Animated.View>
        )
      }
     
      
      else{
        return(
        <Animated.View key={item.id}  >
       {this.videoLayout(i)}
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
