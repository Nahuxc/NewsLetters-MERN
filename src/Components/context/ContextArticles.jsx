import { useState, createContext} from "react";



/* import helpers */
import { Global } from "../../helpers/Global.js";
import { PetitionData } from "../../helpers/PetitionData.js";

const ArticlesContext = createContext()

export const ContextArticles = ({children})=>{

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)


    /* todos los datos del fetch */
    const getDataApi = async () => {
        try {
            const { dataArray, loading } = await PetitionData(Global.url + "articles", "GET")

            if (dataArray.status === "success") {
                setArticles(dataArray.article)
            }

            setLoading(false)

            return dataArray.article

        } catch (err) {
        console.log(err);
        }
    }

    /* obtener datos por id de la api */
    const getDataArticlesID = async (pid) => {
        try {

        /* dato de la api */
        const { dataArray } = await PetitionData(Global.url + "article/"+pid, "GET")

        if(dataArray.status === "success"){
            setArticles(dataArray.articleId) /* setear datos */
        }

        return dataArray.articleId


        } catch (err) {
        console.log(err);
        }
    }


    /* obtener objetos por categoria */
    const dataCategory = async (categoryParams) =>{
        const data = await getDataApi()
        const newData = data.filter(article => article.category == categoryParams)
        setArticles(newData)
      }


      
      const dataSearch =  async (params) =>{

        const { dataArray } = await PetitionData(Global.url + "search/"+ params, "GET")

        if(dataArray.status === "success"){
            setArticles(dataArray.article) /* setear datos */
        }

        setLoading(false)
      }


    /* eliminar articulos */
    const deleteArticle = async (id) =>{
        const { dataArray } = await PetitionData(Global.url + "article/" + articles._id, "DELETE")

        if(dataArray.status == "success"){
            let articleUpdate = articles.filter(article => article._id !== id)

            setArticles(articleUpdate)
        }

        setNotification("success", "Se Elimino Correctamente El Articulo")
      }


    return(
        <ArticlesContext.Provider value={{articles,setArticles, dataSearch, loading, getDataApi, deleteArticle, getDataArticlesID, dataCategory}}>
            {children}
        </ArticlesContext.Provider>
    )
}

export default ArticlesContext