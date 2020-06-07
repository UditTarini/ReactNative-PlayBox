import * as React from 'react';
import { View, Text } from 'react-native';
import HeaderBar from "../components/Header"

export default function SubscribeScreen() {
    return (
     <View style={{ flex: 1}}>
     <HeaderBar/>   
     <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Text>Subscribe Screen</Text>
     </View>
     </View>       
  );
}