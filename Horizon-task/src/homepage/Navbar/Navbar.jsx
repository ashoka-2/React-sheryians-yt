import React from 'react'



const Navlogo = () => {
  return (
    <div className='navlogo'>
        <h1>Horizon Courts</h1>
    </div>
  )
}


const Navlinks = () => {
  return (
    <div className='navlinks'>
        <a href="#" className='link active'>About Us</a>
        <a href="#" className='link'>Services</a>
        <a href="#" className='link'>Coaches</a>
        <a href="#" className='link'>Events</a>
        <a href="#" className='link'>Contacts</a>
    </div>
  )
}


const Navbtn = () => {
  return (
    <div id='navbtn'>
        <h3>Book Now</h3>
        <i className="ri-arrow-right-up-long-line"></i>
    </div>
  )
}

const Navbar = () => {
  return (
    <div className='navbar'>
        <Navlogo/>
        <Navlinks/>
        <Navbtn/>
    </div>
  )
}

export default Navbar
