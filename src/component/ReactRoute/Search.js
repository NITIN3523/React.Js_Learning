import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Search() {
    const [img, setimg] = useState()
    const inputimg = (event) => {
        setimg(event.target.value)
    }
    const [result,setresult] = useState([])
    const getphoto = (() => {
        async function getdata() {
            const res = await axios.get(`https://api.unsplash.com/search/photos?page=1&query=${img}&client_id=G2HmtU2Cv1fmXmvF7aQO43ZwtfBKm6mReR0v_GaM7K0`)
            setresult(res.data.results)
        }
        getdata();
    })
    return (
        <div className='flex flex-col p-4 items-center'>
            <div className='mt-10 flex gap-4 justify-center mb-8'>
                <input type="text" placeholder='Search' className='border-2 border-gray-400 pl-2 text-black text-xl' value={img} onChange={inputimg} />
                <button className='border-gray-900 border-2 text-xl font-medium p-1 rounded-sm hover:bg-gray-900 hover:text-white' onClick={getphoto}>GetPhoto</button>
            </div>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 mb-10 sm:grid-cols-2 ">
                {result.map((value,index)=>{
                    return(
                        <div key={index}>
                            <img src={value.urls.full} alt="" className='w-80 h-60'/>
                        </div>
                )
                })}
            </div>
        </div>
    )
}
