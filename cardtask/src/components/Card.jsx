import React, { useState } from 'react'

const card = ({image,name,verified,role,likes,posts,isFollowing}) => {


  const [follow, setfollow] = useState(isFollowing)

  function btnClicked(e){
    e.stopPropagation();  
    setfollow(prev =>!prev)
  }
 
  const [verify, setverify] = useState(verified)

  function imageClick(){
    setverify(prev =>!prev)
  }

  return (
    <div  className='w-60 h-80 overflow-hidden rounded-4xl relative shadow-xl shadow-black/30 hover:scale-101 transition'>
              <div onClick={imageClick} className='h-full bg-center bg-cover brightness-90' style={{backgroundImage:`url(${image})`}}>

                <div className="absolute inset-0 z-10 bg-linear-to-b from via-white/10 to-black/90 " ></div>


              <div className=' w-full flex flex-col items-center absolute left-[50%] -translate-x-1/2 bottom-0 z-20'>
                <div className='text-white flex'><h1 className='text-white'>{name}</h1> {verify?<span className='ml-1'> <i className="ri-verified-badge-fill text-emerald-400"></i></span>:''}</div>
                <div className='text-white'><p>{role}</p></div>

                <div className='text-white flex items-center justify-between w-full p-3'>
                  <div className='text-sm'><i className="ri-user-line"></i> {likes}</div>
                  <div className='text-sm'><i className="ri-multi-image-line"></i> {posts}</div>
                  {follow?
                  
                  (<button onClick={btnClicked} className=' cursor-pointer text-black bg-white hover:bg-green-500 hover:text-white transition pt-2 pb-2 pr-5 pl-5 rounded-3xl'>Follow <i className="ri-add-large-line"></i></button>)

                  :
                  
                  (<button onClick={btnClicked} className='  cursor-pointer text-green-500 border border-green-500 bg-green-100 hover:bg-green-500 hover:text-white transition pt-2 pb-2 pr-5 pl-5 rounded-3xl'>Following </button>)
                  }
                </div>

              </div>
    </div>

    </div>
  )
}

export default card
