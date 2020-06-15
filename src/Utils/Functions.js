import {youtube_api} from '../Secrets'


var baseUrl = 'https://www.googleapis.com/youtube/v3/'
var urlSearch = `${baseUrl}search?part=snippet&regionCode=in&maxResults=1&`
var urlVideos = `${baseUrl}videos?part=snippet&regionCode=in&maxResults=1&`


export const fetchData = async (type,filter) =>{
 
  
   
    let url = ({
    'cat_id':`${urlVideos}chart=mostPopular&videoCategoryId=${filter}&key=${youtube_api}`,
    'ch_id' :`${urlSearch}channelId=${filter}&key=${youtube_api}`,
    'vid_id':`${urlVideos}id=${filter}&key=${youtube_api}`,
    'rel_vid':`${urlSearch}relatedToVideoId=${filter}&type=video&key=${youtube_api}`,
    'q'     :`${urlSearch}q=${filter}&type=video&key=${youtube_api}`,
     
   })[ type ] || `${urlVideos}chart=mostPopular&key=${youtube_api}`;

  return await fetch(url)
  .then(res=>res.json())
  .then(data=>{
   
    return(data.items)
      
  })


}


export const fetchLogo = async (channelId) =>{
 
  return await fetch(`${baseUrl}channels?part=snippet&id=${channelId}&fields=items%2Fsnippet%2Fthumbnails&key=${youtube_api}`)
 .then(res=>res.json())
 .then(data=>{
 
     
     return(data.items[0].snippet.thumbnails.default.url)
     
 })


}

export const fetchVideoInfo = async (videoId) => {
  return await fetch(`${baseUrl}videos?part=statistics&id=${videoId}&key=${youtube_api}`)
  .then(res=>res.json())
  .then(data=>{
   
    return(data.items[0].statistics)})
}

export const abbreviateNumber=(value)=> {
  var newValue = value;
  if (value >= 1000) {
      var suffixes = ["", "K", "M", "B","T"];
      var suffixNum = Math.floor( (""+value).length/3 );
      var shortValue = '';
      for (var precision = 2; precision >= 1; precision--) {
          shortValue = parseFloat( (suffixNum != 0 ? (value / Math.pow(1000,suffixNum) ) : value).toPrecision(precision));
          var dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g,'');
          if (dotLessShortValue.length <= 2) { break; }
      }
      if (shortValue % 1 != 0)  shortValue = shortValue.toFixed(1);
      newValue = shortValue+suffixes[suffixNum];
  }
  return newValue;
}

export const fetchHomeData = async ()=>{
 const arr=[]

 let url01 = `${urlSearch}q='tech'&type=video&key=${youtube_api}`
 let url02 = `${urlSearch}q='music'&type=video&key=${youtube_api}`
 let url03 = `${urlSearch}q='sports'&type=video&key=${youtube_api}`
 let url04 = `${urlSearch}q='trailer'&type=video&key=${youtube_api}`
 const url = [url01]
 //const url = [url01, url02, url03, url04]


for (let i=0; i<url.length; i++ )
{

  await fetch(url[i])
  .then(res=>res.json())
  .then(data=>{
  for (let j=0; j<data.items.length; j++)
  arr.push(data.items[j])
    
})
}

shuffleArray(arr)

return arr

}


const shuffleArray=(array)=> {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}