import React, { useState } from 'react'

export default function Hook() {
    const state = useState();
    let [count,setCount] = useState(0);
    const Inc = () => {
        setCount(count+1);
    }
    const Dec = () => {
        setCount(count-1);
    }
    const Reset = () => {
        setCount(0);
    }
    return (
        <div className='justify-center flex items-center h-screen bg-slate-200'>
            <div>
            <h1 className='text-center mb-6 text-5xl font-extrabold'>{count}</h1>
            <button onClick={Inc} className="bg-pink-500 text-2xl p-2 rounded-2xl text-white hover:bg-pink-600 border-4 border-blue-400">Click +1</button>
            <button onClick={Dec} className="bg-pink-500 ml-2 p-2 text-2xl rounded-xl text-white hover:bg-pink-600 border-4 border-blue-400 font-semibold">Click -1</button>
            <button onClick={Reset} className="bg-pink-500 ml-2 p-2 text-2xl rounded-xl text-white hover:bg-pink-600 border-4 border-blue-400 font-semibold">Reset</button>
            </div>
        </div>
    )
}
