import React, { useState } from "react";
import avatar from "../assets/addAvatar.png";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {auth} from '../firebase'
import { Link } from "react-router-dom";

const Login = () => {
  const [err,setErr] = useState(false);
  const naviagte =useNavigate()
  const handleSubmit =async(event)=>{
    event.preventDefault();
    
    const email = event.target[0].value;
    const password = event.target[1].value;
    
    
   
try{
  await signInWithEmailAndPassword(auth, email, password)
 



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
          
          <input type="email" placeholder="email"></input>
          <input type="password" placeholder="password"></input>
          
          <button>Sign In</button>
        </form>
        <p>You don't have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
