import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const {movieResults , movieNames} = useSelector(state => state.gpt)
  if(!movieNames) return null
  
  return (
    <div className="p-4  bg-black block text-white relative top-52 z-20 ">
      <div>
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
}

export default GptMovieSuggestion