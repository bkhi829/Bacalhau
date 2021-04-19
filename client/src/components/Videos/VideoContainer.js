import { useState, useEffect, useRef } from 'react';
import { fetchVideos } from '../../api/index.js';
import { fadeInAnimation, fadeOutAnimation } from './animation';
import Youtube from 'react-youtube';
import VideoItem from './VideoItem';

import '../../css/Videos/VideoContainer.css';

const VideoContainer = ({activePlaylist})=>{

  const [videos,setVideos] = useState([]);
  const containerRef = useRef(null);
  const [activeVideo, setActiveVideo] = useState(null);
  const [nextPageToken,setNextPageToken] = useState(null);
  // const [prevPageToken,setPrevPageToken] = useState(null);
  const [ytopts,setYtopts] = useState({
    width: '100%',
    height:'480px'
  });

  const handleMediaQueryChange = (e)=>{
    if(e.matches){
      setYtopts({...ytopts,height:'240px'})
    } else {
      setYtopts({...ytopts,height:'480px'})
    }
  }

  useEffect(()=>{
    fadeOutAnimation(containerRef).then(()=>{
      fetchVideos(activePlaylist.playlistID).then((res)=>{
        if('nextPageToken' in res.data){
          setNextPageToken(res.data.nextPageToken);
        }
        setVideos(res.data.items);
        if(res.data.items.length > 0){
          const first_vid = res.data.items[0].snippet.resourceId.videoId;
          setActiveVideo(first_vid);
          fadeInAnimation(containerRef);
        }
      }).catch(err=>console.error(err));
    })
  },[activePlaylist]);

  useEffect(()=>{
    const isMobile = window.matchMedia('only screen and (min-device-width: 320px) and (max-device-width: 812px)');
    isMobile.addEventListener('change',handleMediaQueryChange);

    return ()=>{
      isMobile.removeEventListener('change',handleMediaQueryChange);
    }
  });
  
  const list = videos.map((ele,ind)=><VideoItem key={ind} data={ele} setActiveVideo={setActiveVideo} />);


  if(activePlaylist && Object.keys(activePlaylist).length===0 && activePlaylist.constructor===Object){
    return(<div></div>)
  }

  return (
    <div className="videoContainer" ref={containerRef}>
      <div className="youtubePlayer">
        <Youtube videoId={activeVideo} opts={ytopts} />
      </div>
      <div className="vlistContainer">
        {list}
      </div>
    </div>
  )
}

export default VideoContainer;