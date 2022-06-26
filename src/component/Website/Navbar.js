import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar({ fixed }) {
    const hov = "hover:underline-offset-8 hover:underline";
    return (
        <div>
            <div className="bg-gray-900 text-white p-4 ">
                <div className='flex flex-wrap justify-between items-center'>
                    <p className="text-3xl ml-10 font-bold">NitTEch</p>
                    <div className="flex flex-wrap gap-5 mr-10 text-xl">
                        <NavLink to="/" className={({ isActive }) => (
                            isActive ? "underline-offset-8 underline" : "hover:underline-offset-8 hover:underline"
                        )}>Home</NavLink>
                        <NavLink to="/About" className={({ isActive }) => (
                            isActive ? "underline-offset-8 underline" : "hover:underline-offset-8 hover:underline"
                        )}>About</NavLink>
                        <NavLink to="/Services" className={({ isActive }) => (
                            isActive ? "underline-offset-8 underline" : "hover:underline-offset-8 hover:underline"
                        )}>Services</NavLink>
                        <NavLink to="/Contact" className={({ isActive }) => (
                            isActive ? "underline-offset-8 underline" : "hover:underline-offset-8 hover:underline"
                        )}>Contact</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}