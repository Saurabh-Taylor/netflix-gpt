import React, { useEffect } from 'react'
import Header from '../components/Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from '../components/MainContainer'
import SecondaryContainer from '../components/SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import useTrendingMovies from '../hooks/useTrendingMovies'



const Browse = () => {
  useNowPlayingMovies()
  usePopularMovies()
  useUpcomingMovies()
  useTrendingMovies()
  
  return (
    <div>
      <Header logoClass='relative' />
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse

