import React from 'react'
import Navbtn from './Navbtn'
import Navlogo from './Navlogo'
import Navlinks from './Navlinks'

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
