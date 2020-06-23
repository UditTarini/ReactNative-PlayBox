import React, { Component } from 'react';
import {useTheme} from '@react-navigation/native';
import { Container,  Tab, Tabs, ScrollableTab } from 'native-base';
import {HomeTab,SongTab,TrendingTab,AnimationTab,SportsTab,EntertainmentTab,GamingTab,TechTab,TrailerTab,ComedyTab} from './Tabs/Tabs'
import HeaderBar from "../components/Header"


const HomeScreen=(Component)=>{
  return function wraper(props){
  const {colors} = useTheme()
  return <Component {...props} colors={colors}/>
 }
}
class ClassComponent extends Component {
  
  
  render() {
   
    const tabProps = {
      tabStyle:{backgroundColor: this.props.colors.background},  
      textStyle:{color: 'grey', fontWeight:'bold'},
      activeTabStyle:{backgroundColor: this.props.colors.background},
      activeTextStyle:{color: '#3edced',fontWeight:'bold'},
      
    };

    return (
      <Container style={{backgroundColor:"red"}}>
        <HeaderBar/>
        
        <Tabs tabContainerStyle={{height: 30}} tabBarUnderlineStyle={{height: 0}} renderTabBar={()=> <ScrollableTab  />}>
        <Tab  heading="Home" {...tabProps} >
          <HomeTab />
        </Tab>
        <Tab  heading="Trending" {...tabProps}>
          <TrendingTab />
        </Tab>
        <Tab heading="Music" {...tabProps}>
          <SongTab />
        </Tab>
        <Tab heading="Music" {...tabProps}>
        <SongTab />
      </Tab>
      <Tab heading="Tech" {...tabProps}>
      <TechTab />
      </Tab>
      <Tab heading="Gaming" {...tabProps}>
      <GamingTab />
      </Tab>
      <Tab heading="Entertainment" {...tabProps}>
        <EntertainmentTab />
      </Tab>
      <Tab heading="Comedy" {...tabProps}>
        <ComedyTab />
      </Tab>
      <Tab heading="Animation" {...tabProps}>
        <AnimationTab />
      </Tab>
      <Tab heading="Sports" {...tabProps}>
        <SportsTab />
      </Tab>
      <Tab heading="Trailer" {...tabProps}>
        <TrailerTab />
      </Tab>



        </Tabs>
      </Container>
    );
  }
}


export default HomeScreen(ClassComponent)
















