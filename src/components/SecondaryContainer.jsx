import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'



const SecondaryContainer = () => {

  const movies = useSelector(state => state.movies.nowPlayingMovies)
  const popularMovies = useSelector(state => state.movies.popularMovies)
  const upComingMovies = useSelector(state => state.movies.upComingMovies)
  const trendingMovies = useSelector(state => state.movies.trendingMovies)


  return (
    <div className=' bg-black text-white' >
      <div className='-mt-56 relative ' >
        <MovieList title="Now Playing" movies={movies} />
        <MovieList title="Popular" movies={popularMovies} />
        <MovieList title="Upcoming Movies" movies={upComingMovies} />
        <MovieList title="Trending" movies={trendingMovies} />
      </div>
    </div>
  )
}

export default SecondaryContainer