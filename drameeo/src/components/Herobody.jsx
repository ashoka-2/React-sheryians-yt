import React from 'react'

import Searchbar from './Searchbar'
import Hero from './Hero'
import Heading from './Heading'
import Moviecard from './Moviecard'
import Moviecard2 from './Moviecard2'

const Herobody = ({ movies ,deleteMovie}) => {
  return (
    <div className='pl-65 w-full h-full flex flex-col gap-5'>
      <Searchbar/>
      <Hero/>
      <Heading heading="Continue Watching"/>

      <div className="overflow-x-auto overflow-y-hidden scroll-smooth hide-scrollbar">
        <Moviecard />
      </div>

      <Heading heading="You Might Like"/>
      <Moviecard2 movies={movies} deleteMovie={deleteMovie} />
    </div>
  )
}


export default Herobody
