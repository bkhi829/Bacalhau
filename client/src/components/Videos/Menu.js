import { useState, useRef} from 'react';
import MenuItem from './MenuItem';
import { scrollAnimation,btnAnimation } from './animation';

import '../../css/Videos/Menu.css';

const Menu = () => {

  const [activeItem,setActiveItem] = useState(0);
  const menuRef = useRef(null);
  const btnLRef = useRef(null);
  const btnRRef = useRef(null);

  const listItem = ["Item1","item2","item3","item4","item5","item6"];
  
  const handleScroll = async (dir)=>{
    var width = menuRef.current.scrollWidth;
    var left = menuRef.current.scrollLeft;
    var pos = dir>0?Math.ceil(left+(width/listItem.length)):Math.floor(left+(width/listItem.length)*-1);
    await scrollAnimation(menuRef,pos);
    handleButton();
  }

  const handleButton = ()=>{
    var width = menuRef.current.scrollWidth;
    var left = menuRef.current.scrollLeft;
    var offset = menuRef.current.offsetWidth;
    if(offset+left >= width){
      btnAnimation(btnRRef,false);
    } else if (left <= 0) {
      btnAnimation(btnLRef,false);
    } else {
      btnAnimation(btnLRef,true);
      btnAnimation(btnRRef,true);
    }
  }

  return (
    <div className="menuContainer">
      <button className="btnLeft" ref={btnLRef} onClick={()=>{handleScroll(-1)}}>Left</button>
      <ul className="videosMenu" ref={menuRef} onScroll={()=>handleButton()}>
        {listItem.map((ele,ind)=><MenuItem key={ind} listID={ind} label={ele} activeItem={activeItem} setActiveItem={setActiveItem}/>)}
      </ul>
      <button className="btnRight" ref={btnRRef} onClick={()=>{handleScroll(1)}}>Right</button>
    </div>
  )
}

export default Menu;