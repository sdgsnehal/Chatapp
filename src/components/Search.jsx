import React, { useContext, useState } from 'react';
import { collection, query, where,getDocs, setDoc, updateDoc, serverTimestamp,doc ,getDoc} from "firebase/firestore";
import {db} from "../firebase"
import { AuthContext } from '../context/Authcontext';

const Search = () => {
  const [username,setUsername] = useState("");
  const [user,setUser] = useState(null)
  const [err,setErr] = useState(false);
  
  const {currentUser} = useContext(AuthContext)
  const handleSearch = async()=>{
    const q= query(
      collection(db,"users"),
      where("displayName","==",username)
    );
    try{
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
       setUser(doc.data())
      });

    }catch(err){
      setErr(true)
    }
 

  }
  const handleKey= e=>{
    e.code === "Enter" && handleSearch();
  }
  const handleSelect = async()=>{
    //check whether the group(chats in firestore) exists,if not create new one
    const combineId = currentUser.uid > user.uid ? currentUser.uid+user.uid : user.uid + currentUser.uid
    try{
      const res = await getDoc(doc(db,"chats",combineId))
      if(!res.exists()){
        // create a chat in chat collection
        await setDoc(doc,(db,"chats",combineId),{messages:[]});
        //create user chats
       await updateDoc(doc(db,"userChats",currentUser.uid),{
        [combineId+".userInfo"]:{
          uid:user.uid,
          displayName:user.displayName,
          photoURL:user.photoURL

        },
        [combineId+".date"]:serverTimestamp()
       });
       await updateDoc(doc(db,"userChats",currentUser.uid),{
        [combineId+".userInfo"]:{
          uid:currentUser.uid,
          displayName:currentUser.displayName,
          photoURL:currentUser.photoURL

        },
        [combineId+".date"]:serverTimestamp()
       })

      }

    }catch(err){} {

    }
    setUser(null);
    setUsername("")
    
    // create user chats
 
  }
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type="text" placeholder='Find a user' onKeyDown={handleKey} onChange={e=>setUsername(e.target.value)}
        value={username}/>

      </div>
      {err && <span>User Not Found</span>}
      {user && <div className="userchat" onClick={handleSelect}>
        <img src={user.photoURL} alt="" />
        <div className="userchatinfo">
          <span>{user.displayName}</span>
        </div>
      </div>}
    </div>
  )
}

export default Search