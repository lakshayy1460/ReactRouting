import React from 'react'
import { useNavigate } from 'react-router-dom'


function Dashboard() {
    
  const navigate = useNavigate();
  
  function handleClick() {
    navigate('/')
  }
  return (
    <div>
        Dashboard page <br/>
        <button onClick={handleClick}> 
          Move to home page 
        </button>
    </div>
  )
}

export default Dashboard