import React, { useState, useEffect, Fragment } from 'react'
/* components and css styles */
import Article from './Article/Article'
import Loader from "./Loader/Loader.jsx"
import Search from './Search/Search.jsx'
import "./ContentArticles.css"

/* librerias */
import { Link } from 'react-router-dom'

/* import helpers */
import { Global } from '../../../helpers/Global.js'
import { PetitionData } from '../../../helpers/PetitionData.js'




const ContentArticles = () => {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)

  /* datos fetch */
  const getDataApi = async () => {
    try {

      const { dataArray, loading } = await PetitionData(Global.url + "articles", "GET")

      if (dataArray.status === "success") {
        setArticles(dataArray.article)
      }

      setLoading(false)


    } catch (err) {
      console.log(err);
    }
  }

  /* cargar datos */
  useEffect(() => {
    getDataApi()
  }, [])



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
        </div>
        <div className='contentArticles'>
          {
            loading ?
              (
                <div className='box-loading'>
                  <Loader />
                </div>
              ) : (
                articles.length >= 1 ? (
                  articles.map((article) => {
                    return <Article key={article._id} {...article} />
                  })
                ) : (
                  <div className='box-not-articles'>
                    <h2> No Hay Articulos <Link className='btn-notarticles' to="/generator"> Genera Tu articulo </Link> </h2>
                  </div>
                )
              )
          }
        </div>
      </div>
    </Fragment>
  )
}

export default ContentArticles