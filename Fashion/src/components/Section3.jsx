import React from "react"


const Numbers = ({ label, value }) => (
  <div className="flex flex-col items-center gap-1">
    <p className="text-lg text-zinc-400 tracking-wide">{label}</p>
    <h1 className="text-5xl font-semibold text-white">{value}</h1>
  </div>
)

const Section3 = () => (
  <div className="w-full py-12">
    <div className="w-full px-10 flex justify-between">
      <Numbers 
            label="DESIGNERS" 
            value="150+"
        />
      <Numbers 
            label="CLIENTS" 
            value="500+"
        />
      <Numbers 
            label="MASTERPIECES" 
            value="20K+" 
        />
      <Numbers 
            label="EVENTS" 
            value="50+" 
        />
    </div>
  </div>
)

export default Section3
