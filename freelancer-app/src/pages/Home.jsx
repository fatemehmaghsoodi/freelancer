import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate= useNavigate()
  return (
    <div>
      <button onClick={()=>navigate('/login')}>go to login page</button>  
    </div>
  
  )
}

export default Home