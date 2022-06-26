import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import About from './About'
import Services from './Services'
import Home from './Home'
import Contact from './Contact'

export default function MainWeb() {
    return (
        <div className='bg-gray-200 h-screen'>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/About" element={<About />} />
                <Route exact path="/Services" element={<Services />} />
                <Route exact path="/Contact" element={<Contact />} />
            </Routes>
        </div>
    )
}
