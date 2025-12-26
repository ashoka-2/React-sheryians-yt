import React, { useEffect, useState } from 'react'
import movies from './Movies'

const violetColor = "#a959f3"

const Button = ({ color, icon, name }) => (
  <button className="text-md py-3 px-5 rounded-2xl cursor-pointer whitespace-nowrap" style={{ backgroundColor: color }} > {icon} {name} </button>
)



const Pill = ({ name }) => (
  <div className="bg-violet-500/20 px-3 py-1 text-zinc-200/80 rounded-3xl border border-violet-700/50 whitespace-nowrap">
    {name}
  </div>
)



const Hero = () => {
  const heroMovies = movies.slice(0, 6)
  const [index, setIndex] = useState(0)
  const [fade, setFade] = useState(false)

  useEffect(() => {
    const next = heroMovies[(index + 1) % heroMovies.length]
    const img = new Image()
    img.src = next.backdrop
  }, [index, heroMovies])


  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true)
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % heroMovies.length)
        setFade(false)
      }, 500) 
    }, 5000)

    return () => clearInterval(interval)
  }, [heroMovies.length])

  const movie = heroMovies[index]


  return (
    <div className="relative w-full  rounded-2xl overflow-hidden border border-violet-300/20">

      <div
        className={` absolute inset-0 bg-center  bg-cover transition-opacity duration-500 ease-in-out ${fade ? 'opacity-0' : 'opacity-100'} `}style={{ backgroundImage: `url(${movie.backdrop})` }}/>

      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 p-10 flex flex-col gap-8 w-[60%]">

        <div className="w-fit px-3 py-1 rounded-3xl bg-orange-600/20 text-orange-600 flex gap-1 whitespace-nowrap">
          <i className="ri-fire-line"></i> Now Trending
        </div>
       


        <div className="flex gap-2">
          {movie.genres.slice(0, 3).map(g => (
            <Pill key={g} name={g} />
          ))}
        </div>



        <h1 className="text-5xl font-medium">
          {movie.title}
        </h1>

        <p className="text-zinc-200/90">
          {movie.description}
        </p>


        <div className="flex gap-4 ">
          <Button name="Watch Now" color={violetColor} icon={<i className="ri-play-large-fill"></i>}/>
          <Button  name="" color="#a1a1aa4d" icon={<i className="ri-download-2-line"></i>} />
          <Button name="" color="#a1a1aa4d" icon={<span className="inline-block transform rotate-90"><i className="ri-more-2-fill"></i></span>}/>
        </div>


      </div>



      <div className="absolute bottom-3 right-5 z-10 flex gap-1 bg-zinc-100/60 p-2 rounded-3xl">
        {heroMovies.map((matlabKuchbhi, i) => (
          <div
            key={i}
            className={`h-2 rounded-full transition-all duration-300 ${i === index ? 'w-5 bg-white' : 'w-2 bg-amber-50/80'
            }`}
          />
        ))}
      </div>



    </div>
  )
}

export default Hero
