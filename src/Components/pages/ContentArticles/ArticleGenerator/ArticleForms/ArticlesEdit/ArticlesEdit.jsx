import React, { useEffect, useState } from 'react'

/* material ui */
import Alert from '@mui/material/Alert';

/* hook P */
import { useForm } from "../../../../../../hooks/useForm"

/* import react icons */
import { FaArrowAltCircleLeft } from "react-icons/fa";
/* router */
import { Link, useParams } from 'react-router-dom';

/* context */
import { useContext } from "react"
import ArticlesContext from '../../../../../context/ContextArticles'
import { Global } from '../../../../../../helpers/Global';
import { PetitionData } from '../../../../../../helpers/PetitionData';


const ArticlesEdit = () => {

  const { formulario, cambiado } = useForm({})

  const {articles, getDataArticlesID} = useContext(ArticlesContext)

  const [result, setResult] = useState("")

  const {pid} = useParams()

  useEffect(()=>{
    getDataArticlesID(pid)
  }, [articles])


  const editArticle = async (e) =>{
    e.preventDefault()

    /* obtenemos los datos */
    let newArticle = formulario

    /* guardamos los datos en el backend */
    const { dataArray } = await PetitionData(Global.url + "article/"+ articles._id, "PUT", newArticle);

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
    <div>
      <div className='box-backbtn'>
            <Link className='btnBack' to={"/articleDetail/"+articles._id} > <FaArrowAltCircleLeft /> </Link>
            <h2>Edita Tu Articulo: {articles.title} </h2>
        </div>
      <div className='box-content-form'>
        {/* Template tiempo real */}
        <div className='background-content'>
          {/* Formulario */}
          <div className='box-form'>
            <h3>Genera / Crea Tu Noticia</h3>
            {result == "guardado" ? <Alert severity="success">Se Ha Editado</Alert> : ""}
            {result == "no_enviado" ? <Alert severity="error">No Se Ha Podido editar.</Alert> : ""}

            <form className='form' onSubmit={editArticle}>

              {/* input title */}
              <p htmlFor='title'>Titulo:</p>
              <input onChange={cambiado} type="text" name='title' placeholder='Titulo' defaultValue={articles.title} />



              {/* input creator */}
              <p htmlFor='creator'>Creador:</p>
              <input onChange={cambiado} type="text" name='creator' placeholder='Usuario | creador' defaultValue={articles.creator} />

              {/* input Country */}
              <p htmlFor='title'>Pais:</p>
              {/* <input onChange={cambiado} type="text" name='country' placeholder='Indique el Pais' defaultValue={articles.country} /> */}

              <select onChange={cambiado} name="country" >
              <option selected disabled>Elige Un Pais</option>
              <option value="Argentina">Argentina</option>
              <option value="Colombia">Colombia</option>
              <option value="Mexico">Mexico</option>
              <option value="España">España</option>
            </select>


              {/* input category */}
              <p htmlFor='title'>Categoria:</p>
              {/* <input onChange={cambiado} type="text" name='category' placeholder='Categoria'  /> */}

              <select onChange={cambiado}  name="category" >
              <option selected disabled>Elige Una Categoria</option>
              <option value="Polemica">Polemica</option>
              <option value="Politica">Politica</option>
              <option value="Futbol">Futbol</option>
            </select>


              {/* input content */}
              <p htmlFor="content" >Descripcion:</p>
              <textarea  onChange={cambiado} className='textArea' name='content' defaultValue={articles.content} placeholder='Descripcion'></textarea>

              {/* input Upload img */}
              <div>
                <p htmlFor="file0">Subir Imagen</p>
                <input className='inputFile' type="file" name="file0" id='file' />
                {articles.img != "default.png" &&  <img className='imgForm' src={Global.url + "img/" + articles.img} alt={articles.img} /> }
              </div>

              <input className='btn-submit' type="submit" value="Actualizar Articulo" />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticlesEdit