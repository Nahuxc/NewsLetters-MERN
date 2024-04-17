import React from 'react'

/* import react icons */
import { FaArrowAltCircleLeft } from "react-icons/fa";

/* variables globales helpers */
import { Global } from '../../../../helpers/Global';

/* react router */
import { Link } from 'react-router-dom';

/* css styles */
import "./ArticleItemDetail.css"

const ArticleItemDetail = ({ title, content, date, creator, img }) => {
  return (
    <div className="box-detail">
      <div className='box-backbtn'>
        <Link className='btnBack' to="/articles"> <FaArrowAltCircleLeft /> </Link>
      </div>
      <div className='box-detail_content'>
        <div>
          {/* importacion de imagen si existe en la ruta */}
            {
              img ? <img src={Global.url + "img/" + img} alt={img} /> : ""
            }
        </div>
        <div className='box-detail_content-items'>
          {/* datos de la card */}
          <div className='box-detail_content-texts'>
              <h2> {title} </h2>
              <p> {creator} </p>
              <p> {date} </p>
              <p> {content} </p>
          </div>
          {/* btns */}
          <div className='detail-content_btns'>
            <button className='btn-edit'>Editar</button>
            <button className='btn-delete'>Borrar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleItemDetail