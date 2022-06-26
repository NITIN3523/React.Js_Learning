import React, { useEffect, useState } from 'react'

export default function CovidTable() {
    const [coviddata, setcoviddata] = useState([])
    const getcoviddata = async () => {
        const res = await fetch('https://data.covid19india.org/data.json')
        const data = await res.json();
        setcoviddata(data.statewise);
    }
    useEffect(() => {
        getcoviddata();
    }, [])
    return (
        <div className='bg-gray-900 h-screen flex flex-col justify-center items-center'>
            <div className='text-center text-4xl font-bold text-white mb-10 mt-10'>
                <h1>The COVID-19 Details..</h1>
            </div>
            <div className='w-full h-full overflow-y-auto xl:w-9/12 xl:h-3/4'>
                <table cellPadding="5" cellSpacing="0" className="bg-orange-200 ml-auto mr-auto border-separate" >
                    <thead className='text-2xl font-semibold'>
                        <tr>
                            <th className='border-2 border-gray-500 sticky top-0 bg-red-200'>STATE</th>
                            <th className='border-2 border-gray-500 sticky top-0 bg-red-200'>CONFIRMED</th>
                            <th className='border-2 border-gray-500 sticky top-0 bg-red-200'>RECOVERED</th>
                            <th className='border-2 border-gray-500 sticky top-0 bg-red-200'>DEATHS</th>
                            <th className='border-2 border-gray-500 sticky top-0 bg-red-200'>ACTIVE</th>
                            <th className='border-2 border-gray-500 sticky top-0 bg-red-200'>UPDATEDTIME</th>
                        </tr>
                    </thead>
                    <tbody className='text-xl'>
                        {coviddata.map((val, index) => {
                            return (
                                <tr key={index} className='hover:bg-orange-400'>
                                    <td className='border-2 border-gray-500 font-semibold hover:border-2 hover:border-black hover:bg-green-500'>{val.state}</td>
                                    <td className='border-2 border-gray-500 hover:bo2der-4 hover:border-black hover:bg-green-500'>{val.confirmed}</td>
                                    <td className='border-2 border-gray-500 hover:bo2der-4 hover:border-black hover:bg-green-500'>{val.recovered}</td>
                                    <td className='border-2 border-gray-500 hover:bo2der-4 hover:border-black hover:bg-red-500'>{val.deaths}</td>
                                    <td className='border-2 border-gray-500 hover:bo2der-4 hover:border-black hover:bg-green-500'>{val.active}</td>
                                    <td className='border-2 border-gray-500 hover:bo2der-4 hover:border-black hover:bg-green-500'>{val.lastupdatedtime}</td>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
