import React from 'react'
import './navbar.css';
import logo from "../../assets/logo.png"
const Navbar = () => {
  return (
    <nav className='App__navbar'>
      <img src={logo} alt="logo" />
      <ul className='App__navbar-links'>
        <li >Home</li>
        <li >What is GPT?</li>
        <li >Open AI</li>
        <li >Case Studies</li>
        <li >Libary</li>
      </ul>
      <div className='App__navbar-login'>
        <a href='#signin' >Sign in</a>
        <button type='button' >Sign up</button>
      </div>
    </nav>
  )
}

export default Navbar