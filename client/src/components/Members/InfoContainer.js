import React from 'react';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../../css/Members/InfoContainer.css';

const InfoContainer = ({data},ref)=>{

  const imgSource = ('icon_url' in data && data.icon_url!==null)? (data.icon_url.match(/http/)!==null?data.icon_url:`./assests/${data.icon_url}`): "";
  const fbIcon = ('facebook_url' in data && data.facebook_url.length>0)?<a href={data.facebook_url}><FontAwesomeIcon className="socialIcon" icon={faFacebook} size='2x' color='#4867AA'/></a>:"";
  const igIcon = ('instagram_url' in data &&data.instagram_url.length>0)?<a href={data.instagram_url}><FontAwesomeIcon className="socialIcon" icon={faInstagram} size='2x' color='#C13584'/></a>:"";
  const ytIcon = ('youtube_url' in data &&data.youtube_url.length>0)?<a href={data.youtube_url}><FontAwesomeIcon className="socialIcon" icon={faYoutube} size='2x' color='#FE0000'/></a>:"";
  const nickname = ('nickname' in data && data.nickname.length>0)?data.nickname.join(", "):"";
  const sayTitle = ('saying' in data && data.saying.length>0)?<h4>個人金句</h4>:"";
  const sayItems = ('saying' in data && data.saying.length>0)?data.saying.map((el,ind)=><li className="SayingItem" key={ind}><q>{el}</q></li>):"";
  
  return (
    <div className="InfoContainer" ref={ref}>
      <div className="ImgContainer">
        <img src={imgSource} alt=" "></img>
        <div className="SocialContainer">
          {fbIcon}
          {igIcon}
          {ytIcon}
        </div>
      </div>
      <div className="TxtContainer">
        <h2 className="NameBox">{data.name}</h2>
        <i className="NicknameBox">
          {nickname}
        </i>
        <p className="DescriptionBox">{data.description}</p>
        <div className="SayingBox">
          {sayTitle}
          <ol className="SayingList">
            {sayItems}
          </ol>
        </div>
      </div>
    </div>
  )
}

export default React.forwardRef(InfoContainer);