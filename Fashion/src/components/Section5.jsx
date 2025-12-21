import React from 'react'
import ShadowImg from '../assets/images/shadowgirl.png'


const Coatimg = ()=>{
    return(
        <div className='w-[50%] bg-neutral-800 h-[70vh] rounded-lg bg-cover' style={{ backgroundImage: `url(${ShadowImg})` }}></div>
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



const Section5 = () => {
  return (
    <div className='mt-20 flex flex-col gap-10 '>
            <h1 className='text-4xl ml-20'>OUR ADVATAGES</h1>
        <div className='flex  gap-5'>
            <Coatimg/>
        <div className='w-[50%]  h-[70vh] rounded-lg flex flex-col gap-5'>

            
           <Advatage heading={"INDEPENDENT DESIGNERS"} para={"Our platform celebrates the ingenuity of independent designers, offering a diverse range of fashion-forward garments that reflect the creativity and innovatio of the artists behind them. Explore curated collections showcasing unique creations by independent designers."}/> 
           <Advatage heading={"EXCLUSIVE & UNIQUITY"} para={"Indulge in curated collections showcasing exclusive, one-of-a-kind pieces, each with its own story and charm. Experience the allure of unique fashion pieces that radiate sophistication and individuality, curated for those who seek exclusively."}/> 

        </div>
        
        </div>
        
    </div>
  )
}

export default Section5
