import React, { useEffect } from 'react'
import Header from '../components/Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from '../components/MainContainer'
import SecondaryContainer from '../components/SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import useTrendingMovies from '../hooks/useTrendingMovies'
import GPTSearch from './GPTSearch'
import { useSelector } from 'react-redux'




const Browse = () => {

  const showGptSearch = useSelector(state => state.gpt.showGptSearch)



  useNowPlayingMovies()
  usePopularMovies()
  useUpcomingMovies()
  useTrendingMovies()

  
  return (
    <div>
      <Header logoClass='relative' />
      {showGptSearch?<GPTSearch/>:<>
        <MainContainer/>
        <SecondaryContainer/>
        </>
        }
      
    </div>
  )
}

export default Browse

