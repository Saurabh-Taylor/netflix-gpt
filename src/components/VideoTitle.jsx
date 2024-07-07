import React from 'react';
import { FaPlay } from "react-icons/fa";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className='pt-16 px-4 sm:pt-24 sm:px-8 md:pt-32 md:px-12 lg:pt-40 lg:px-14 absolute w-full md:w-1/2 lg:w-[50%] z-40 top-40 md:top-48 lg:top-32 '>
      <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-white'>{title}</h1>
      <p className='py-4 text-base sm:text-lg text-white'>{overview.substring(0, 100)}</p>
      <div className='flex'>
        <button className='bg-white text-black px-8 py-2 mr-3 text-base sm:text-lg flex items-center rounded-lg hover:bg-opacity-80'>
          <span className='px-2'><FaPlay /></span> Play
        </button>
        <button className='bg-gray-600 text-white px-8 py-2 mr-3 text-base sm:text-lg flex items-center rounded-lg hover:bg-opacity-100 bg-opacity-50'>
          <span className='px-2'><FaPlay /></span> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
