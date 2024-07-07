import React, { useEffect, useState } from 'react'
import { options } from '../constants'
import useGetTrailerVideo from '../hooks/useGetTrailerVideo'



const VideoBackground = ({id }) => {

  const trailer = useGetTrailerVideo({id})
  console.log(trailer);

  return (
    <div className=" w-screen">
    
      <video className=' min-w-full min-h-screen aspect-video ' muted autoPlay src="/trailer.mp4"></video>
    </div>
  );
}

export default VideoBackground

