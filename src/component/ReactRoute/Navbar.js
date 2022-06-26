import React from 'react'
import { Link, NavLink } from 'react-router-dom'
export default function Navbar() {
  return (
    <>
      <div className='bg-gray-800 text-white flex flex-col md:flex-row p-2 px-8 gap-4 justify-end text-xl'>
        {/* <a href="/About">About</a>
      <a href="/Contact">Contact</a>
      <br /><br />
      <Link to="/About">AboutLink</Link>
      <Link to="/Contact">ContectLink</Link>
      <br /><br /> */}
        <NavLink to="/About" className={({ isActive }) => (isActive ? 'text-teal-200' : 'inactive')}>AboutNavLink</NavLink>
        <NavLink to="/Contact" className={({ isActive }) => (isActive ? 'text-teal-200' : 'inactive')}>ContecNavtLink</NavLink>
        <NavLink to="/Services" className={({ isActive }) => (isActive ? 'text-teal-200' : 'inactive')}>ServicesNavtLink</NavLink>
        <NavLink to="/User/nitin/saini" className={({ isActive }) => (isActive ? 'text-teal-200' : 'inactive')}>UserNavtLink</NavLink>
        <NavLink to="/Search" className={({ isActive }) => (isActive ? 'text-teal-200' : 'inactive')}>SearchNavtLink</NavLink>
      </div>
    </>
  )
}
