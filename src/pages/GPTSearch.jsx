import React from 'react'
import GptSearchBar from '../components/GptSearchBar'
import GptMovieSuggestion from '../components/GptMovieSuggestion'
import Image from '../components/bgImage'

const GPTSearch = () => {
  return (
    <div className='relative   h-screen text-white' >
       <Image/>

      <div className='' >
        <GptSearchBar/>
      </div>
      <GptMovieSuggestion/>
    </div>
  )
}



export default GPTSearch