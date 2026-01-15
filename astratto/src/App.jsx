import React from "react";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";



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