import React from 'react';
import VideoList from "../../components/VideoList"

export function HomeTab () {
    return(
     <VideoList type={'home'} query={null} />
    )
}

export function TrendingTab () {
    return(
     <VideoList type={null} query={null} />
    )
}

export  function SongTab () {
    return(
     <VideoList type={'cat_id'} query={'10'} />
    )
}

export function AnimationTab () {
  return(
   <VideoList type={'cat_id'} query={'1'} />
  )
}

export function ComedyTab () {
    return(
     <VideoList type={'q'} query={'comedy'} />
    )
}

export  function EntertainmentTab () {
    return(
     <VideoList type={'cat_id'} query={'24'} />
    )
}


export function GamingTab () {
  return(
   <VideoList type={'cat_id'} query={'20'} />
  )
}



export function SportsTab () {
    return(
     <VideoList type={'cat_id'} query={'17'} />
    )
}


export function TrailerTab () {
    return(
     <VideoList type={'q'} query={'trailer'} />
    )
}


export function TechTab () {
    return(
     <VideoList type={'cat_id'} query={'28'} />
    )
}