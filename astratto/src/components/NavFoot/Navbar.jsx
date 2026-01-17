import React from "react";
import logo from '../../assets/Images/logo.png'
const LeftLinks = () => {
  return (
    <div>
      <ul className='flex gap-4'>
        <div className="md:hidden pl-1 pr-1 rounded-4xl hover:text-white text-xl cursor-pointer hover:bg-violet-700 transition-all duration-200">
          <i className="ri-menu-2-line"></i>
        </div>
        <li className='hover:text-purple-700 transition-all hidden md:block text-xs md:text-lg'><a href="#">Services</a></li>
        <li className='hover:text-purple-700 transition-all hidden md:block text-xs md:text-lg'><a href="#">Work</a></li>
        <li className='hover:text-purple-700 transition-all hidden md:block text-xs md:text-lg'><a href="#">About</a></li>
      </ul>
    </div>
  )
}




const Logo = () => {
  return (
    <a href="#" className='mx-auto flex justify-center items-center font-semibold hover:text-purple-700 duration-300'>
      <img src={logo} alt="" className=' mr-1 h-6 object-contain object-center md:mr-2 md:h-10'/>
      <span className='text-[clamp(1rem,2vw,1.8rem)]'>Astratto</span>
    </a>
  )
}

const RightLinks = () => {
  return (
    <div>
      <ul className='flex gap-4 items-center'>
        <li className='hover:text-purple-700 transition-all hidden md:block text-xs md:text-lg'><a href="#">Career</a></li>
        <li className='group pl-3 pr-0.5 py-1 border-2 border-yellow-400 rounded-3xl cursor-pointer text-xs md:text-lg whitespace-nowrap hover:border-purple-500 transition-all duration-200'><a href="#">Contact Us <i className="text-violet-700 group-hover:bg-violet-600 group-hover:text-white p-2 rounded-full transition-all ease-linear  ri-arrow-right-up-long-line"></i></a></li>
      </ul>
    </div>
  )
}



const Navbar = () => {
  return (
    <nav data-aos="fade-down" className="flex items-center mx-2 pb-4 text-[clamp(0.875rem,1.5vw,1.25rem)] border-b-2 border-gray-300">
      <LeftLinks />
      <Logo />
      <RightLinks />
    </nav>
  );
};

export default Navbar;