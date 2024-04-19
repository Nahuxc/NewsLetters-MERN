import React, { useState } from 'react'

/* import react icons */
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Search = () => {

  const [buscar, setBuscar] = useState("")

  const navegar = useNavigate()

  const doSearch = (e) =>{
    e.preventDefault()

    let my_search = e.target.search_field.value

    if(my_search == "" || my_search == undefined){
      navegar("/articles")
    }else{
      navegar("/articles/search/"+my_search, {replace: true})
    }

  }

  return (
    /* search component */
      <form className='box-search' onSubmit={doSearch}>
        <FaSearch /> <input name='search_field' className='inputSearch' placeholder='Buscar' type="search" />
        <input className='btnsearch' type="submit" id='btn_search' value="Buscar" />
      </form>
  )
}

export default Search