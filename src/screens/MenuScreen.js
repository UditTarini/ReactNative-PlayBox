import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import {useTheme} from '@react-navigation/native';
import { ToggleButton } from 'react-native-paper'
import HeaderBar from "../components/Header"

export default function MenuScreen() {
    const {colors} = useTheme()
    return (
     <View style={{ flex: 1,backgroundColor:colors.background}}>
     <HeaderBar/>   
     <View style={{backgroundColor:colors.card}}>
      <Text style={{...styles.text,color:colors.text}}>Rate this app</Text>
      <Text style={{...styles.text,color:colors.text}}>Feedback</Text>
      <Text style={{...styles.text,color:colors.text}}>Privacy policy</Text>
      <Text style={{...styles.text,color:colors.text}}>Terms and conditon</Text>

     </View>
     </View>       
  );
}

const styles = StyleSheet.create({
  text:{
    fontWeight:"bold",    
    fontSize:15,
    padding:20,
    marginStart:5,
  }
});