import { useState } from 'react'
import Navbar from "./components/Navbar"
import Herobody from './components/Herobody'
import AddMovie from './components/AddMovie'

const App = () => {

  const localData = JSON.parse(localStorage.getItem('all-movies')) || []
  const [allMovies, setAllMovies] = useState(localData)




  const submitMovie = (movie) => {
    const oldMovies = [...allMovies]
    oldMovies.push(movie)

    setAllMovies(oldMovies)
    localStorage.setItem('all-movies', JSON.stringify(oldMovies))
  }




  const deleteMovie = (idx) => {
    const copyMovies = [...allMovies]
    copyMovies.splice(idx, 1)

    setAllMovies(copyMovies)
    localStorage.setItem('all-movies', JSON.stringify(copyMovies))
  }

  

  return (
    <div className='flex h-full w-full p-5 bg-black'>
      <Navbar/>
      <Herobody movies={allMovies} deleteMovie={deleteMovie}/>
      <AddMovie submitMovie={submitMovie}/>
    </div>
  )
}

export default App
