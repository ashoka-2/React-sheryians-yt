
import React, { useState } from 'react'

const AddMovie = ({ submitMovie }) => {

  const [showForm, setShowForm] = useState(false)

  const [title, setName] = useState('')
  const [poster, setImage] = useState('')
  const [year, setYear] = useState('')
  const [duration, setDuration] = useState('')
  const [rating, setRating] = useState('')

  const handleSubmitMovie = (e) => {
    e.preventDefault()
   submitMovie({
      title,
      poster,
      year,
      duration,
      rating
    })
    setName('')
    setImage('')
    setYear('')
    setDuration('')
    setRating('')
    setShowForm(false)
  }

  return (
    <>
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

      {showForm && (
        <div className='fixed bottom-20 right-20 z-10 bg-black w-96 text-white p-10 rounded-xl'>
          <form onSubmit={handleSubmitMovie} className='flex flex-col gap-4'>

            <input
              value={title}
              onChange={(e) => setName(e.target.value)}
              className='border p-2 rounded-xl'
              type="text"
              placeholder='Movie name'
              required
            />

            <input
              value={poster}
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
