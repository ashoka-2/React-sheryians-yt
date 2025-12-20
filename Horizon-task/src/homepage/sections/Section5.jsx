import React from 'react'


const Card5 = () => {
  return (
    <div className='card5 card-modok'>
      <span>Services</span>
      <p>
        Explore our full range of coaching, training, and tennis experiences. From first serve to match point — we’ve got the right program for you.
      </p>
      <button>Explore More <i class="ri-arrow-right-up-long-line"></i></button>
    </div>
  )
}

const Card6 = () => {
  return (
    <div className='card6 card-modok'>
        <span>Training Programms</span>
        <div className="card6-footer">
          <span>Programs designed for  all ages and abilities</span>
          <span><i class="ri-arrow-right-up-long-line"></i></span>
        </div>
    </div>
  )
}


const Card7 = () => {
  return (
    <div className='card7 card-modok'>
      <div className='card7-header'>
         <span>Court Access</span>
         <span>Hourly Court Rental</span>
      </div>
      
      <div className="card7-footer">
        <p>Step into a space built for <br />players - to grow. compete, <br /> and thrive  </p>
      <div className='arrow'>
        <span><i class="ri-arrow-left-long-line"></i></span>
        <span><i class="ri-arrow-right-long-line"></i></span>
      </div>
      </div>
 
    </div>
  )
}



const Section5 = () => {
  
  return (
    
    <div className='section5'>
        <Card5/>  
        <Card6/>
        <Card7/>
    </div>
  )
}

export default Section5