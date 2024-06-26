import React from 'react'

/* import Router DOM */
import { Routes, Route, BrowserRouter } from "react-router-dom"

/* import components */
import Home from '../Components/pages/Home/Home'
import Navbar from "../Components/layout/Navbar/Navbar"
import Footer from '../Components/layout/Footer/Footer'
import ContentArticles from '../Components/pages/ContentArticles/ContentArticles'
import LoaderInit from './LoaderInit/LoaderInit'
import ArticleGenerator from '../Components/pages/ContentArticles/ArticleGenerator/ArticleGenerator'
import ArticleDetail from "../Components/pages/ContentArticles/CardsArticle/ArticleDetail/ArticleDetail"
import ArticlesEdit from '../Components/pages/ContentArticles/ArticleGenerator/ArticleForms/ArticlesEdit/ArticlesEdit'

const Router = () => {

    return (
        <BrowserRouter>
            <LoaderInit/>
            <Navbar />
            <section className='content-pages'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/articles' element={<ContentArticles />} />
                    <Route path='/articles/search/:search' element={<ContentArticles />} />
                    <Route path='/articles/:category' element={<ContentArticles />} />
                    <Route path='/generator' element={<ArticleGenerator />} />
                    <Route path='/articleDetail/:pid' element={<ArticleDetail />} />
                    <Route path='/article/edit/:pid' element={<ArticlesEdit />} />
                </Routes>
            </section>
            <Footer/>
        </BrowserRouter>
    )
}

export default Router