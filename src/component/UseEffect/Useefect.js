import React, { useEffect, useState } from 'react'

export default function Useefect() {
    const [num,setnum] = useState(0);
    const [nums,setnums] = useState(0);
    useEffect(()=>{
        alert("JaiMataDi")
    },[num])
  return (
    <div className='flex justify-center items-center h-screen flex-col gap-y-2'>
      <button onClick={()=>setnum(num+1)} className="border-2 border-black p-2 text-2xl rounded-md">ClickMe {num}</button>
      <button onClick={()=>setnums(nums+2)} className="border-2 border-black p-2 text-2xl rounded-md">ClickMe {nums}</button>
    </div>
  )
}
