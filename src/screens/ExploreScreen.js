import * as React from 'react';
import { View, Text } from 'react-native';
import HeaderBar from "../components/Header"

export default function ExploreScreen() {
    return (
     <View style={{ flex: 1}}>
     <HeaderBar/>   
     <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Text>Explore Screen</Text>
     </View>
     </View>       
  );
}