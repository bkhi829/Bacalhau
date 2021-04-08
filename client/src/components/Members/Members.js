import { useState,useEffect, useRef } from 'react';

import TabContainer from './TabContainer';
import InfoContainer from './InfoContainer';
import {fetchAllMembers} from '../../api/index';
import '../../css/MemberPage/Member.css';


const Members = () => {

  const [frontMembers,setFrontMembers] = useState([]);
  const [backMembers,setBackMembers] = useState([]);
  const [currMember, setCurrMember] = useState({});
  const InfoRef = useRef(null);

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

  return (
  <div className="MemberPage">
    <main className="memberMain">
      <TabContainer frontMembers={frontMembers} backMembers={backMembers} setCurr={setCurrMember} infoRef={InfoRef}/>
      <InfoContainer data={currMember} ref={InfoRef}/>
    </main>
  </div>
)}

export default Members;