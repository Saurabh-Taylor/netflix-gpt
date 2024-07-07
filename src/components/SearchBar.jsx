import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { addGptMovieResult, toggleGptSearchView } from '../store/features/gptSlice';
import { useDispatch, useSelector } from 'react-redux';

const SearchBar = () => {
  const dispatch = useDispatch();
  const showGptSearch = useSelector(state => state.gpt.showGptSearch);

  const handleGptSearchClick = (e) => {
    e.preventDefault();
    dispatch(toggleGptSearchView());
    if (!showGptSearch) {
      dispatch(addGptMovieResult({ movieResults: "", movieNames: "" }));
    }
  };

  return (
    <Link to={"/"}>
      <button
        onClick={handleGptSearchClick}
        type="button"
        className="flex justify-center items-center focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-xs sm:text-sm md:text- lg:text-base px-2 py-1.5 sm:px-4 sm:py-2.5 md:px-1 md:py-3 lg:px-5  lg:py-2 mr-2 sm:mr-4"
      >
        {showGptSearch ? "HomePage" : "Gemini Search"}
        <span className="ml-1.5">
          <FaSearch />
        </span>
      </button>
    </Link>
  );
};

export default SearchBar;
