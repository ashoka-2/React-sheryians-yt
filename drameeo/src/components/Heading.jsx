import React from 'react'
const SeeAll = () => {
  return (
    <div className='px-2 py-1 bg-zinc-400/30 rounded-lg'>See All</div>
  )
}
const Heading = ({heading}) => {
  return (
    <div className='flex justify-between'>
      <h1 className='text-2xl text-white font-medium'>{heading}</h1>
      <SeeAll/>
    </div>
  )
}

export default Heading
