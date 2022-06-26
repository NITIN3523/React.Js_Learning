import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Error404() {
const history = useNavigate()
  return (
    <div className='flex flex-col h-screen justify-center items-center'>
      <h1 className='text-6xl font-bold text-blue-600'>404Error No Page Exits</h1>
      <button onClick={()=>history(-1)} className="text-xl p-2 border-2 border-indigo-400 rounded-md hover:text-white hover:bg-indigo-400 mt-8">GoBack</button>
    </div>
  )
}
