import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addPopularMovies } from '../store/features/movieSlice'
import { options } from '../constants'

const usePopularMovies = () => {
    // it was getting done in Browse.jsx , but its not good practice though thats why better approach is to use custom hooks


    const dispatch = useDispatch()

    const PopularMovies = async()=>{
        try {
            const response = await  fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', options)
            const data = await response.json()
            dispatch(addPopularMovies(data.results))
            console.log(data.results);
        }catch (error) {
            throw new Error("error fetching api NOW PLAYING ::" , error.message)
        } 
    }

    useEffect(() => {
        PopularMovies()
      }, [])
      


  return (
    <div>

    </div>
  )
}

export default usePopularMovies