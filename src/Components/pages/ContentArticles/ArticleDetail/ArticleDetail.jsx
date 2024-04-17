import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

/* helpers */
import { PetitionData } from '../../../../helpers/PetitionData'

/* components */
import ArticleItemDetail from './ArticleItemDetail'

/* variables globales */
import { Global } from '../../../../helpers/Global'


const ArticleDetail = () => {
    const [item, setItem] = useState([])

    const {pid} = useParams() /* dato de la url */


    const getDataApi = async (pid) => {
        try {

        /* dato de la api */
        const { dataArray } = await PetitionData(Global.url + "article/"+pid, "GET")

        if(dataArray.status === "success"){
            setItem(dataArray.articleId) /* setear datos */
        }


        } catch (err) {
        console.log(err);
        }
    }

    /* cargar datos */
    useEffect(() => {
        getDataApi(pid)
    }, [])

  return (
    /* importacion de datos desde el fetch para mandarlos al ArticleItemDetail */
    <div>
        {<ArticleItemDetail {...item} />}
    </div>
  )
}

export default ArticleDetail