import React, { useRef, useState } from "react";
import "./SignUp.css";
import NavBar from "../NavBar/NavBar";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
    const navigate = useNavigate()
    const[name, setName] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[confirmPassword, setConfirmPassword] = useState('')
    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()
    const handleSignUp = ()=>{
        if(name == '' || email == '' || password == '' || confirmPassword==''){
            alert('Please give all require fields')
        }
        else{
            navigate('/login')
        }
    }
  return (
    <>
    <NavBar/>
      <div id="signup-container">
          <p id="signup-name">SignUp</p>
          <div>
            <input
            ref={nameRef}
              type="text"
              name="Name"
              placeholder="Name"
              className="signup-input"
              onChange={(event)=>setName(event.target.value)}
              value={name}
            />
            <input
            ref={emailRef}
              type="email"
              name="email"
              placeholder="Email Address"
              className="signup-input"
              onChange={(event)=>setEmail(event.target.value)}
              value={email}
            />
            <input
            ref={passwordRef}
              type="password"
              name="password"
              placeholder="password"
              className="signup-input"
              onChange={(event)=>setPassword(event.target.value)}
              value={password}
            />
            <input
            ref={confirmPasswordRef}
              type="password"
              name="confirm password"
              placeholder="confirm password"
              className="signup-input"
              onChange={(event)=>setConfirmPassword(event.target.value)}
              value={confirmPassword}
            />
          </div>
          <input type="submit" name="" value="SignUp" id="signup-button" onClick={handleSignUp}/>
      </div>
    </>
  );
}
