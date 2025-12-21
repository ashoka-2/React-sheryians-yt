import React from 'react'



const Navlogo = ()=>{
    return(
        <div >
            <h1 className='text-2xl  font-100'>DVSY</h1>
        </div>
    )
}



const NavLink = ({ label, href, primary }) => (
  <a
    href={href}
    className={`p-2.5 rounded-sm text-zinc-300 ${
      primary ? 'bg-red-400' : 'bg-neutral-700'
    }`}
  >
    {label}
  </a>
)

const Navbar = () => (
  <div className="flex justify-between items-center">
    <Navlogo/>

    <div className="flex gap-2">
      <NavLink label="DESIGNERS" href="#" />
      <NavLink label="COLLABS" href="#" />
      <NavLink label="EVENTS" href="#" />
      <NavLink label="BLOG" href="#" />
      <NavLink label="CARD" href="#" />
      <NavLink label="GET IN TOUCH" href="#" primary />
    </div>
  </div>
)

export default Navbar
