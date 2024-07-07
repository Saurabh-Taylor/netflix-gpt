//so the main browse section is divided into two parts --> 1. Main cont. and 2. Secondary cont. 
import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {

    const movies = useSelector(state => state.movies?.nowPlayingMovies)

    if(!movies) return

    const mainMovie = movies[0]

    const {original_title  ,  overview , id } = mainMovie

  return (
    <div className='bg-black '  >
        <VideoTitle title={original_title} overview = {overview} />
        <VideoBackground id = {id}  />
    </div>
  )
}

export default MainContainer

