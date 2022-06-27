import React, { useState } from 'react'

export default function Challenge8() {
    const [num, setnum] = useState(0);
    const changenumber = (n) => {
        if (n === 1) {
            setnum(num + 1)
        }
        else if (n === 2) {
            if (num === 0) {
                alert("Value cannot be futher decrement...")
            }
            else {
                setnum(num - 1)
            }
        }
    }
    return (
        <div className='main bg-green-400 flex h-screen justify-center items-center'>
            <div className="content shadow shadow-black bg-slate-100 w-fit h-fit rounded-lg">
                <p className='bg-orange-500 text-white text-6xl mt-10 text-center font-bold'>{num}</p>
                <hr className='bg-red' />
                <div className="button flex gap-4 justify-center my-10 mx-4">
                    <button className='bg-orange-500 text-2xl p-3 font-semibold text-white rounded-md' onClick={() => changenumber(1)}>Increment</button>
                    <button className='bg-orange-500 text-2xl p-3 font-semibold text-white rounded-md' onClick={() => changenumber(2)}>decrement</button>
                </div>
            </div>
        </div>
    )
}
