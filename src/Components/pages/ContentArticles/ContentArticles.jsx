import React, { useEffect, Fragment } from 'react'
/* components and css styles */
import Article from './CardsArticle/Article/Article.jsx'
import Loader from "./Loader/Loader.jsx"
import Search from './Search/Search.jsx'
import "./ContentArticles.css"

/* librerias */
import { Link, useParams } from 'react-router-dom'

/* importamos el context */
import { useContext } from "react"
import ArticlesContext from '../../context/ContextArticles.jsx'


const ContentArticles = () => {

  const {getDataApi, dataSearch, articles, dataCategory, loading} = useContext(ArticlesContext)

  const {category} = useParams()

  const {search} = useParams() 

  console.log(search);

  /* cargar datos */

  useEffect(() => {
    if(search){
      dataSearch(search)
    }else if(category){
      dataCategory(category)
    }else{
      getDataApi()

    }
  }, [category, search])

  return (
    <Fragment>
      <div className='box-articles'>
        <div className='box-articles-filter'>
          <Search />
          <div className='box-create'>
            <div className='box-create_text'>
              <h2>Crea tu NewsLetter</h2>
              <p>Vamos Informar A la Gente sobre lo que ocurre el Mundo!</p>
            </div>
            <Link className='btnCreatelink' to="/generator">Crear</Link>
          </div>
          <div className='filter-category'>
            <h2>Filtros:</h2>
            <Link className='btnfilter' to={"/articles/Politica"}>Politica</Link>
            <Link className='btnfilter' to={"/articles/Futbol"} >Futbol</Link>
            <Link className='btnfilter' to={"/articles/Polemica"}>Polemica</Link>
          </div>
        </div>
          <div className='box-contentArticles'>
          <h2>Las Noticias Creadas: </h2>
            <div className='contentArticles'>
              {
                loading ?
                  (
                    <div className='box-loading'>
                      <Loader />
                    </div>
                  ) : (
                    articles.length >= 1 ? ( articles.map((article) => {return <Article key={article._id} {...article} />} )
                    ) : (
                      <div className='box-not-articles'>
                        <h2> No Hay Articulos <Link className='btn-notarticles' to="/generator"> Genera Tu articulo </Link> </h2>
                      </div>
                    )
                  )
              }
            </div>
          </div>
      </div>
    </Fragment>
  )
}

export default ContentArticles