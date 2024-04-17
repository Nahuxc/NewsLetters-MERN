import React from 'react'

import { Global } from '../../../../helpers/Global'

import "./Article.css"
import { Link } from 'react-router-dom'

/* datos por props para crear la card */
const Article = ({_id, title, content,creator, date, img}) => {
  return (
    <div className='card'>
      <div className='card-content'>
          {
            img ? <img src={Global.url + "img/" + img} alt={img} /> : ""
          }
          <div className='card-content_texts'>
            <h3> {title} </h3>
            <span>Creador: {creator} </span>
            <p className='dateText'>Fecha: {date} </p>
            <p> {content} </p>
          </div>
          <div className='card-footer'>
              <div className='card-content_btns'>
                <Link to={"/articleDetail/"+_id} className='btn-info'>Ver Mas Informacion</Link>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Article