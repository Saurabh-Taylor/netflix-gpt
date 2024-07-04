import React, { useEffect } from 'react'
import Header from '../components/Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from '../components/MainContainer'
import SecondaryContainer from '../components/SecondaryContainer'



const Browse = () => {
  useNowPlayingMovies()
  
  return (
    <div>
      <Header logoClass='relative' />
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse

