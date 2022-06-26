import React, { useState } from 'react'

export default function Form1() {
    const [name,sname]=useState(" ");
    const [fullName,setFull]=useState(" ")
    const Chname = (event) => {
        sname(event.target.value); 
    }
    const Chfull = () => {
        setFull(name);
        document.getElementById("change").value=""
    }
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-slate-400'>
      <h1 className='mb-5 text-5xl text-purple-900 font-bold text-center'>Hello,{fullName}</h1>
      <input type="text" className='w-96 dh-10 mb-5 rounded-xl outline outline-blue-500 text-center text-xl font-medium' placeholder='Enter Your Name'  onChange={Chname}id="change"/>
      <button className="text-3xl w-72 h-20 rounded-2xl text-white hover:bg-pink-400 border-4 border-white-400" onClick={Chfull}>Click Me</button>
    </div>
  )
}
