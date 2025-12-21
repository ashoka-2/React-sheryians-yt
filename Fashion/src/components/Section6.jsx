import React from 'react'


const Coatimg = ()=>{
    return(
        <div className='w-[50%] bg-neutral-800 h-[70vh] rounded-lg bg-cover' style={{ backgroundImage: `url('./src/assets/images/skeleton.png')` }}></div>
    )
}

const ExploreBtn = () =>{
return(
    <div  className=' flex items-center gap-2 text-zinc-500'><button className='bg-neutral-900/20  h-10 w-10 rounded-full border-2'><i className="ri-arrow-right-up-line text-zinc-300"></i></button>EXPLORE</div>
)
}

const Advatage = ({heading,para}) =>{
    return(
        <div className='h-[50%] bg-neutral-800 rounded-xl p-10 flex flex-col gap-5 '>
            <h1>{heading}</h1>
            <div className='flex gap-5 items-end'>
                <p className='text-neutral-400'>{para}</p>
                <ExploreBtn/>
            </div>
        </div>
    )
}



const Section6 = () => {
  return (
    
            
        <div className='flex  gap-5 mt-10'>
        <div className='w-[50%]  h-[70vh] rounded-lg flex flex-col gap-5'>

            
           <Advatage heading={"HIGH QUALITY"} para={"Embrace superior craftsmanship with our meticulously curated,enduringly high-quality garments. Discover garments crafted with utmost attention to detail and finest materials,promising longevity and timeless style."}/> 
           <Advatage heading={"ECO-FRIENDLY"} para={"Join our commitment to sustainability with eco-friendly fashion options, stylish yet mindflu of our planet. Explore guilt-free shopping with our eco-conscious collections, crafted with planet-friendly materials and ethical practices."}/> 

        </div>
            <Coatimg/>
        
        </div>
        
   
  )
}

export default Section6
