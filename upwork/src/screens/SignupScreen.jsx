import "./SignupScreen.css";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
const LoginScreen = () => {
  const [Signup,setSignup]=useState();
  const handleSubmit=(e)=>{
    e.preventDefault();
  axios("/user/signup", {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    data:Signup,
    withCredentials: true,
    credentials: 'same-origin',
  }).then(response => {
  })}
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setSignup((Signup)=>({...Signup,[name]:value}))
  }
  return (
    <div className="singup_screen">
      <div className="signup_form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">User Name</label>
          <input  onChange={handleChange} type="text" name="username" placeholder="Enter user name"/>
          <label htmlFor="email">E mail</label>
          <input onChange={handleChange}  type="email" name='email' placeholder="Enter Email " />
          <label htmlFor="password">Password</label>
          <input onChange={handleChange}  type="password" name="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" placeholder="Enter password " />
          <input type="submit" value="Sign Up" />
          <button><Link to="/login">login</Link></button>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
