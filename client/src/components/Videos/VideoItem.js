import React from 'react';
import { goToAnimation } from './animation';

const VideoItem = ({data, setActiveVideo}) => {
  
  const handleClick = (id) => {
    setActiveVideo(id);
    goToAnimation();
  }

  const vid = data.snippet.resourceId.videoId;
  const title = data.snippet.title;

  return (
    <section className="videoItem" title={title} onClick={()=>{handleClick(vid)}}>
      <img src={data.snippet.thumbnails.medium.url} alt="404"/>
      <h4>{title}</h4>
    </section>
  )
}

export default VideoItem;