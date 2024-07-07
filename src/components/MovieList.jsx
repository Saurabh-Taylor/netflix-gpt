// MovieList.js
import React, { useRef, useEffect } from 'react';
import MovieCard from './MovieCard';
import './styles.css';


const MovieList = ({ title, movies }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleWheel = (event) => {
      if (event.deltaY !== 0) {
        event.preventDefault();
        scrollRef.current.scrollLeft += event.deltaY;
      }
    };

    const scrollContainer = scrollRef.current;
    scrollContainer.addEventListener('wheel', handleWheel);

    return () => {
      scrollContainer.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl py-6">{title}</h1>
      <div ref={scrollRef} className="flex overflow-x-auto hide-scrollbar">
        <div className="flex space-x-4">
          {movies?.map((movie) => (
            <MovieCard movie={movie} id={movie.id} key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;

// styles.css
/* Hide scrollbar for Chrome, Safari, and Opera */

