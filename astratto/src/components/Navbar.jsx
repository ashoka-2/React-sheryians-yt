import React from "react";
import logo from '../assets/Images/logo.png'
const LeftLinks = () => {
  return (
    <div>
      <ul className='flex gap-4'>
        <li className='hover:border-b-purple-700 hover:border-b-2 transition-all duration-200'><a href="#">Services</a></li>
        <li className='hover:border-b-purple-700 hover:border-b-2 hidden md:block transition-all duration-200'><a href="#">Work</a></li>
        <li className='hover:border-b-purple-700 hover:border-b-2 hidden md:block transition-all duration-200'><a href="#">About</a></li>
      </ul>
    </div>
  )
}




const Logo = () => {
  return (
    <a href="#" className='mx-auto flex justify-center items-center font-semibold hover:text-purple-700 duration-300'>
      <img src={logo} alt="" className='mr-1 h-6 object-contain object-center md:mr-2 md:h-10'/>
      <span className='text-[clamp(1.25rem,2.5vw,1.875rem)]'>Astratto</span>
    </a>
  )
}

const RightLinks = () => {
  return (
    <div>
      <ul className='flex gap-4 items-center'>
        <li className='hover:border-b-purple-700 hover:border-b-2 transition-all duration-200 hidden md:block'><a href="#">Career</a></li>
        <li className='px-3 py-1 border-2 border-yellow-400 rounded-3xl cursor-pointer hover:border-purple-500 transition-all duration-200'><a href="#">Contact Us</a></li>
      </ul>
    </div>
  )
}



const Navbar = () => {
  return (
    <nav className="flex items-center mx-2 pb-4 text-[clamp(0.875rem,1.5vw,1.25rem)] border-b-2 border-gray-300">
      <LeftLinks />
      <Logo />
      <RightLinks />
    </nav>
  );
};

export default Navbar;