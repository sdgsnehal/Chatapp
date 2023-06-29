import React from "react";
import avatar from "../assets/addAvatar.png"

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat App</span>
        <span className="title">Register</span>
        <form>
          
          <input type="email" placeholder="email"></input>
          <input type="password" placeholder="password"></input>
          
          <button>Sign In</button>
        </form>
        <p>You don't have an account? Register</p>
      </div>
    </div>
  );
};

export default Login;
