import React from 'react'
import orangeLogo from '../../assets/Images/logo-orange.png'
import left from '../../assets/Images/left.png'
import right from '../../assets/Images/right.png'
import line1 from '../../assets/Images/cursive-line.svg';
import line2 from '../../assets/Images/cursive-line2.png';
import sparkle from '../../assets/Images/sparkle.png';

const Hero = () => {
  return (
    <div className='mx-2 pb-4 relative mb-4 '>
      <div className='absolute z-10 md:left-2 lg:left-8 -rotate-6'><img src={left} className='h-30 md:h-70 rounded-xl object-cover'/></div>
      <div className='relative z-99 text-center py-6 md:py-15'>
        <h6 className='text-[.5rem] md:text-sm lg:text-base pb-2 md:pb-4 text-gray-400'>Igniting the Spark of Inspiration</h6>
    
      <h1 className='text-2xl md:text-5xl lg:text-7xl leading-10 md:leading-20 '>Unleash Your <br />Brand 
      
      
      <span><img src={orangeLogo} className='h-8 md:h-17 lg:h-25 inline'/></span>
      
      with Our <br /><span className='bg-yellow-200 text-purple-800 rounded-xl inline-block rotate-3'>Mágico</span> Design</h1>

      <div className='text-gray-400 text-sm md:text-base lg:text-lg mt-4 md:mt-8 absolute right-0 top-0 gap-1 flex flex-col items-end'>
        <h1 className='text-white bg-violet-700 rounded-2xl pl-1 pr-1 md:pl-3 md:pr-3 w-fit text-[8px] md:text-lg' >Via Della Creativita, 23</h1>
        <h1 className='text-white bg-violet-700 rounded-2xl pl-1 pr-1 md:pl-3 md:pr-3 w-fit text-[8px] md:text-lg' >20121 Milano</h1>

      </div>

      </div>

      <div className='absolute left-5 bottom-20 md:bottom-30 md:left-10 lg:left-10 lg:bottom-35 -rotate-20'><img src={line1} className='h-5 md:h-10 rotate-180'/></div>

      <div className='absolute right-0 lg:right-10 bottom-2 z-10 rotate-6'><img src={right} className='h-30 md:h-60 rounded-xl object-cover'/></div>
      
      <div className='absolute right-25 md:right-50 bottom-2 md:bottom-2 lg:right-60 rotate-12'><img src={line2} className='h-8 md:h-20'/></div>

      <div className='flex relative items-start left-2 bottom-1 md:left-10 md:bottom-5 w-fit -rotate-10'>
        <div className='px-1 py-1 md:px-3 md:py-1 border-2 border-orange-400 rounded-3xl cursor-pointer text-[8px] md:text-lg whitespace-nowrap hover:border-purple-500 transition-all duration-200 w-fit'><a href="#">Create Magic</a>
      </div>
      <div>
        <div className='absolute -right-8 -top-1 md:-right-16 md:-top-2'><img src={sparkle} className='h-10 md:h-20'/></div>
      </div>
      </div>

    </div>
  )
}

export default Hero