import { useState,useEffect } from 'react';
import Menu from './Menu';
import VideoContainer from './VideoContainer';
import { fetchVideoTypes } from '../../api/index';

import '../../css/Videos/Videos.css';

const Videos = ()=>{
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