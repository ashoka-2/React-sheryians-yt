import React from 'react'
import './App.css'
import Card from './components/Card.jsx'
const App = () => {
  return (
    <>
     
     <div className="cards">
      <Card image="https://i.pinimg.com/736x/1f/f7/10/1ff710a9af999818b701238ab1392b48.jpg" user="Ashok" para="Hi guys, this is my first React project" />
      <Card image="https://i.pinimg.com/736x/d2/79/17/d2791706cffd4d9670e118120388de7a.jpg" user="Harsh" para="Welcome to Sheryians" />
      <Card image="https://i.pinimg.com/1200x/67/07/1d/67071dfa3a8c1c85dc25b40d4dcb6759.jpg" user="Sarthak" para="Welcome to reat class" />
      <Card image="https://i.pinimg.com/736x/1d/8f/48/1d8f48bcdb9429558b59d079c7f21ca7.jpg" user="Narendra" para="Hello Guys" />
      
     </div>
      
    </>
    
  )
}

export default App
