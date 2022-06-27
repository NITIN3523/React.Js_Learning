import React, { useState } from 'react'

export default function LoginForm() {
    const [name, set] = useState({
        fname: '',
        lname: '',
        email: '',
        mobileno: ''
    });
    // const [F2, setF1] = useState("");
    // const [F3, setF2] = useState("");
    // const [F4, setF3] = useState("");
    // const [F5, setF4] = useState("");

    const [F, setF] = useState({
        F1: "",
        F2: "",
        F3: "",
        F4: "",
    })

    const Submit = (event) => {
        event.preventDefault();

        // setF1(name.fname);
        // setF2(name.lname);
        // setF3(name.email);
        // setF4(name.mobileno);

        setF(() => {
            return {
                F1: name.fname,
                F2: name.lname,
                F3: name.email,
                F4: name.mobileno
            }
        })

        document.getElementById("ID-1").value = "";
        document.getElementById("ID-2").value = "";
        document.getElementById("ID-3").value = "";
        document.getElementById("ID-4").value = "";
    }
    const Chname = (event) => {
        // const name = event.target.name;
        // const value = event.target.value;

        const { name, value } = event.target;
        set((pre) => {
            return {
                ...pre, [name]: value
            }
            // if (name === "lname") {
            //     return {
            //         fname: pre.fname,
            //         email: pre.email,
            //         mobileno: pre.mobileno,
            //         lname: value,
            //     };
            // }
            // else if (name === "fname") {
            //     return {
            //         fname: value,
            //         email: pre.email,
            //         mobileno: pre.mobileno,
            //         lname: pre.lname,
            //     };
            // }
            // else if (name === "email") {
            //     return {
            //         fname: pre.fname,
            //         email: value,
            //         mobileno: pre.mobileno,
            //         lname: pre.lname,
            //     };
            // }
            // else if (name === "mobileno") {
            //     return {
            //         fname: pre.fname,
            //         email: pre.email,
            //         mobileno: value,
            //         lname: pre.lname,
            //     };
            // }
        });
    };

    return (
        <div>
            <div className='flex justify-center items-center h-screen bg-slate-400'>
                <form onSubmit={Submit} className="flex justify-center items-center flex-col">

                    <h1 className='text-5xl text-purple-900 font-bold'>Hello,{F.F1} {F.F2}</h1><br />
                    <p className='text-xl font-semibold'>{F.F3}</p>
                    <p className='text-xl font-semibold'>{F.F4}</p><br />

                    <input id="ID-1" type="text" className='w-96 h-10 rounded-xl outline outline-blue-500 text-center text-xl font-medium' placeholder='Enter Your FName' onChange={Chname} name="fname" /><br />

                    <input id="ID-2" type="text" className='w-96 h-10 rounded-xl outline outline-blue-500 text-center text-xl font-medium' placeholder='Enter Your LName' onChange={Chname} name="lname" /><br />

                    <input id="ID-3" type="text" className='w-96 h-10 rounded-xl outline outline-blue-500 text-center text-xl font-medium' placeholder='Enter Your Email' onChange={Chname} name="email" /><br />

                    <input id="ID-4" type="text" className='w-96 h-10 rounded-xl outline outline-blue-500 text-center text-xl font-medium' placeholder='Enter Your Mobile' onChange={Chname} name="mobileno" /><br />

                    <button className="text-3xl w-72 h-20 rounded-2xl text-white hover:bg-pink-400 border-4 border-white-400" type='submit'>Click Me</button>

                </form>
            </div>
        </div>
    )
}
