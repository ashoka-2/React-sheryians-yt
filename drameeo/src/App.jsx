import React from 'react'
import Navbar from "./components/Navbar";
import Herobody from './components/Herobody';
const App = () => {
  return (
    <div className='flex p-5 bg-[radial-gradient(125%_125%_at_50%_10%,#06020a_40%,#180133_100%)]'>
      <Navbar/>
      <Herobody/>
      
    </div>
  )
}

export default App
