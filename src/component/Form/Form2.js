import React, { useState } from 'react'

export default function Form2() {
    const [Name1, setN1] = useState("");
    const [F1, setF1] = useState("");
    const [Name2, setN2] = useState("");
    const [F2, setF2] = useState("");
    const Chname1 = (event) => {
        setN1(event.target.value)
    }
    const Chname2 = (event) => {
        setN2(event.target.value)
    }
    const Chfull = (event) => {
        event.preventDefault();
        setF1(Name1);
        setF2(Name2);
        document.getElementById("ID-1").value = "";
        document.getElementById("ID-2").value = "";
    }
    return (
        <div>
            <div className='flex justify-center items-center h-screen bg-slate-400'>
                <form onSubmit={Chfull} className="flex justify-center items-center flex-col">
                    <h1 className='text-5xl text-purple-900 font-bold'>Hello,{F1} {F2}</h1><br />
                    <input id="ID-1" type="text" className='w-96 h-10 rounded-xl outline outline-blue-500 text-center text-xl font-medium' placeholder='Enter Your Name' onChange={Chname1} /><br />
                    <input id="ID-2" type="text" className='w-96 h-10 rounded-xl outline outline-blue-500 text-center text-xl font-medium' placeholder='Enter Your Name' onChange={Chname2} /><br />
                    <button className="text-3xl w-72 h-20 rounded-2xl text-white hover:bg-pink-400 border-4 border-white-400" type='submit'>Click Me</button>
                </form>
            </div>
        </div>
    )
}
