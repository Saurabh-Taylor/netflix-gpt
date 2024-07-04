import React from 'react'
import { IMG_CDN } from '../constants'



const MovieCard = ({posterPath}) => {
    
  return (
    <div className='w-48 pr-4 ' >
        <img src={`${IMG_CDN}/${posterPath}`} alt="" />
    </div>
  )
}

export default MovieCard