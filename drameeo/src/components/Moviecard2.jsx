import React from 'react'
import movies from './Movies'

const Moviecard2 = () => {
  return (
    <div className="flex flex-wrap gap-6 ">
      {movies.map(movie => (
        <div
          key={movie.id}
          className=" w-45 rounded-xl overflow-hidden bg-zinc-900 hover:scale-[1.02] transition-transform cursor-pointer"
        >
          <div className="w-full h-65 overflow-hidden">
            <img
              src={movie.poster}
              alt={movie.title}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-3 flex flex-col gap-1">
            <h3 className="text-white font-medium text-sm truncate">
              {movie.title}
            </h3>

            <div className="flex justify-between text-xs text-zinc-400">
              <span>{movie.year}</span>
              <span>⭐ {movie.rating}</span>
            </div>

            <div className="text-xs text-zinc-500">
              {movie.duration}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Moviecard2
