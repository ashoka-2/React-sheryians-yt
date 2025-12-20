import React from 'react'



const Sect3left = () => {
  return (
    <div className='sect3left'>
        <div className="sect3logo">
        </div>
        <div className="sect3text">Professional hard courts <span> with tournament-grade lighting & climate control — play in </span> perfect conditions, in any season.</div>
        <div className="sect3btn">
          <div className="sect3-btn"><div className="circle"></div></div>
          Game Mode
        </div>
    </div>
  )
}


const Sect3mid = () => {
  return (
    <div className='sect3mid'>  

      <div className="sect3mid-text">
        Private & group lessons
      </div>
      
    </div>
  )
}


const Sect3right = () => {
  return (
    <div className='sect3right'>
        <h1>100+</h1>
        <h3>Pro Coaches</h3>
        <p>Certified professionals ready to boost your game from first serve to tournament level.</p>

      <div className="state-container"><div className="state">Beginner 
            <div className="rounds">
          <div className="blue-round"></div>
          <div className="blue-round"></div>
          <div className="blue-round"></div>
          <div className="blue-round"></div>
          <div className="blue-round"></div>
          <div className="blue-round"></div>
          <div className="blue-round"></div>
          <div className="blue-round"></div>
          <div className="blue-round"></div>
          <div className="blue-round"></div>
          </div>
           55</div>
        <div className="state">Intermediate 
          <div className="rounds">
          <div className="blue-round"></div>
          <div className="blue-round"></div>
          <div className="blue-round"></div>
          <div className="blue-round"></div>
          <div className="blue-round"></div>
          <div className="blue-round"></div>
          <div className="blue-round"></div>
          <div className="blue-round"></div>
          </div>
          40
        </div>
        <div className="state">
          Advanced 
          <div className="rounds">
          <div className="blue-round"></div>
          <div className="blue-round"></div>
          <div className="blue-round"></div>
          <div className="blue-round"></div>
          <div className="blue-round"></div>
          <div className="blue-round"></div>
          <div className="blue-round"></div>
          </div>
          35
        </div></div>
        
    </div>
  )
}




const Sect3main = () => {
  return (
    <div className='section3'>
        <Sect3left/>
        <Sect3mid/>
        <Sect3right/>
    </div>
  )
}

export default Sect3main




