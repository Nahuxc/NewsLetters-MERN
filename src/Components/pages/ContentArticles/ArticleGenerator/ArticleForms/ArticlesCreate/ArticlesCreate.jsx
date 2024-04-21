import React from 'react'

import Alert from '@mui/material/Alert';

import "./ArticlesCreate.css"

import { useState } from 'react'
import { PetitionData } from "../../../../../../helpers/PetitionData"
import { Global } from "../../../../../../helpers/Global"
import { useForm } from "../../../../../../hooks/useForm"


import ArticleTemplate from '../ArticleTemplate/ArticleTemplate';


const ArticlesCreate = () => {

  const { formulario, cambiado } = useForm({})

  const [result, setResult] = useState("")

  const saveArticle = async (e) => {
    e.preventDefault()

    /* obtenemos los datos */
    let newArticle = formulario

    /* guardamos los datos en el backend */

    const { dataArray } = await PetitionData(Global.url + "articles/crear", "POST", newArticle);

    if (dataArray.status === "success") {
      setResult("guardado")
    }else{
      setResult("no_enviado")
    }

    /* subimos la imagen */

    const fileInput = document.querySelector("#file")

    if (dataArray.status === "success" && fileInput.files[0] ) {
      setResult("guardado") /* seteamos el resultado aprobado */

      const formData = new FormData() 

      formData.append("file0", fileInput.files[0])

      const upload = await PetitionData(Global.url + "subir-img/" + dataArray.article._id, "POST", formData, true);

      if (upload.dataArray.status === "success") {
        setResult("guardado")
      }else{
        setResult("no_enviado")
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
          {result == "guardado" ? <Alert severity="success">Se Ha Creado La Noticia</Alert> : ""}
          {result == "no_enviado" ? <Alert severity="error">No Se Ha Podido crear la Noticia.</Alert> : ""}

          <form className='form' onSubmit={saveArticle} >

            {/* input title */}
            <p htmlFor='title'>Titulo:</p>
            <input onChange={cambiado} type="text" name='title' placeholder='Titulo' />



            {/* input creator */}
            <p htmlFor='creator'>Creador:</p>
            <input onChange={cambiado} type="text" name='creator' placeholder='Usuario | creador' />

            {/* input Country */}
            <p htmlFor='title'>Pais:</p>
  {/*           <input  type="text" name='country' placeholder='Indique el Pais' /> */}

            <select onChange={cambiado} name="country" >
              <option selected disabled>Elige Un Pais</option>
              <option value="Argentina">Argentina</option>
              <option value="Colombia">Colombia</option>
              <option value="Mexico">Mexico</option>
              <option value="España">España</option>
            </select>

            {/* input category */}
            <p htmlFor='title'>Categoria:</p>
{/*             <input type="text" name='category' placeholder='Categoria' /> */}

            <select onChange={cambiado}  name="category" >
            <option selected disabled>Elige Una Categoria</option>
              <option value="Polemica">Polemica</option>
              <option value="Politica">Politica</option>
              <option value="Futbol">Futbol</option>
            </select>


            {/* input content */}
            <p htmlFor="content" >Descripcion:</p>
            <textarea onChange={cambiado} className='textArea' name='content' placeholder='Descripcion'></textarea>

            {/* input Upload img */}
            <p htmlFor="file0">Subir Imagen</p>
            <input className='inputFile' type="file" name="file0" id='file' />

            <input className='btn-submit' type="submit" value="Publicar NewsLetter" />
          </form>
        </div>
      </div>
    </div>

  )
}

export default ArticlesCreate