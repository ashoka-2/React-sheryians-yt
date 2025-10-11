import React from 'react'
import { MousePointerClick } from 'lucide-react'
const Card = (props) => {
  return (
    <>
      <div className='card'>
        <img src={props.image} alt="Image" />
        <h2>{props.user}</h2>
        <p>{props.para}</p>
        <button>Click Me <MousePointerClick size={15} color="#ffffff" strokeWidth={1.5} /></button>
      </div>
    </>
  )
}

export default Card
