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
        <li >Home</li>
        <li >What is GPT?</li>
        <li >Open AI</li>
        <li >Case Studies</li>
        <li >Libary</li>
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
        <li >Home</li>
        <li >What is GPT?</li>
        <li >Open AI</li>
        <li >Case Studies</li>
        <li >Libary</li>
      </ul>
    

      </div>
      )}
      </div>
      
    </nav>
  )
}

export default Navbar