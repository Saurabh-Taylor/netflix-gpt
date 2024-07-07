import React, { useEffect, useState } from 'react'
import { options } from '../constants'
import useGetTrailerVideo from '../hooks/useGetTrailerVideo'



const VideoBackground = ({id }) => {

  const trailer = useGetTrailerVideo({id})
  console.log(trailer);

  return (
    <div className=" w-screen">
      {/* <iframe
        className="w-screen aspect-video block min-h-screen"
        src={
          "https://www.youtube.com/embed/" +
          trailer+
          "?&autoplay=1&mute=1&controls=0&rel=0&showinfo=0&modestbranding=1"
        }
        title="YouTube video player"
        
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe> */}
      <video className=' min-w-full min-h-screen aspect-video ' muted autoPlay src="/trailer.mp4"></video>
    </div>
  );
}

export default VideoBackground

