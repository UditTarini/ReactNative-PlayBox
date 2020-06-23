import React from 'react';
import {View, Text} from "react-native"
import { useNavigation ,useTheme} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


export default function HeaderBar() {
  const navigation = useNavigation()
  const {colors} =  useTheme()
  
  

    return (
     
        
      <View style={{
        top: 0,
        left:0,
        right: 0,
        backgroundColor:colors.background,
        flexDirection:"row",
        justifyContent: "space-between",
        alignItems:"center",
        height:45,
        borderBottomColor: colors.background,
        borderBottomWidth: 1,
      }} >
      
      <View style={{ flexDirection: "row", justifyContent: "center",alignItems: "center"}}>  
      
      <Text style={{color:colors.text, fontWeight:"bold", marginStart:20, fontSize:21}}>Play </Text>
      <Text style={{color:"#3edced", fontWeight:"bold",  fontSize:21}}>Box</Text>
      </View>

      <MaterialIcons style={{color:"#3edced",marginEnd:20}} name="search" size={25}
      onPress={()=>navigation.navigate("SearchScreen")}  />
     
      </View>

 
    );
  }
