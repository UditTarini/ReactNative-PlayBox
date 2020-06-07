import {youtube_api} from '../Secrets'

export const fetchData = async (type,query) =>{
   let baseUrl01 = 'https://www.googleapis.com/youtube/v3/search?part=snippet&regionCode=in&maxResults=1&'
   let baseUrl02 = 'https://www.googleapis.com/youtube/v3/videos?part=snippet&regionCode=in&maxResults=1&'

   let url = 
   (type == "id" || type == "q")?
   (type=="q"? 
   url = `${baseUrl01}q=${query}&type=video&key=${youtube_api}`
  :url = `${baseUrl02}chart=mostPopular&videoCategoryId=${query}&key=${youtube_api}`)
  :url = `${baseUrl02}chart=mostPopular&key=${youtube_api}`
 
  
  return await fetch(url)
  .then(res=>res.json())
  .then(data=>{
      
   
    return(data.items)
      
  })


 }


export const fetchLogo = async (channelId) =>{
    
  return await fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&fields=items%2Fsnippet%2Fthumbnails&key=AIzaSyBFl7JEY6DseZxIGNK8wAve89vsgUtzlsA`)
 .then(res=>res.json())
 .then(data=>{
 
  
     return(data.items[0].snippet.thumbnails.default.url)
     
 })


}