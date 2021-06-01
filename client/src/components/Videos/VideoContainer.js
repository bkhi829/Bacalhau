import { useState, useEffect, useRef } from 'react';
import { fetchVideos } from '../../api/index.js';
import { fadeInAnimation, fadeOutAnimation } from './animation';
import Youtube from 'react-youtube';
import VideoItem from './VideoItem';
import GotoTop from '../GotoTop';

import '../../css/Videos/VideoContainer.css';

const VideoContainer = ({activePlaylist})=>{

  const [videos,setVideos] = useState([]);
  const containerRef = useRef(null);
  const [activeVideo, setActiveVideo] = useState(null);
  const [nextPageToken,setNextPageToken] = useState(null);
  const [ytopts,setYtopts] = useState({
    width: '100%',
    height:'480px'
  });
  const [btnGotoTop, setBtnGotoTop] = useState(false);

  const handleMediaQueryChange = (e)=>{
    if(e.matches){
      setYtopts({...ytopts,height:'240px'})
    } else {
      setYtopts({...ytopts,height:'480px'})
    }
  }

  const handleScroll = ()=>{
    const isMobile = window.matchMedia('only screen and (min-width: 320px) and (max-width: 812px)');
    if(isMobile && window.pageYOffset>150){
      setBtnGotoTop(true);
    } else {
      setBtnGotoTop(false);
    }
  }

  const fetch = (pid,token)=>{
    fetchVideos(pid,token).then((res)=>{
      if('nextPageToken' in res.data){
        setNextPageToken(res.data.nextPageToken);
      } else {
        setNextPageToken(null);
      }
      if(token===null){
        if(res.data.items.length > 0){
          const public_videos = res.data.items.filter((ele)=>ele.status.privacyStatus !== 'private');
          const first_vid = public_videos[0].snippet.resourceId.videoId;
          setVideos(public_videos);
          setActiveVideo(first_vid);
        }
      } else {
        setVideos(prev=>[...prev,...res.data.items])
      }      
    })
    .catch(err=>console.error(err));
  }

  useEffect(()=>{
    fadeOutAnimation(containerRef).then(()=>{
      fetch(activePlaylist.playlistID,null);
      fadeInAnimation(containerRef);
    })
  },[activePlaylist]);

  useEffect(()=>{
    const isMobile = window.matchMedia('only screen and (min-width: 320px) and (max-width: 812px)');
    isMobile.addEventListener('change',handleMediaQueryChange);

    return ()=>{
      isMobile.removeEventListener('change',handleMediaQueryChange);
    }
  });

  useEffect(()=>{
    window.addEventListener('scroll',handleScroll);

    return ()=>window.removeEventListener('scroll',handleScroll);
  },[])
  
  const list = videos.map((ele,ind)=><VideoItem key={ind} data={ele} setActiveVideo={setActiveVideo} />);
  const nextBtn = nextPageToken !== null ?<button className="loadBtn" onClick={()=>{fetch(activePlaylist.playlistID,nextPageToken)}}>顯示更多...</button>:"";


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
      {nextBtn}
      <GotoTop show={btnGotoTop}/>
    </div>
  )
}

export default VideoContainer;