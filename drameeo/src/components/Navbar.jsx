import React from 'react'


const violetColor = "#a959f3"

const Navlinks = (props)=>{
  return (<div className='flex '>

    <a className='h-full w-full flex items-center gap-3 '  style={{ color: props.color }} href={props.href}>
      <div className='text-xl'>{props.icon}</div>
    <h3 className='text-lg'>{props.name}</h3>
    </a>


  </div>)
}





const Navbar = () => {
  return (
    <div className='fixed top-5 bottom-5 w-60 p-4 bg-[#211A2A] border border-violet-300/20 rounded-2xl flex flex-col'>
      <div className='flex items-center justify-between  mb-5'>
        <div className='flex items-center gap-1 '>
          <div ><i className="ri-youtube-fill text-3xl p-1 rounded-lg" style={{backgroundColor:violetColor}}></i></div>
        <h1 className='text-2xl mb-1 font-medium'>Drameeo</h1>
        </div>
        <div><i className="ri-menu-unfold-4-line text-xl"></i></div>
        </div>


    <div className=' flex-1 flex flex-col gap-4 overflow-y-auto'>

      <Navlinks color={violetColor} icon={<i className="ri-home-fill"></i>} name="Home" href=""/>
      <Navlinks  color="#eeeeeed7" icon={<i className="ri-compass-3-line"></i>} name="Explore" href="#"/>
      <Navlinks  color="#eeeeeed7" icon={<i className="ri-stack-line"></i>} name="Genres" href="#"/>
      <Navlinks  color="#eeeeeed7" icon={<i className="ri-heart-3-line"></i>} name="Favourites" href="#"/>
      <hr className='mt-4 mb-4' />
      <Navlinks  color="#eeeeeed7" icon={<i className="ri-play-large-fill"></i>} name="Continue Watching" href="#"/>
      <Navlinks  color="#eeeeeed7" icon={<i className="ri-time-line"></i>} name="Reacently Added" href="#"/>
      <Navlinks  color="#eeeeeed7" icon={<i className="ri-folder-open-line"></i>} name="My Collections" href="#"/>
      <Navlinks  color="#eeeeeed7" icon={<i className="ri-download-2-line"></i>} name="Downloads" href="#"/>

      <hr className='mt-4 mb-4' />

      <Navlinks  color="#ffffff" icon={<i className="ri-settings-4-line"></i>} name="Settings" href="#"/>

    </div>

    
<Navlinks  color="#ff5555" icon={<i className="ri-logout-box-r-line"></i>} name="Logout" href="#"/>

    </div>
  )
}

export default Navbar
