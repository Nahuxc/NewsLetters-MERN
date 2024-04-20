import React, {useState, useEffect} from 'react'
import "./Navbar.css"

/* router */
import { NavLink } from 'react-router-dom'

import Sidebar from '../Sidebar/Sidebar'

const Navbar = () => {

  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 1200px)").matches
  )

  useEffect(() => {
    window
    .matchMedia("(min-width: 1200px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);




  return (
    <nav className='navbar'>

{
          !matches ? (
              <Sidebar/>
          ):
          (
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
          )
        }
    </nav>
  )
}

export default Navbar