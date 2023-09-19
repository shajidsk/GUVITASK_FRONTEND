import React from 'react'
import { Link } from 'react-router-dom'
import './UserNavBar.css'
export default function UserNavBar() {
  return (
    <div id='nav-container'>
    <p id='user-app-name'>Guvi-Task-App</p>
    <div id='login-signup-div'>
        <Link to='/login'><button id='logout-name' className='buttons-title'>Logout</button></Link>
    </div>
   </div>
  )
}
