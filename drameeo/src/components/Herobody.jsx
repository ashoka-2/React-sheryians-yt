import React from 'react'

import Searchbar from './Searchbar'
import Hero from './Hero'


const Herobody = () => {
  return (
    <div className='ml-65  w-full h-screen flex flex-col gap-5'>
      <Searchbar/>
      <Hero/>
    </div>
  )
}

export default Herobody
