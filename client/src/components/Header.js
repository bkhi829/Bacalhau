import { useRef, useState } from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

import '../css/Header.css';

const Header = () => {

  const [showNav,setShowNav] = useState(true);
  const navRef = useRef(null)

  const handleClick = (show)=>{
    if(show){
      navRef.current.classList.toggle('shown');
      navRef.current.classList.add('moveDown');
      navRef.current.classList.remove('moveUp');
    } else {
      navRef.current.classList.remove('moveDown');
      navRef.current.classList.add('moveUp');
      setTimeout(()=>{navRef.current.classList.toggle('shown')},300);
    }
    setShowNav(!show);
  }

  return (
    <header>
      <div className="bgWrapper"></div>
      <Link to='/' className="mainTitle" onClick={()=>{handleClick(false)}}><h2>馬介休 Bacalhau</h2></Link>
      <nav>
        <ul className="navMenu" ref={navRef}>
          <Link to='/members' onClick={()=>{handleClick(false)}}><li>成員介紹</li></Link>
          <Link to='/videos' onClick={()=>{handleClick(false)}}><li>影片系列</li></Link>
        </ul>
        <button className="navBtn" onClick={()=>{handleClick(showNav)}}><FontAwesomeIcon icon={faBars}/></button>
      </nav>
    </header>
  )
}

export default Header;