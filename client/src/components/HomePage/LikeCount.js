import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { likeCountAnimation } from './animation';

import '../../css/HomePage/LikeCount.css';
import { useEffect } from 'react';

const LikeCount = () => {

  let likeCountRef = [];
  useEffect(()=>{
    likeCountAnimation(likeCountRef);
  },[]);

  return (
    <div className="likeCountContainer">
      <div className="likeCountWrap">
        <section ref={e=>likeCountRef.push(e)}>
          <a href="https://www.facebook.com/bacalhau.ent" target="__blank">
            <div className="likeCountSection fb">
              <FontAwesomeIcon className="socialIcon" icon={faFacebook} size='5x' color='#4867AA'/>
              <div className="likeCount">
                13萬+
                <p className="likeUnit">讚好</p>
              </div>
            </div>
          </a>
        </section>
        <section ref={e=>likeCountRef.push(e)}>
          <a href="https://www.instagram.com/bacalhau.ent/" target="__blank">
            <div className="likeCountSection ig">
              <FontAwesomeIcon className="socialIcon" icon={faInstagram} size='5x' color='#C13584'/>
              <div className="likeCount">
                6萬+
                <p className="likeUnit">追蹤</p>
              </div>
            </div>
          </a>
        </section>
        <section ref={e=>likeCountRef.push(e)}>
          <a href="https://www.youtube.com/bacalhauent" target="__blank">
            <div className="likeCountSection youtube">
              <FontAwesomeIcon className="socialIcon" icon={faYoutube} size='5x' color='#FE0000'/>
              <div className="likeCount">
                13萬+
                <p className="likeUnit">訂閱</p>
              </div>
            </div>
          </a>
        </section>
      </div>
    </div>
  )
}

export default LikeCount