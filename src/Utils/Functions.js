import {youtube_api} from '../Secrets'



var baseUrl01 = 'https://www.googleapis.com/youtube/v3/search?part=snippet&regionCode=in&maxResults=2&'
var baseUrl02 = 'https://www.googleapis.com/youtube/v3/videos?part=snippet&regionCode=in&maxResults=2&'
//https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&channelId=UChuZAo1RKL85gev3Eal9_zg
export const fetchData = async (type,filter) =>{
 
   
   

   let url = ( {
    'cat_id': `${baseUrl02}chart=mostPopular&videoCategoryId=${filter}&key=${youtube_api}`,
    'ch_id' : `${baseUrl01}&channelId=${filter}&key=${youtube_api}`,
    'q'     : `${baseUrl01}q=${filter}&type=video&key=${youtube_api}`,
   } )[ type ] || `${baseUrl02}chart=mostPopular&key=${youtube_api}`;

  return await fetch(url)
  .then(res=>res.json())
  .then(data=>{
    console.log(url)
    return(data.items)
      
  })


}


export const fetchLogo = async (channelId) =>{
 
  return await fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&fields=items%2Fsnippet%2Fthumbnails&key=${youtube_api}`)
 .then(res=>res.json())
 .then(data=>{
 
      
     return(data.items[0].snippet.thumbnails.default.url)
     
 })


}

export const fetchHomeData = async ()=>{
 const arr=[]

 url01 = `${baseUrl01}q='tech'&type=video&key=${youtube_api}`
 url02 = `${baseUrl02}chart=mostPopular&videoCategoryId=20&key=${youtube_api}`
 url03 = `${baseUrl02}chart=mostPopular&videoCategoryId=10&key=${youtube_api}`
 url04 = `${baseUrl02}chart=mostPopular&key=${youtube_api}`
 const url = [url01, url02, url03, url04]

for (i=0; i<url.length; i++ )
{

  await fetch(url[i])
  .then(res=>res.json())
  .then(data=>{
 
  arr.push(data.items)
    
})
}
//console.log(arr[0])
shuffleArray(arr)
return arr

}


const shuffleArray=(array)=> {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}