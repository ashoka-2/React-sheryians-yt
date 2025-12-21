import React from 'react'
import heroImg from '../assets/images/hero.png'
const Hero = () => {
  return (
    <div className='mt-5'>
<div
  className="rounded-lg h-[85vh] w-full bg-no-repeat bg-center-top bg-cover relative pl-30"
  style={{ backgroundImage: `url(${heroImg})` }}>

        <div className='h-full flex flex-col  justify-center pt-50'>
            <h1 className='text-8xl font-thin'><span>DESIGN</span> <br /><span className='relative left-[10%]'>& FASHION</span></h1>
            <div className=' w-[80%] relative left-[10%] mt-5 flex items-center justify-between'>
                <p className=' text-lg w-[40%] text-zinc-500' >Explore Independent Style by Empracing Uniqueness with our Exclusive Designer Apparel</p>
                <div className='flex items-center gap-2 text-zinc-500'><button className='bg-neutral-900/20  h-10 w-10 rounded-full border-2'><i className="ri-arrow-down-line text-zinc-300"></i></button>LEARN MORE</div>
            </div>
        </div>
  </div>
</div>
  )
}

export default Hero
