import React from 'react'




const Profile = () => {
  return (
    <div className='flex items-center gap-4'>


      <div className='text-2xl relative'><i className="ri-notification-3-line"></i>

      <div className='h-2 w-2 text-[8px] rounded-full bg-red-500 absolute top-1 right-1 border-[1.5px] border-black'></div>
      
      </div>


      <div className='w-10 h-10 rounded-full bg-violet-200 bg-cover bg-center border border-white' style={{backgroundImage:`url(https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`}}></div>
    </div>
  )
}






const Searchbar = () => {
  return (
   <div className='flex items-center justify-between gap-2'>

     <div className=' w-130 p-4 bg-[#211A2A] border border-violet-300/20 rounded-2xl flex flex-col'>
      
      <div className='flex items-center gap-2'>
        <i className="ri-search-2-line"></i>
        <input className='w-full h-full outline-0' type="text" placeholder='Search for films, directors, or actors...' />
      </div>

    </div>

    <Profile/>

   </div>
  )
}

export default Searchbar
