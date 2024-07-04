import React, { useEffect, useState } from 'react'
import { options } from '../constants'

const useGetTrailerVideo = ({id}) => {

    const [trailer, setTrailer] = useState("")

    const getMovies= async ()=>{
        
        const response  = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
        const data = await response.json()
        const newData = data?.results?.find((movie)=> movie.type === "Trailer")
        setTrailer(newData.key)
    }

    useEffect(() => {
        getMovies()
    }, [])
    
    return trailer
  
}

export default useGetTrailerVideo