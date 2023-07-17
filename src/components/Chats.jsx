import React, { useContext, useEffect, useState } from 'react';
import {db} from "../firebase"
import { AuthContext } from '../context/Authcontext';
import { onSnapshot,doc } from 'firebase/firestore';
import { ChatContext } from '../context/ChatContext';

const Chats = () => {
  const [chats,setChats] = useState([]);
  const {currentUser} = useContext(AuthContext)
  const {dispatch} = useContext(ChatContext)
  useEffect(()=>{
    const getChats=()=>{
      const unsub = onSnapshot(doc(db, "cities", currentUser.uid), (doc) => {
        setChats(doc.data())
    });
    return () => {
      unsub();
    }
  
      
    }
    currentUser.uid && getChats()
    
  },[currentUser.uid]);
  const handleSelect= (u) => {
    dispatch({type:"CHANGE_USER",payload:u})
  }
  
  return (
    <div className='chats'>
      {Object.entries(chats)?.map(chat=>(
        <div className="userchat" key={chat[0]}
        onClick={()=>handleSelect(chat[1].userInfo)}>
        <img src={chat[1].userInfo.photoURL} alt="" />
        <div className="userchatinfo">
          <span>{chat[1].userInfo.displayName}</span>
          <p>{chat[1].userInfo.lastMessage?.text}</p>
        </div>
      </div>
      ))}
      
    </div>
  )
}

export default Chats;