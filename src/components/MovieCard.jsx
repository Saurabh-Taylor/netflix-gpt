import React, { useState } from 'react';
import { IMG_CDN, options } from '../constants';

const MovieCard = ({ posterPath, movie }) => {
  const [showVideo, setShowVideo] = useState(false);
  const [videoKey, setVideoKey] = useState('');

  const handleMovie = async () => {
    const key = await getYouTubeTrailerKey(movie.id);
    if (key) {
      setVideoKey(key);
      setShowVideo(true);
    }
  };

  const closeVideo = () => {
    setShowVideo(false);
    setVideoKey('');
  };

  return (
    <div className='w-48 pr-4  cursor-pointer '>
      <img className='hover:scale-110 transition' onClick={handleMovie} src={`${IMG_CDN}/${posterPath}`} alt='' />
      {showVideo && (
        <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center  '>
          <button className='absolute top-4 right-4 text-white text-lg' onClick={closeVideo}>
            Close
          </button>
          <iframe
            className='w-3/4 h-3/4 max-w-screen-lg max-h-screen-lg'
            src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1`}
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

async function getYouTubeTrailerKey(id) {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options);
    const { results } = await response.json();
    const trailer = results.find((video) => video.type === 'Trailer');
    return trailer ? trailer.key : '';
  } catch (error) {
    console.error('Error fetching trailer:', error);
    return '';
  }
}

export default MovieCard;
