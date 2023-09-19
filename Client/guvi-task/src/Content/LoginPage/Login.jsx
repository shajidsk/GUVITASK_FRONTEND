import React, { useState } from "react";
import Axios from "axios";
import "./Login.css";
import NavBar from "../NavBar/NavBar";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  localStorage.setItem('email', email)
 
  const navigate = useNavigate()
  const handleLogin = async()=>{
    if(email=='' || password==''){
      alert('Please give all required fields')
    }else{
      try{
        
        let res = await Axios.post('http://127.0.0.1:4000/post',{
          email, password
        }).then((res)=> console.log(res)).catch((err)=>console.log(err))
        if(res.data ==='ok'){
          navigate('/profile')
        }else{
          alert('Invalid Credentails')
        }
      }catch(err){
        alert('Invalid Credentails')
      }
    }
  }
  return (
    <>
      <NavBar />
      <div id="login-page-container">
        <p id="login-form-title">Login Form</p>
        <label id="email-label">Email</label>
        <input type="text"  onChange={(event) => setEmail(event.target.value)}
          value={email} />
        <br />
        <label id="password-label">Password</label>
        <input
          type="password"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
        />
        <br />
        <button id="login-button" onClick={handleLogin}>Login</button>
      </div>
    </>
  );
}
