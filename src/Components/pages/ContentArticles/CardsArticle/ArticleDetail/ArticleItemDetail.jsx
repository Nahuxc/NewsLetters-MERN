import React from 'react'

/* variables globales helpers */
import { Global } from '../../../../../helpers/Global';

import { useContext } from 'react';

import ArticlesContext from '../../../../context/ContextArticles';

/* notification */
import { useNotification } from '../../../../../notification/notification';



/* css styles */
import "./ArticleItemDetail.css"

const ArticleItemDetail = ({_id, title, content, date, creator,category, country, img }) => {

  const {deleteArticle} = useContext(ArticlesContext)
  const { setNotification } = useNotification()

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
              <span>Creador de la noticia: {creator} </span>
              <p className='country-text'> Pais: {country} </p>
              <p className='country-text'> Categoria: {category} </p>
              <p className='date-detail'> Fecha de subida: {date} </p>
              <p> {content} </p>
          </div>
          {/* btns */}
          <div className='detail-content_btns'>
            <button className='btn-edit'>Editar</button>
            <button className='btn-delete' onClick={()=>{
              deleteArticle(_id)
              setNotification("success", "se elimino correctamente el Articulo")
            }}>Borrar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleItemDetail