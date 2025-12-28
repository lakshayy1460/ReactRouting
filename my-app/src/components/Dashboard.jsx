import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'


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
        <Outlet />
    </div>
  )
}

export default Dashboard