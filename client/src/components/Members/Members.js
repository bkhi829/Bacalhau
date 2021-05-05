import { useState,useEffect, useRef } from 'react';

import TabContainer from './TabContainer';
import InfoContainer from './InfoContainer';
import GotoTop from '../GotoTop';
import {fetchAllMembers} from '../../api/index';
import '../../css/Members/Member.css';


const Members = () => {

  const [frontMembers,setFrontMembers] = useState([]);
  const [backMembers,setBackMembers] = useState([]);
  const [currMember, setCurrMember] = useState({});
  const [btnGotoTop, setBtnGotoTop] = useState(false);

  const mainRef = useRef(null);
  const InfoRef = useRef(null);

  const handleScroll = ()=>{
    const isMobile = window.matchMedia('only screen and (min-width: 320px) and (max-width: 812px)');
    if(isMobile && window.pageYOffset>150){
      setBtnGotoTop(true);
    } else {
      setBtnGotoTop(false);
    }
  }

  useEffect(() => {
    fetchAllMembers()
      .then((res)=>{
        res.data.forEach(el=>{
          if(el.group === "front"){
            setFrontMembers(prev=>[...prev,el]);
          } else if(el.group === "back"){
            setBackMembers(prev=>[...prev, el]);
          }
        });
      })
      .catch(err=>console.error(err));
  },[])

  useEffect(()=>{
    window.addEventListener('scroll',handleScroll);

    return ()=>window.removeEventListener('scroll',handleScroll);
  },[])

  return (
  <div className="MemberPage">
    <main className="memberMain" ref={mainRef}>
      <TabContainer frontMembers={frontMembers} backMembers={backMembers} setCurr={setCurrMember} infoRef={InfoRef}/>
      <InfoContainer data={currMember} ref={InfoRef}/>
    </main>
    <GotoTop show={btnGotoTop}/>
  </div>
)}

export default Members;