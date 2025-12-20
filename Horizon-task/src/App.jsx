import React from 'react'
import Navbar from './homepage/Navbar/Navbar.jsx'
import Hero from './homepage/heropage/Hero.jsx'
import Sect2about from './homepage/sections/Section2.jsx'
import Section3 from './homepage/sections/Section3.jsx'
import Section4 from './homepage/sections/Section4.jsx'
import Section5 from './homepage/sections/Section5.jsx'
const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Hero/>
      <Sect2about/>
      <Section3/>
      <Section4/>
      <hr />
      <Section5/>

    </div>
  )
}

export default App


