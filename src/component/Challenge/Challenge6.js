// When reset time with button
import React, { useState } from 'react'

export default function Timer() {
    const state = useState();
    const ti = new Date().toLocaleTimeString();
    const [da, stateda] = useState(ti);
    const TimeCh = () => {
        let i = new Date().toLocaleTimeString();
        stateda(i);
    }
    return (
        <div>
            <div className='justify-center flex items-center h-screen bg-slate-200'>
                <div>
                    <h1 className='text-center mb-6 text-5xl font-extrabold'>{da}</h1>
                    <button onClick={TimeCh} className="bg-pink-500 text-3xl w-72 h-20 rounded-2xl text-white hover:bg-pink-600 border-4 border-blue-400">Reset Time</button>
                </div>
            </div>
        </div>
    )
}


/// With no Button Timer working continuously 
/*
import React, { useState } from 'react'

export default function Timer() {
    const state = useState();
    const ti = new Date().toLocaleTimeString();
    const [da, stateda] = useState(ti);
    const TimeCh = () => {
        let i = new Date().toLocaleTimeString();
        stateda(i);
    }
    setInterval(TimeCh,1000);
    return (
        <div>
            <div className='justify-center flex items-center h-screen bg-slate-200'>
                <div>
                    <h1 className='text-center mb-6 text-5xl font-extrabold'>{da}</h1>
                </div>
            </div>
        </div>
    )
}
*/
