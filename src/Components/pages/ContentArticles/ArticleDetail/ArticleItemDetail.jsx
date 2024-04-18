import React from 'react'

/* variables globales helpers */
import { Global } from '../../../../helpers/Global';

import { useContext } from 'react';

import ArticlesContext from '../../../context/ContextArticles';


/* css styles */
import "./ArticleItemDetail.css"

const ArticleItemDetail = ({_id, title, content, date, creator, img }) => {

  const {deleteArticle} = useContext(ArticlesContext)

  return (
    <div className="box-detail">
      <div className='box-detail_content'>
        <div>
          {/* importacion de imagen si existe en la ruta */}
            {
              img ? <img className='img-article' src={Global.url + "img/" + img} alt={img} /> : ""
            }
        </div>
        <div className='box-detail_content-items'>
          {/* datos de la card */}
          <div className='box-detail_content-texts'>
              <h2> {title} </h2>
              <span> {creator} </span>
              <p className='date-detail'> {date} </p>
              <p> {content} </p>
          </div>
          {/* btns */}
          <div className='detail-content_btns'>
            <button className='btn-edit'>Editar</button>
            <button className='btn-delete' onClick={()=>{
              deleteArticle(_id)
            }}>Borrar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleItemDetail