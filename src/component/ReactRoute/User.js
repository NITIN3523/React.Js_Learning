import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

export default function User() {
    const {fname} = useParams();
    const {name} = useParams();
    const Location = useLocation();
    const histor = useNavigate()
  return (
    <div>
      <h1 className='text-4xl'>This is User Page...{name}{fname}</h1>
      <h1 className='text-4xl'>Your location is == {Location.pathname}</h1>
      {Location.pathname == '/User/saini/nitin'?(<button onClick={()=>histor(-1)}>ClikMe</button>):null }
    </div>

  )
}
