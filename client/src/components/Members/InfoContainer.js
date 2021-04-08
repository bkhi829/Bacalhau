import React from 'react';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../../css/MemberPage/InfoContainer.css';

const InfoContainer = (props,ref)=>{
  return (
    <div className="InfoContainer" ref={ref}>
      <div className="ImgContainer">
        <img src={`./assests/${props.data.icon_url}.jpg`} alt=" "></img>
        <div className="SocialContainer">
          <a href={props.data.facebook_url}><FontAwesomeIcon className="socialIcon" icon={faFacebook} size='2x' color='#4867AA'/></a>
          <a href={props.data.instagram_url}><FontAwesomeIcon className="socialIcon" icon={faInstagram} size='2x' color='#C13584'/></a>
          <a href={props.data.youtube_url}><FontAwesomeIcon className="socialIcon" icon={faYoutube} size='2x' color='#FE0000'/></a>
        </div>
      </div>
      <div className="TxtContainer">
        <h2 className="NameBox">{props.data.name}</h2>
        <i className="NicknameBox">
          {props.data.nickname!==undefined?props.data.nickname.join(", "):""}
        </i>
        <p className="DescriptionBox">{props.data.description}</p>
        <div className="SayingBox">
          <h4>個人金句</h4>
          <ol className="SayingList">
            {props.data.saying!==undefined?
            props.data.saying.map((el,ind)=><li className="SayingItem" key={ind}><q>{el}</q></li>):
            ""
            }
          </ol>
        </div>
      </div>
    </div>
  )
}

export default React.forwardRef(InfoContainer);