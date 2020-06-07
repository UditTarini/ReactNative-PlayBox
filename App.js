import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar
} from "react-native";
import HomeScreen from "./src/screens/HomeScreen"
import SearchScreen from "./src/screens/SearchScreen"
import SubscribeScreen from "./src/screens/SearchScreen"
import ExploreScreen from "./src/screens/SearchScreen"
import VideoPlayerScreen from "./src/screens/VideoPlayerScreen"

import { NavigationContainer, DefaultTheme,DarkTheme,useTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {Provider, useSelector} from 'react-redux'
import {createStore,combineReducers} from 'redux'
import {reducer} from './src/Reducers/Reducer'
import {themeReducer} from './src/Reducers/themeReducer'

const customDarkTheme={
  ...DarkTheme,
  colors:{
    ...DarkTheme.colors,
    headerColor:"#404040",
    iconColor:"white",
    tabIcon:"white"
  }
}
const customDefaultTheme={
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    headerColor:"white",
    iconColor:"black",
    tabIcon:"red"
  }
}

const rootReducer = combineReducers({
  Data:reducer,
  DarkMode:themeReducer
})

const store = createStore(rootReducer)

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();


const StackScreen=()=> {
  return (
  
      <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;
  
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Explore') {
            iconName = 'explore';
          }else if(route.name === 'Subscribe'){
            iconName = 'subscriptions'
          }
  
          // You can return any component that you like here!
          return <MaterialIcons name={iconName} size={28} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#BB2CD9",
        inactiveTintColor: 'gray',
      }}
      
      >
        <Tabs.Screen name="Home" component={HomeScreen} />
        <Tabs.Screen name="Explore" component={ExploreScreen} />
        <Tabs.Screen name="Subscribe" component={SubscribeScreen} />
        
      </Tabs.Navigator>
   
  );
}

export  function MainNavigation() {
  
  let theme = useSelector(state=>{
    return state.DarkMode
  })

  return (
   
    <NavigationContainer theme={theme?customDarkTheme:customDefaultTheme} >
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="StackScreen" component={StackScreen} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="VideoPlayerScreen" component={VideoPlayerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}


export default function App(){
  return(
  <Provider store={store}> 
        <MainNavigation/>
  </Provider>)
}