import React, { useEffect, useState } from 'react'

export default function Covid() {
    const [data, setdata] = useState([]);
    const getcoviddata = async () => {
        try {
            const res = await fetch('https://data.covid19india.org/data.json')
            const coviddata = await res.json();
            setdata(coviddata.statewise[0])
        }
        catch (err) {
            alert(err);
        }
    }
    useEffect(() => {
        getcoviddata();
    }, [])
    return (
        <div className='bg-gray-900 flex flex-col h-fit justify-center items-center lg:h-screen sm:h-screen'>
            <div className='text-center mt-10'>
                <h1 className='text-6xl font-bold text-white'>The COVID-19 Details...</h1>
            </div>
            <div className='mt-10' >
                <ul className='text-white grid grid-cols-1 gap-4 lg:grid-cols-3 mb-10 sm:grid-cols-2'>
                    <li className='bg-red-500 font-semibold text-center w-80 h-60 p-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300'>
                        <p className='text-4xl'><span className='text-xl'>Our</span> Country</p>
                        <p className='mt-8 text-5xl font-bold'>India</p>
                    </li>
                    <li className='bg-lime-400 font-semibold text-center w-80 h-60 p-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300'>
                        <p className='text-4xl'><span className='text-xl'>Total</span> Recovered</p>
                        <p className='mt-8 text-5xl font-bold'>{data.recovered}</p>
                    </li>
                    <li className='bg-green-500 font-semibold text-center w-80 h-60 p-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300'>
                        <p className='text-4xl'><span className='text-xl'>Total</span> Confirmed</p>
                        <p className='mt-8 text-5xl font-bold'>{data.confirmed}</p>
                    </li>
                    <li className='bg-emerald-500 font-semibold text-center w-80 h-60 p-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300'>
                        <p className='text-4xl'><span className='text-xl'>Total</span> Active</p>
                        <p className='mt-8 text-5xl font-bold'>{data.active}</p>
                    </li>
                    <li className='bg-violet-500 font-semibold text-center w-80 h-60 p-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300'>
                        <p className='text-4xl'><span className='text-xl'>Total</span> Deaths</p>
                        <p className='mt-8 text-5xl font-bold'>{data.deaths}</p>
                    </li>
                    <l5 className='bg-pink-500 font-semibold text-center w-80 h-60 p-1 break-words transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300'>
                        <p className='text-4xl'><span className='text-xl'>Last</span> UpdatedTime</p>
                        <p className='mt-8 text-5xl font-bold'>{data.lastupdatedtime}</p>
                    </l5>
                </ul>
            </div>
        </div>
    )
}
