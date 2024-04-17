import React from 'react'
/* components and css styles */
import "./Home.css"
import imgHome from "../../../assets/img/newspaperpreview.png"

/* librerias */
import { Link } from 'react-router-dom'


const Home = () => {
  return (

      <div className='box-home'>
          <div className='box-home-content'>
              <div className='box-home-textInit'>
                <p className='box-home-content_span'>Noticias</p>
                <h1 className='box-home-content_h1'>NEWSLETTERS</h1>
              </div>
              <div className='box-home-textP'>
                <p>Ayudanos a Informar a la gente de lo que sucede en la ciudad añadiendo informacion.</p>
              </div>
              <div className='box-btnGenerator'>
                <Link to="/generator" className='btnGenerator'>Generar Noticia</Link>
              </div>
          </div>
          <div className='box-home-content_img'>
              <img src={imgHome} alt="NewsLetters-paper" />
          </div>
      </div>
  )
}

export default Home