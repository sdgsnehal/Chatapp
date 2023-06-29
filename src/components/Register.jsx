import React from "react";
import avatar from "../assets/addAvatar.png"

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat App</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="display name"></input>
          <input type="email" placeholder="email"></input>
          <input type="password" placeholder="password"></input>
          <input style={{display:"none"}}type="file" id="file"></input>
          <label htmlFor="file"> <img src={avatar} alt="" />
          <span>Add an Avatar</span></label>
          <button>Sign up</button>
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
