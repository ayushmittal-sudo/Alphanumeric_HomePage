import React from 'react'
import './navbar.css'
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="img">
            <img src="https://alphanumericideas.com/images/alphanumeric-logo.webp" alt="" srcset=""/>
        </div>
        <div className="nav-links">
          <ul>
            <li ><a href="" className='active'>Home</a></li>
            <li><a href="">About Us</a></li>
            <li><a href="">Our Services</a></li>
            <li><a href="">Our Work</a></li>
            <li><a href="">Careers</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Review</a></li>
          </ul>
        </div>
        <div className="contact-button">
          <button>Contact Us</button>
        </div>
      </div>
      {/* <img src="https://alphanumericideas.com/images/alphanumeric-logo.webp" alt="" srcset=""/>
      <div className="navbar-container">
        <a href="" className='active'>Home</a>
        <a href="">About Us</a>
        <a href="">Our Services</a>
        <a href="">Our Work</a>
        <a href="">Careers</a>
        <a href="">Blog</a>
        <a href="">reviews</a>
        
      </div>
      <button>Contact Us</button> */}
    </div>
  )
}

export default Navbar