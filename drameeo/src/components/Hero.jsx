import React from 'react'

import bgImage from "../assets/images/hero.png";


const violetColor = "#a959f3"

const Button = (props) => {
  return (
    <button className='text-md py-3 px-5 rounded-2xl cursor-pointer' style={{backgroundColor:props.color}}>{props.icon} {props.name}</button>
  )
}



const Pill = (props) => {
  return (
    <div className='bg-violet-500/20 px-3 py-1 text-zinc-200/80 rounded-3xl border border-violet-700/50'>{props.name}</div>
                
  )
}








const Hero = () => {
  return (
    <div className='p-10 relative w-full h-fit bg-violet-300 border border-violet-300/20 rounded-2xl bg-center bg-cover' style={{backgroundImage:`url(${bgImage})`}}>

        <div className='flex flex-col gap-8  h-full w-[50%]'>
            <div className='border w-fit pt-1 pb-1 pl-2 pr-2 rounded-3xl bg-orange-600/20 flex gap-1 text-orange-600'><i className="ri-fire-line"></i> Now Trending</div>

            <div className='flex gap-2'>
                <Pill name ="Drama"/>
                <Pill name ="Fantasy"/>
            </div>

            <div className='text-5xl font-medium'>Dimensional Kids on an Adventure</div>
            <div><p>When two curious kids stumble into a hidden portal,they travel across magical dimensions while trying to find their way home...</p></div>

            <div className='flex gap-4'>
                <Button name="Watch Now" color={violetColor} icon={<i className="ri-play-large-fill"></i>} />
                <Button name="" color="#a1a1aa4d" icon={<i className="ri-download-2-line"></i>} />
                <Button name="" color="#a1a1aa4d"  icon={ <span className="inline-block transform rotate-90"><i className="ri-more-2-fill"></i></span>} />
            </div>

            <div className='absolute bottom-3 right-5 w-fit bg-zinc-100/60 p-2 rounded-3xl flex gap-1'>
                <div className='h-2 bg-white w-5 rounded-3xl'></div>
                <div className='h-2 bg-amber-50/80 w-3 rounded-3xl'></div>
                <div className='h-2 bg-amber-50/80 w-3 rounded-3xl'></div>
            </div>
        </div>
      
    </div>
  )
}

export default Hero
