import React from 'react'
import './navbar.css'
const Navbar = () => {
  return (
    <div className="navbar">
      <img src="https://alphanumericideas.com/images/alphanumeric-logo.webp" alt="" srcset=""/>
      <div className="navbar-container">
        <a href="">Home</a>
        <a href="">About Us</a>
        <a href="">Our Services</a>
        <a href="">Our Work</a>
        <a href="">Careers</a>
        <a href="">Blog</a>
        <a href="">reviews</a>
        
      </div>
      <button>Contact Us</button>
    </div>
  )
}

export default Navbar