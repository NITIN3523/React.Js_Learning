import React, { useEffect, useState } from 'react'

export default function Challenge9(probs) {
    const [num,setnum] = useState(0)
    useEffect(()=>{
        document.title = `You Clicked ${num} times`;
    },[num])
  return (
    <div className='flex justify-center items-center h-screen bg-blue-300'>
      <button onClick={()=>setnum(num+1)} className="p-2 text-3xl rounded-md border-emerald-600 border-2 bg-rose-200">ClickMe {num}</button>
    </div>
  )
}
