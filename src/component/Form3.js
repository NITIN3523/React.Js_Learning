import React, { useState } from 'react'

export default function Form3() {
    const [name, set] = useState({
        fname: '',
        lname: ''
    });
    const [F2, setF1] = useState("");
    const [F3, setF2] = useState("");
    const Submit = (event) => {
        event.preventDefault();
        setF1(name.fname);
        setF2(name.lname);
        document.getElementById("ID-1").value="";
        document.getElementById("ID-2").value="";
    }
    const Chname = (event) => {
        // const name = event.target.name;
        // const value = event.target.value;

        const { name,value } = event.target;
        set((pre) => {
            if (name === "lname") {
                return {
                    fname: pre.fname,
                    lname: value,
                };
            }
            else if (name === "fname") {
                return {
                    fname: value,
                    lname: pre.lname
                }
            }
        });
    };

    return (
        <div>
            <div className='flex justify-center items-center h-screen bg-slate-400'>
                <form onSubmit={Submit} className="flex justify-center items-center flex-col">

                    <h1 className='text-5xl text-purple-900 font-bold'>Hello,{F2} {F3}</h1><br />

                    <input id="ID-1" type="text" className='w-96 h-10 rounded-xl outline outline-blue-500 text-center text-xl font-medium' placeholder='Enter Your Name' onChange={Chname} name="fname" /><br />

                    <input id="ID-2" type="text" className='w-96 h-10 rounded-xl outline outline-blue-500 text-center text-xl font-medium' placeholder='Enter Your Name' onChange={Chname} name="lname" /><br />

                    <button className="text-3xl w-72 h-20 rounded-2xl text-white hover:bg-pink-400 border-4 border-white-400" type='submit'>Click Me</button>

                </form>
            </div>
        </div>
    )
}
