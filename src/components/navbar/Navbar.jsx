import React, { useState } from 'react'
import './navbar.css';
import logo from "../../assets/logo.png"
import {IoClose} from 'react-icons/io5';
import {GiHamburgerMenu} from 'react-icons/gi'
const Navbar = () => {
  const [isToogle , setToogle] = useState(false)
  return (
    <nav className='App__navbar gradient__bg '>
      <img src={logo} alt="logo"  className='navbar_logo'/>
      <ul className='App__navbar-links'>
        <li ><a href='#home'>Home</a></li>
        <li ><a href='#home'>What is GPT?</a></li>
        <li ><a href='#home'>Open AI</a></li>
        <li ><a href='#home'>Case Studies</a></li>
        <li ><a href='#home'>Libary</a></li>
      </ul>
      <div className='App__navbar-login'>
        <button type='button' className='navbar-signin'>Sign in</button>
        <button type='button'  className='navbar-signup'>Sign up</button>

      </div>
      <div className='App__navbar-smallscreen'>
      { isToogle === false ? <GiHamburgerMenu fontSize={27} onClick = {() => {setToogle(!isToogle)}}/> :
       <IoClose fontSize={27}  onClick = {()=>{setToogle(!isToogle)}}/>}
      { isToogle && (
        <div className= 'App__navbar-smallscreen-layout'>
           
      <ul className='App__navbar-links-smallscreen'>
        <li ><a href='#home'>Home</a></li>
        <li ><a href='#home'>What is GPT?</a></li>
        <li ><a href='#home'>Open AI</a></li>
        <li ><a href='#home'>Case Studies</a></li>
        <li ><a href='#home'>Libary</a></li>
      </ul>
    

      </div>
      )}
      </div>
      
    </nav>
  )
}

export default Navbar