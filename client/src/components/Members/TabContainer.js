import { useState, useRef } from 'react';
import { tabContainerInAnimation, tabContainerOutAnimation } from './animation';
import Tab from './Tab';

import '../../css/Members/TabContainer.css';

const TabContainer = (props) =>{
  const [activeTab,setActiveTab] = useState(0);
  const tabRef = useRef();

  const buildTab = (el, setfn) => <Tab key={el._id} el={el} setCurr={setfn} infoRef={props.infoRef}/>
  const handleClick = async (id) => {
    if(activeTab!==id){
      await tabContainerOutAnimation(tabRef);
      setActiveTab(id);
      tabContainerInAnimation(tabRef);
    }
  }

  return(
    <div className="tabContainer">
      <ul className="tabList">
        <li className={`tabButton ${activeTab===0?'active':''}`} onClick={()=>handleClick(0)}>玩員介紹</li>
        <li className={`tabButton ${activeTab===1?'active':''}`} onClick={()=>handleClick(1)}>幕後功臣</li>
      </ul>
      <div className="tabContent" ref={tabRef}>
        { activeTab===0?
          props.frontMembers.map((el)=>buildTab(el,props.setCurr)):
          props.backMembers.map((el)=>buildTab(el,props.setCurr))
        }
      </div>
    </div>
  )
}

export default TabContainer;