import React from 'react'
import movies from './Movies'

const Moviecard = () => {
  return (
    <div className="flex gap-6">
      {movies
        .filter(movie => movie.recentlyWatched)
        .map(movie => (
          <div
            key={movie.id}
            className=" group relative w-65 h-40 rounded-2xl overflow-hidden bg-cover bg-center shrink-0 transition-transform duration-300 hover:scale-105 " style={{ backgroundImage: `url(${movie.backdrop})` }} >
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="cursor-pointer  absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-30 ">
              <div className=" w-14 h-14 rounded-full bg-violet-500/90 flex items-center justify-center backdrop-blur-sm ">
                <i className="ri-play-fill text-white text-2xl ml-1"></i>
              </div>
            </div>

            <div className="relative z-10 h-full flex flex-col justify-between p-4">
              <h3 className="text-white font-medium text-lg leading-tight">
                {movie.title}
              </h3>
              <div className="flex flex-col gap-2">
                <div className="w-full h-1 bg-white/30 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-violet-500"
                    style={{ width: `${movie.watchProgress}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-zinc-200/80">
                  <span>{movie.duration}</span>
                  <span>{movie.year}</span>
                </div>

              </div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Moviecard
