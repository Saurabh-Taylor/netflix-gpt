import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {   addTrendingMovies } from '../store/features/movieSlice'
import { options } from '../constants'

const useTrendingMovies = () => {
    // it was getting done in Browse.jsx , but its not good practice though thats why better approach is to use custom hooks


    const dispatch = useDispatch()

    const TrendingMovies = async()=>{
        try {
            const response = await  fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=1', options)
            const data = await response.json()
            dispatch(addTrendingMovies(data.results))
            console.log(data.results);
        }catch (error) {
            throw new Error("error fetching api NOW PLAYING ::" , error.message)
        } 
    }

    useEffect(() => {
        TrendingMovies()
      }, [])
      
}

export default useTrendingMovies