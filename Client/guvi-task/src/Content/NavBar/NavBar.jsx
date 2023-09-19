import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

export default function NavBar() {
  return (
   <div id='nav-container'>
    <p id='app-name'>Guvi-Task-App</p>
    <div id='login-signup-div'>
        <Link to='/'><button id='home-button' className='buttons-title'>Home</button></Link>
        <Link to='/login'><button id='login-name' className='buttons-title'>Login</button></Link>
        <Link to='/signup'><button className='buttons-title'>SignUp</button></Link>
    </div>
   </div>
  )
}
