import React, { useState } from "react";
import avatar from "../assets/addAvatar.png";
import { createUserWithEmailAndPassword , updateProfile} from "firebase/auth";
import {auth , storage,db} from "../firebase";
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import { Link, useNavigate } from "react-router-dom";


const Register = () => {
  const [err,setErr] = useState(false);
  const naviagte =useNavigate()
  const handleSubmit =async(event)=>{
    event.preventDefault();
    const displayName =event.target[0].value;
    const email = event.target[1].value;
    const password = event.target[2].value;
    const file = event.target[3].files[0];
    
   
try{
  const res = await createUserWithEmailAndPassword(auth, email, password);


const storageRef = ref(storage, displayName);

const uploadTask = uploadBytesResumable(storageRef, file);

// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
uploadTask.on(
  
    
   
  (error) => {
    // Handle unsuccessful uploads
    setErr(true);
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
      await updateProfile(res.user,{
        displayName,
        photoURL:downloadURL,
      })
      await setDoc(doc(db ,"users",res.user.uid),{
        uid:res.user.uid,
        displayName, email, photoURL:downloadURL,
      
       });
       await setDoc(doc(db,"userChats",res.user.uid),{})
       naviagte("/")
    });
  }
);
 



}catch(err){
setErr(true)
}
  

}
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat App</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="display name"></input>
          <input type="email" placeholder="email"></input>
          <input type="password" placeholder="password"></input>
          <input style={{display:"none"}}type="file" id="file"></input>
          <label htmlFor="file"> <img src={avatar} alt="" />
          <span>Add an Avatar</span></label>
          <button>Sign up</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>You do have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
};

export default Register;
