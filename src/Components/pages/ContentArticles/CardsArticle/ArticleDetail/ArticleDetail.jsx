import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

/* components */
import ArticleItemDetail from './ArticleItemDetail'

/* import react icons */
import { FaArrowAltCircleLeft } from "react-icons/fa";

/* react router */
import { Link } from 'react-router-dom';

/* importamos el context */
import { useContext } from "react"
import ArticlesContext from '../../../../context/ContextArticles'


const ArticleDetail = () => {

    /* pasamos las funciones y variables del context */
    const {articles, getDataArticlesID} = useContext(ArticlesContext)
    const {pid} = useParams()

    /* cargar datos */
    useEffect(() => {
        getDataArticlesID(pid)
    }, [])

  return (
      <div>
        <div className='box-backbtn'>
            <Link className='btnBack' to="/articles"> <FaArrowAltCircleLeft /> </Link>
        </div>
        {/* importacion de datos para mandarlos al ArticleItemDetail */}
        {<ArticleItemDetail {...articles} />}
    </div>
  )
}

export default ArticleDetail