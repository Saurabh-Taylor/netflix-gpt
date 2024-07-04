import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../store/features/movieSlice'
import { options } from '../constants'

const useNowPlayingMovies = () => {
    // it was getting done in Browse.jsx , but its not good practice though thats why better approach is to use custom hooks


    const dispatch = useDispatch()

    const NowPlayingMMovies = async()=>{
        try {
            const response = await  fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
            const data = await response.json()
            dispatch(addNowPlayingMovies(data.results))
        }catch (error) {
            throw new Error("error fetching api NOW PLAYING ::" , error.message)
        } 
    }

    useEffect(() => {
        NowPlayingMMovies()
      }, [])
      


  return (
    <div>

    </div>
  )
}

export default useNowPlayingMovies