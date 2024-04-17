import React from 'react'

import Alert from '@mui/material/Alert';

import "./ArticlesCreate.css"

import { useState } from 'react'
import { PetitionData } from "../../../../helpers/PetitionData"
import { Global } from "../../../../helpers/Global"
import { useForm } from "../../../../hooks/useForm"


import ArticleTemplate from '../ArticleTemplate/ArticleTemplate';


const ArticlesCreate = () => {

  const { formulario, cambiado } = useForm({})

  const [result, setResult] = useState()

  const saveArticle = async (e) => {
    e.preventDefault()

    /* obtenemos los datos */
    let newArticle = formulario

    /* guardamos los datos en el backend */

    const { dataArray } = await PetitionData(Global.url + "articles/crear", "POST", newArticle);

    if (dataArray.status === "success") {
      setResult(true) /* seteamos el resultado aprobado */

      /* subimos la imagen */

      const fileInput = document.querySelector("#file")

      const formData = new FormData() 

      formData.append("file0", fileInput.files[0])

      const upload = await PetitionData(Global.url + "subir-img/" + dataArray.article._id, "POST", formData, true);

      if (upload.status === "success") {
        setResult(true)
      }
    }

  }


  return (
    <div className='box-content-form'>

      {/* Template tiempo real */}
      <ArticleTemplate values={formulario} />

      <div className='background-content'>
        {/* Formulario */}
        <div className='box-form'>
          <h3>Genera / Crea Tu Noticia</h3>
          {result == true ? <Alert severity="success">Se Ha Creado La Noticia</Alert> : ""}
          {result == false ? <Alert severity="error">No Se Ha Podido crear la Noticia.</Alert> : ""}

          <form className='form' onSubmit={saveArticle} >

            {/* input creator */}
            <p htmlFor='creator'>Creador:</p>
            <input onChange={cambiado} type="text" name='creator' placeholder='Usuario | creador' />

            {/* input title */}
            <p htmlFor='title'>Titulo:</p>
            <input onChange={cambiado} type="text" name='title' placeholder='Titulo' />

            {/* input content */}
            <p htmlFor="content" >Descripcion:</p>
            <textarea onChange={cambiado} className='textArea' name='content' placeholder='Descripcion'></textarea>

            {/* input Upload img */}
            <p htmlFor="file0">Subir Imagen</p>
            <input className='inputFile' type="file" name="file0" id='file' />

            <input className='btn-submit' type="submit" value="Crear | Generar" />
          </form>
        </div>
      </div>
    </div>

  )
}

export default ArticlesCreate