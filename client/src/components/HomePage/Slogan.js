
import {useEffect} from 'react';
import {sloganAnimation} from './animation';
import cover from '../../img/cover.jpg';

import '../../css/HomePage/Slogan.css';

const Slogan = () => {
  let sloganRef = [];

  useEffect(()=>{
    sloganAnimation(sloganRef);
  });

  return (
    <div className="sloganContainer">
      <img src={cover} alt="cover" />
    </div>
  )
}

export default Slogan;