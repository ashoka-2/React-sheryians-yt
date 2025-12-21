import React from 'react'


const Coatimg = ()=>{
    return(
        <div className='w-[50%] bg-neutral-800 h-[70vh] rounded-lg bg-cover' style={{ backgroundImage: `url('./src/assets/images/coat.png')` }}></div>
    )
}


const Section4 = () => {
  return (
    <div className='flex gap-5 '>
        <div className='w-[50%] bg-neutral-800 h-[70vh] rounded-lg p-10 flex flex-col gap-10'>

            <h2 className=' font-medium'>ABOUT</h2>
            <h1 className='text-5xl mt-10'>WHERE FASHION MEETS FREEDOM</h1>
            <div className='flex gap-5 text-neutral-400'>
                <p>We believe that fashion should be an emprression of individuality. We encourage creativity and originality in every item we offer, presenting Customers with exclusive collections from independent desighners. With a commitment to fostering a community of creativity and innovation,</p>
                <p>we strive to connect designers with fashion enthusiasts who appreciate the artistry and individuality behind each piece. Driven by our dedication to authenticity, we curate each collection with a keen eye for unique designs that inspire confidence and self-expression.</p>
            </div>


        </div>
        
      <Coatimg/>
    </div>
  )
}

export default Section4
