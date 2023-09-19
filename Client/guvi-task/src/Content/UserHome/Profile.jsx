import React from 'react'
import './Profile.css'
import Axios from "axios";

export default function Profile() {
  let email = localStorage.getItem('email')
  let res = Axios.get(`http://127.0.0.1:4000/${email}`)
  console.log(res.data);
  return (
    <div id='profile-div'>
        <p id='name'>Name : {email}</p>
        <p>Email : {}</p>
    </div>
  )
}
