import { useRef, useEffect } from 'react';
import MenuItem from './MenuItem';
import { scrollAnimation,btnAnimation } from './animation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

import '../../css/Videos/Menu.css';

const Menu = (props) => {

  const menuRef = useRef(null);
  const btnLRef = useRef(null);
  const btnRRef = useRef(null);
  
  const handleScroll = async (dir)=>{
    var width = menuRef.current.scrollWidth;
    var left = menuRef.current.scrollLeft;
    var pos = dir>0?Math.ceil(left+(width/props.listItem.length)):Math.floor(left+(width/props.listItem.length)*-1);
    await scrollAnimation(menuRef,pos);
    handleButton();
  }

  const handleButton = ()=>{
    var offset = menuRef.current.offsetWidth;
    var left = menuRef.current.scrollLeft;
    var width = menuRef.current.scrollWidth;
    if (left <= 0) {
      btnAnimation(btnLRef,false);
    } else {
      btnAnimation(btnLRef,true);
    }
    if(offset+left >= width){
      btnAnimation(btnRRef,false);
    } else {
      btnAnimation(btnRRef,true);
    }
  }

  const listItem = props.listItem.map((ele,ind)=>{
    return <MenuItem key={ind} ele={ele} activePlaylist={props.activePlaylist} handleListItemClick={props.handleListItemClick}/>
  })

  useEffect(()=>{
    handleButton();
  },[]);

  return (
    <div className="menuContainer">
      <button className="btnLeft" ref={btnLRef} onClick={()=>{handleScroll(-1)}}><FontAwesomeIcon icon={faCaretLeft} size='2x'></FontAwesomeIcon></button>
      
      <ul className="videosMenu" ref={menuRef} onScroll={()=>handleButton()}>
        {listItem}
      </ul>
      <button className="btnRight" ref={btnRRef} onClick={()=>{handleScroll(1)}}><FontAwesomeIcon icon={faCaretRight} size='2x'></FontAwesomeIcon></button>
    </div>
  )
}

export default Menu;