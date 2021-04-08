
import {useEffect} from 'react';
import {sloganAnimation} from './animation';

import '../../css/HomePage/Slogan.css';

const Slogan = () => {
  let sloganRef = [];

  useEffect(()=>{
    sloganAnimation(sloganRef);
  });

  return (
    <div className="sloganContainer">
      <div className="slogan">
        <h1 ref={e=>sloganRef.push(e)}>Game</h1>
        <h1 ref={e=>sloganRef.push(e)}>Never</h1>
        <h1 ref={e=>sloganRef.push(e)}>Over！</h1>
      </div>
    </div>
  )
}

export default Slogan;