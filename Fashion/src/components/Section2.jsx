import React from 'react'


const LearnMorebtn = () => {
  return (
    <div>
      <div className='mt-10 flex items-center gap-2 text-zinc-500'><button className='bg-neutral-900/20  h-10 w-10 rounded-full border-2'><i className="ri-arrow-right-up-line text-zinc-300"></i></button>LEARN MORE</div>
    </div>
  )
}


const Card = ({ heading, para }) => {
  return (
    <div className="w-100 bg-neutral-800 p-8 flex flex-col gap-5 rounded-lg">
      <h1 className="text-zinc-300">{heading}</h1>
      <p className="text-zinc-400">{para}</p>
      <LearnMorebtn />
    </div>
  )
}



const Section2 = () => {
  return (
    <div className="mt-5 flex items-center justify-between gap-5">
      <Card
        heading="INDEPENDENCY"
        para="Explore the creativity of independent designers from around the globe."
      />
      <Card
        heading="UNIQUITY"
        para="Discover the charm of unique pieces that stand out effortlessly.."
      />
      <Card
        heading="QUANTITY"
        para="Experience unparalleled craftsmanship and attention to detail."
      />
      <Card
        heading="SUSTAINABILITY"
        para="Embrace eco-conscious fashion choices wothout compromising on style."
      />
    </div>
  )
}





export default Section2
