import React from 'react';
import icon from '../images/icon.png';
import bg1 from '../images/bg1.jpeg';
import './Landing.css'
export default function Landing() {
    return (
        <div className='box'>
            <div className="flex flex-row  bg-white backdrop-brightness-50">
                <div>
                    <div className="flex">
                        <img src={icon} alt="" className="h-32 w-32 mt-3" />
                        <p className="leading-none mt-7">
                            <span className="font-bold text-xl">CUSC</span>
                            <br />
                            <span className="font-semibold text-lg hover:underline hover:decoration-sky-500">Chandigarh
                                University</span>
                            <br />
                            <span className="font-semibold text-lg hover:underline hover:decoration-sky-500">student
                                connect</span>
                        </p>
                    </div>
                    <div className="mt-10 ml-4">
                        <div className="text-5xl font-bold text-purple-800">Make Projects Time table in Minutes.</div>
                        <div className="text-2xl mt-4">The ProjectTT Express timetable maker is instant, intuitive, and
                            intelligent.
                        </div>
                        <br />
                        <button className="bg-pink-500  px-4 py-2 text-2xl rounded-xl text-white hover:bg-pink-600"><a
                            href="Login.html">Login</a></button>
                        <button className="bg-pink-500  px-4 py-2 ml-2 text-2xl rounded-xl text-white hover:bg-pink-600"><a
                            href="Login.html">Register</a></button>
                    </div>
                </div>
                <div className="image mt-24 h-full">
                    <img src={bg1} alt="" />
                </div>
            </div>
        </div>

    )
}
