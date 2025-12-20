import React from 'react'


const Heroavatar = () => {
  return (
    <div className='avatar-container'>
        <h5>Train with real professionals.
           <br /> Get the real results.</h5>
        <div className='avatars'>
                <div className="avatar"></div>
                <div className="avatar"></div>
                <div className="avatar"></div>
        </div>
    </div>
  )
}



const Herobotlinks = () => {
  return (
    <div className='bottomlinks'>
        <a className='botlink' href="#">Instagram <i className="ri-arrow-right-up-long-line"></i></a>
        <a className='botlink' href="#">Facebook <i className="ri-arrow-right-up-long-line"></i></a>
        <a className='botlink' href="#">Tik Tok <i className="ri-arrow-right-up-long-line"></i></a>
    </div>
  )
}



const Herobottom = () => {
  return (
    <div className='herobottom'>
      <Heroavatar/>
      <Herobotlinks/>
    </div>
  )
}

export default Herobottom
