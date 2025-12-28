import React, { useState } from 'react'
import Navbar from "./components/Navbar"
import Herobody from './components/Herobody'
import AddMovie from './components/AddMovie'
import movies from './components/Movies'

const App = () => {

  const [allMovies, setAllMovies] = useState(movies)
  const deleteMovie = (id) => {
  setAllMovies(prev => prev.filter(movie => movie.id !== id))
}


  return (
    <div className='flex h-full w-full p-5 bg-[radial-gradient(125%_125%_at_50%_10%,#06020a_40%,#180133_100%)]'>
      <Navbar/>
      <Herobody movies={allMovies} deleteMovie={deleteMovie} />
      <AddMovie setAllMovies={setAllMovies} />
    </div>
  )
}

export default App
