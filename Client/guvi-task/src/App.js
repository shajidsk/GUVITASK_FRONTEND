import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter, Router, Route, Routes} from 'react-router-dom'
import Login from './Content/LoginPage/Login';
import Home from './Content/Home/Home';
import SignUp from './Content/RegisterPage/SignUp';
import UserHome from './Content/UserHome/UserHome';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/profile' element={<UserHome/>}/>
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
