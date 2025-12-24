import React from 'react'
import Card from './components/Card'
import Users from './components/Users'
const App = () => {
  
  return (
    <div className='w-full h-full  p-5 flex flex-wrap gap-5 justify-center'>
      {Users.map((user)=>(
          <Card image={user.avatar} name={user.name} role={user.role} likes={user.stats.likes} posts={user.stats.posts} isFollowing={user.isFollowing} verified = {user.verified}/>
      ))} 
    </div>
  )
}

export default App
