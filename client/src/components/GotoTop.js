import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'
import { gsap } from 'gsap';
import {ScrollToPlugin} from 'gsap/ScrollToPlugin';

import '../css/GotoTop.css';

const GotoTop = ({show}) => {

  gsap.registerPlugin(ScrollToPlugin);
  const handleClick = ()=>gsap.to(window,{scrollTo:{y:0},duration:.8});

  return (
    <button className={`btnGotoTop ${show?'show':'hide'}`} onClick={handleClick} >
      <FontAwesomeIcon icon={faAngleDoubleUp} size='lg'/>
    </button>
  );
}

export default GotoTop;