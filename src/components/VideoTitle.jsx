import React from 'react'

import { FaPlay } from "react-icons/fa";

const VideoTitle = ({title , overview}) => {
  return (
    <div className='pt-52 px-14 absolute w-[50%] z-40 ' >
        <h1 className='text-4xl font-bold text-white' > {title} </h1>
        <p className='py-6 text-lg  text-white' > {overview.split(0,100)} </p>
        <div className='flex' >
            <button className='bg-white text-black  px-16 py-2 mr-3 text-lg flex items-center rounded-lg bg-opacity-50 '  > <span className='px-2' ><FaPlay  /> </span> Play </button>
            <button className='bg-gray-600 text-white  px-16 py-2 mr-3 text-lg flex items-center rounded-lg bg-opacity-50 '  > <span className='px-2' ><FaPlay  /> </span> More Info </button>
            
        </div>
    </div>
  )
}

export default VideoTitle