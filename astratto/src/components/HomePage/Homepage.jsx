import React from 'react'
import Footer from "../NavFoot/Footer";
import Projects from "./Projects";
import Services from "./Services";
import Hero from "./Hero";
import Navbar from "../NavFoot/Navbar";

const Homepage = () => {
  return (
    <div  className="font-['Poppins'] p-4 max-w-300 mx-auto  ">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Footer />
    </div>
  )
}

export default Homepage
