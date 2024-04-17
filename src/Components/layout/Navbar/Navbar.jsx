import React from 'react'
import "./Navbar.css"

/* router */
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-content'>
        <div className='box-logo'>
          <NavLink to="/home" className='logo'>NewsLetters</NavLink>
        </div>
        <ul className="contentLink">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/articles">Articles</NavLink>
          <NavLink to="/generator">Generator</NavLink>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar