import React, { useEffect, useState } from 'react'
import { options } from '../constants'
import useGetTrailerVideo from '../hooks/useGetTrailerVideo'



const VideoBackground = ({id }) => {

  const trailer = useGetTrailerVideo({id})

  return (
    <div className=' z-[-1]' >  
        <video className=' min-w-full min-h-screen aspect-video ' muted autoPlay src="/trailer.mp4"></video>
        {/* <iframe  src={`https://www.youtube.com/embed/${trailer}?autoplay=1&mute=1`} title="YouTube video player"   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}
    </div>
  )
}

export default VideoBackground