import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Poki() {
    const [num, setnum] = useState()
    const [da, setdata] = useState()
    const [mo, setmo] = useState()


    // const getdata = async () => {
    //     const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
    //     const data = await res.json()
    //     setdata(data.name)
    //     setmo(data.moves.length)
    // }
    // useEffect(()=>{
    //     getdata();
    // },[num])


    useEffect(() => {
        async function getdata() {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
            setdata(res.data.name)
            setmo(res.data.moves.length)
        }
        getdata();
    }, [num])

    return (
        <div className='flex flex-col bg-gray-900 h-screen justify-center items-center'>
            <h1 className='text-5xl text-center text-white mb-10'>Pokemon Details...</h1>
            <div className='bg-indigo-400 border-2 border-black p-4 rounded-lg'>
                <h1 className='text-3xl'>The Name of Pokemon == <span className='text-red-900'>{da}</span></h1>
                <h1 className='text-3xl'>The Number Of Moves == <span className='text-red-900'>{mo}</span></h1>
                <h1 className='text-3xl'>The Number You Choose == <span className='text-red-900'>{num}</span></h1>
                <select onChange={(event) => setnum(event.target.value)} value={num} className="border-4 border-teal-900 h-10 w-20 mt-4 rounded-sm text-2xl">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="25">25</option>
                </select>
            </div>
        </div>
    )
}
