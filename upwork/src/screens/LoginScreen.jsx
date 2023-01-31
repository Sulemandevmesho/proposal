import "./LoginScreen.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
const LoginScreen = () => {
const navigate=useNavigate();
  const [login,setLogin]=useState();
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setLogin(login=>({...login,[name]:value}))
  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    axios("/user/login", {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      data:login,
      withCredentials: true,
      credentials: 'same-origin',
    }).then(response => {
      navigate('/home');
    })
  }
  return (

    <div className="login_screen">
      <div className="login_form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E mail</label>
          <input onChange={handleChange} type="email" name='email' placeholder="Enter Email " />
          <label htmlFor="password">Password</label>
          <input onChange={handleChange} type="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" name="password" placeholder="Enter password " />
          <input type="submit" value="Log In" />
          <button><Link to="/signup">signup</Link></button>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
