import React, { useState } from 'react'

export default function Events() {
    const bg = "lightgreen";
    const name = "Click Me"
    const [bg1,Cbg1] = useState(bg);
    const [name1,Cn1] = useState(name);
    const ChangeBg = () => {
        let newbg = 'lightblue';
        Cbg1(newbg);
        let newN = "Burrraaa";
        Cn1(newN);
    }
    const ChangeBg1 = () => {
        Cbg1(bg);
        let name2 = "Jai Mata Di"
        Cn1(name2);
    }
    return (
        <div style={{backgroundColor:bg1}}>
            <div className='justify-center flex items-center h-screen'>
                {/* <button className="bg-pink-500 text-3xl w-72 h-20 rounded-2xl text-white hover:bg-pink-600 border-4 border-blue-400" onClick={ChangeBg} onDoubleClick={ChangeBg1}>{name1}</button> */}
                <button className="bg-pink-500 text-3xl w-72 h-20 rounded-2xl text-white hover:bg-pink-600 border-4 border-blue-400" onMouseEnter={ChangeBg} onMouseLeave={ChangeBg1}>{name1}</button>
            </div>
        </div>
    )
}
