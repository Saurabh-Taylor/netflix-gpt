import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import { addGptMovieResult, toggleGptSearchView } from '../store/features/gptSlice';
import { useDispatch, useSelector } from 'react-redux';



const SearchBar = () => {
  const dispatch = useDispatch()
  const showGptSearch = useSelector(state=> state.gpt.showGptSearch)
    
  const handleGptSearchClick = (e)=>{
    e.preventDefault()
    dispatch(toggleGptSearchView())
    if(!showGptSearch){
      dispatch(addGptMovieResult({movieResults:"" , movieNames:""}))
    }
  }
  return (
   <Link to={"/"} >
     <button onClick={handleGptSearchClick} type="button" className=" flex justify-center items-center focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2.5  dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 mr-4 "> {showGptSearch ?"HomePage": "Gemini Search"} <span className='ml-1.5' ><FaSearch /></span> </button>
   </Link>

  )
}

export default SearchBar