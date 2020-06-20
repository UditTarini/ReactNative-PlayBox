import React, { Component } from 'react';
import { Container,  Tab, Tabs, ScrollableTab } from 'native-base';


import {HomeTab,SongTab,TrendingTab,AnimationTab,SportsTab,EntertainmentTab,GamingTab,TechTab,TrailerTab,ComedyTab} from './Tabs/Tabs'

import HeaderBar from "../components/Header"

export default class TabsScrollableExample extends Component {
  render() {
     
    const tabProps = {
      tabStyle:{backgroundColor: 'white'},  
      textStyle:{color: 'grey', fontWeight:'bold'},
      activeTabStyle:{backgroundColor: '#fff'},
      activeTextStyle:{color: '#000',fontWeight:'bold'},
      
    };

    return (
      <Container>
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

















