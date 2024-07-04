import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {  addUpcomingMovies } from '../store/features/movieSlice'
import { options } from '../constants'

const useUpcomingMovies = () => {
    // it was getting done in Browse.jsx , but its not good practice though thats why better approach is to use custom hooks


    const dispatch = useDispatch()

    const UpcomingMovies = async()=>{
        try {
            const response = await  fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
            const data = await response.json()
            dispatch(addUpcomingMovies(data.results))
            console.log(data.results);
        }catch (error) {
            throw new Error("error fetching api NOW PLAYING ::" , error.message)
        } 
    }

    useEffect(() => {
        UpcomingMovies()
      }, [])
      
}

export default useUpcomingMovies