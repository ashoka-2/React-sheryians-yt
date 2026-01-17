import React from "react";
import Homepage from "./components/HomePage/Homepage";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";



const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      easing: "ease-out-cubic",
    });
  }, []);


  return (
    <div >
      <Homepage/>
      
    </div>
  );
};

export default App;