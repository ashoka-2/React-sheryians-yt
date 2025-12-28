
import React, { useState } from 'react'

const AddMovie = ({ setAllMovies }) => {

  const [showForm, setShowForm] = useState(false)

  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [year, setYear] = useState('')
  const [duration, setDuration] = useState('')
  const [rating, setRating] = useState('')

  const submitMovie = (e) => {
    e.preventDefault()

    const newMovie = {
      id: Date.now(),
      title: name,
      year: Number(year),
      duration,
      rating: Number(rating),
      poster: image,
      backdrop: image,
      genres: [],
      description: '',
      recentlyWatched: false,
      watchProgress: 0
    }
    setAllMovies(prev => [...prev, newMovie])

    
    setName('')
    setImage('')
    setYear('')
    setDuration('')
    setRating('')
    setShowForm(false)
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setShowForm(!showForm)}
        style={{
          transform: showForm ? 'rotate(45deg)' : 'rotate(0deg)',
          transition: 'transform 0.3s ease'
        }}
        className='fixed bottom-5 right-5
                   w-14 h-14
                   flex items-center justify-center
                   rounded-full
                   bg-red-600 hover:bg-red-800
                   text-white text-2xl'
      >
        <i className="ri-add-large-fill"></i>
      </button>

      {/* Form */}
      {showForm && (
        <div className='fixed bottom-20 right-20 z-10 bg-black w-96 text-white p-10 rounded-xl'>
          <form onSubmit={submitMovie} className='flex flex-col gap-4'>

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='border p-2 rounded-xl'
              type="text"
              placeholder='Movie name'
              required
            />

            <input
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className='border p-2 rounded-xl'
              type="text"
              placeholder='Poster URL'
              required
            />

            <input
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className='border p-2 rounded-xl'
              type="number"
              placeholder='Release year'
              required
            />

            <input
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className='border p-2 rounded-xl'
              type="text"
              placeholder='Duration'
            />

            <input
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className='border p-2 rounded-xl'
              type="number"
              step="0.1"
              placeholder='Rating'
            />

            <button
              type="submit"
              className='bg-green-500 px-4 py-2 rounded-full hover:bg-green-700'
            >
              Add Movie
            </button>

          </form>
        </div>
      )}
    </>
  )
}

export default AddMovie
