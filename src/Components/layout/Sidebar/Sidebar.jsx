import React, { Fragment, useRef, useState } from 'react'
import "./Sidebar.css"

import { NavLink } from 'react-router-dom'

/* icons */
import { FaArrowCircleLeft } from "react-icons/fa";

const Sidebar = () => {

  const [btn, setBtn] = useState(false)
    
  const sidebar = useRef()

  const activeSidebar = () =>{

    if(btn === false){
      sidebar.current.classList.add("active")
      setBtn(true)
    }else{
      sidebar.current.classList.remove("active")
      setBtn(false)
    }

  }

  return (
      <Fragment>
        <div className='box-logo'>
          <NavLink to="/home" className='logo'>NewsLetters</NavLink>
        </div>
        <button onClick={activeSidebar} className='btn-sidebar'> <FaArrowCircleLeft  /> </button>
        <ul ref={sidebar} className='navbar-content-sidebar'>
                <NavLink className="linksidebar" to="/home">Home</NavLink>
                <NavLink className="linksidebar" to="/articles">Articles</NavLink>
                <NavLink className="linksidebar" to="/generator">Generator</NavLink>
        </ul>
      </Fragment>
  )
}

export default Sidebar