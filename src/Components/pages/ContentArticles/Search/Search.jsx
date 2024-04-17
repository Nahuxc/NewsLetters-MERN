import React from 'react'

/* import react icons */
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    /* search component */
    <div className='box-search'>
      <FaSearch /> <input className='inputSearch' placeholder='Buscar' type="search" />
    </div>
  )
}

export default Search