import React, { useRef, useState } from 'react';
import lang from '../utils/languageConstants';
import { generate } from '../gemini/gemini-ai';
import { options } from '../constants';
import { addGptMovieResult } from '../store/features/gptSlice';
import { useDispatch } from 'react-redux';
import Loading from './Loading';

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const [loading, setLoading] = useState(false); // State for loading indicator

  const handleGPTSearchClick = async (e) => {
    e.preventDefault();

    

    if(!inputRef.current.value) {
      alert("Enter the query")
      return
    }
    setLoading(true); 
    
    const GeminiApiQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      inputRef.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    try {
      const response = await generate(GeminiApiQuery);
      const result = response.split(',');
      const promiseArray = result.map(async (movie) => searchMovieTMDB(movie));
      const tmdbResults = await Promise.all(promiseArray);
      dispatch(addGptMovieResult({ movieNames: result, movieResults: tmdbResults }));
      inputRef.current.value = '';
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false); // Set loading state to false after fetching data
    }
  };

  const searchMovieTMDB = async (movie) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      options
    );
    const data = await response.json();
    return data.results;
  };

  return (
    <div className='relative top-40 w-3/4 m-auto'>
      <form className='p-7 bg-black rounded-lg'>
        <label htmlFor='search' className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'>
          Search
        </label>
        <div className='relative'>
          <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
            <svg
              className='w-4 h-4 text-gray-500 dark:text-gray-400'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 20 20'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
              />
            </svg>
          </div>
          <input
            ref={inputRef}
            type='search'
            id='search'
            className='block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
            placeholder='Search'
            required
          />
          <button
            onClick={handleGPTSearchClick}
            type='submit'
            className='text-white absolute end-2.5 bottom-2.5 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800'
            disabled={loading} // Disable button while loading
          >
            {loading ? <Loading/> : lang.en.search}
          </button>
        </div>
      </form>
    </div>
  );
};

export default GptSearchBar;
