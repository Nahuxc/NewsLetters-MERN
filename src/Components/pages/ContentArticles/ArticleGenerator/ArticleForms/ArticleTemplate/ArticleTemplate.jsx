import React from 'react'

/* img assets */
import imgr from "../../../../../../assets/img/noticia.jpg"

/* css styles */
import "./ArticleTemplate.css"

const ArticleTemplate = (formulario) => {

    /* fecha en tiempo real */
    const today = new Date()
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()

    return (

        /* simulator template */
        <div className='cardForm'>
            <div className='card-content'>
                <img src={imgr} alt="" />
                <div className='card-content_texts'>
                    <h3>Titulo: {formulario.values.title} </h3>
                    <p>creador: {formulario.values.creator} </p>
                    <p>Pais: {formulario.values.country} </p>
                    <p>Categoria: {formulario.values.category} </p>
                    <p>Fecha: {date} </p>
                    <p> Descripcion: {formulario.values.content} </p>
                    <div className='card-content_btns'>
                        <button className='btn-info'>Ver Mas Informacion</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticleTemplate