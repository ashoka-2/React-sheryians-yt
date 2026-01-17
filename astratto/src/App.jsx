import React from "react";
import Footer from "./components/NavFoot/Footer";
import Projects from "./components/HomePage/Projects";
import Services from "./components/HomePage/Services";
import Hero from "./components/HomePage/Hero";
import Navbar from "./components/NavFoot/Navbar";



const App = () => {
  return (
    <div className="font-['Poppins'] p-4 max-w-300 mx-auto ">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;