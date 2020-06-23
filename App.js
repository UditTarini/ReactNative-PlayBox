import React from "react";

import HomeScreen from "./src/screens/HomeScreen"
import SearchScreen from "./src/screens/SearchScreen"
import MenuScreen from "./src/screens/MenuScreen"
import VerticalScreen from "./src/screens/VerticalScreen"
import VideoPlayerScreen from "./src/screens/VideoPlayerScreen"
import MovieScreen from "./src/screens/MovieScreen"

import { NavigationContainer, DefaultTheme,DarkTheme,useTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator  } from '@react-navigation/material-bottom-tabs';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {Provider, useSelector} from 'react-redux'
import {createStore,combineReducers} from 'redux'
import {reducer} from './src/Reducers/Reducer'
import {themeReducer} from './src/Reducers/themeReducer'


const customDefaultTheme={
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    background:"white",
  }
}

const rootReducer = combineReducers({
  Data:reducer,
  DarkMode:themeReducer
})

const store = createStore(rootReducer)

const Stack = createStackNavigator();
const Tabs = createMaterialBottomTabNavigator ();


const StackScreen=()=> {
  const {colors} = useTheme()
  return (
  
      <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;
  
          if (route.name === 'Home') {
            iconName = 'home';
          } else if(route.name === 'Movie'){
            iconName = 'local-movies'
          }else if (route.name === 'Vertical') {
            iconName = 'videocam';
          }else if(route.name === 'Menu'){
            iconName = 'settings'
          }
  
      
          return <MaterialIcons name={iconName} size={22} color={color} />;
        },
      })}
      activeColor= '#3edced'
      inactiveColor= 'grey'
      barStyle= {{ backgroundColor: colors.card }}
      style={{borderBottomColor:"white"}}
      >
        <Tabs.Screen name="Home" component={HomeScreen} />
        <Tabs.Screen name="Movie" component={MovieScreen} />
        <Tabs.Screen name="Vertical" component={VerticalScreen} />
        <Tabs.Screen name="Menu" component={MenuScreen} />
        
      </Tabs.Navigator>
   
  );
}

export  function MainNavigation() {
  
  let theme = useSelector(state=>{
    return state.DarkMode
  })

  return (
   
    <NavigationContainer theme={theme?DarkTheme:customDefaultTheme} >
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