import { useState,useEffect } from 'react';
import Menu from './Menu';
import VideoContainer from './VideoContainer';
import { fetchVideoTypes } from '../../api/index';

import '../../css/Videos/Videos.css';

const Videos = ()=>{

  //channelID: UC1WLQD_3Lblql-PFN6Qgcqw
  //upload: UU1WLQD_3Lblql-PFN6Qgcqw
  //playlistID: PLHdAqjAuBDsGMzCocfCVbNuOq9G77YL73 (All)
  //API_KEY : AIzaSyD11BphLx79Dm-vy5Bfop8cpRtz1hr2LUo

  // axios.get("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC1WLQD_3Lblql-PFN6Qgcqw&order=date&key=AIzaSyD11BphLx79Dm-vy5Bfop8cpRtz1hr2LUo")
  // .then(data=>console.log(data));

  const [playlistItem,setPlaylistItem] = useState([]);
  const [activePlaylist,setActivePlaylist] = useState({});
  const [fetching,setFetching] = useState(true);

  const handleListItemClick = (obj)=>{
    setActivePlaylist(obj);
  }

  useEffect(()=>{
    fetchVideoTypes().then((res)=>{
      setPlaylistItem(res.data);
      setActivePlaylist(res.data[0]);
      setFetching(false);
    }).catch(err=>console.error(err));
  },[]);

  return (
    <div className="VideosPage">
      <main className="VideosMain">
        {!fetching?<Menu listItem={playlistItem} activePlaylist={activePlaylist} handleListItemClick={handleListItemClick}/>:""}
        {!fetching?<VideoContainer activePlaylist={activePlaylist} />:""}
      </main>
    </div>
  )
}

export default Videos;