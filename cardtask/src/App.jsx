import React from 'react'
import Card from './components/Card'
import Users from './components/Users'
const App = () => {
  
  return (
    <div className='w-full h-full p-5 grid gap-4 
                grid-cols-[repeat(auto-fill,minmax(240px,1fr))] 
                justify-items-center '>
      {Users.map((user,idx)=>(
          <Card key={idx} image={user.avatar} name={user.name} role={user.role} likes={user.stats.likes} posts={user.stats.posts} isFollowing={user.isFollowing} verified = {user.verified}/>
      ))} 
    </div>
  )
}

export default App
