import React from 'react'

/* helper */
import { Global } from '../../../../../helpers/Global'

/* css styles */
import "./Article.css"

/* react router */
import { Link } from 'react-router-dom'

/* datos por props para crear la card */
const Article = ({_id, title, creator, country, date, img}) => {

  return (
    <div className='card'>
      <div className='card-content'>
          {
            img ? <img src={Global.url + "img/" + img} alt={img} /> : ""
          }
          <div className='card-content_texts'>
            <h3> {title} </h3>
            <span>Creado por {creator} </span>
            <p className='countryText'>Pais: {country} </p>
            <p className='dateText'>Fecha: {date} </p>
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