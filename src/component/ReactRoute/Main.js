import React from 'react'
import { Route, Routes , Navigate } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Navbar from './Navbar' 
import Search from './Search'
import Services from './Services' 
import User from './User' 
import Error404 from './Error404' 
export default function Main() {
    const Name = () => {
        return(
            <h1 className='text-4xl'>This is Anme Page..</h1>
        )
    }
    const Home = () => {
        return(
            <h1 className='text-4xl'>This is Home Page..</h1>
        )
    }
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route exact path="/About" element={<About name="Nitin Saini"/>}/>
            <Route exact path="/Contact" element={<Contact name="Pulkit Saini"/>}/>
            <Route exact path="/Services" element={<Services name="Nidhi Saini"/>}/>
            <Route exact path="/User/:name/:fname" element={<User/>}/>
            <Route exact path="/Search" element={<Search/>}/>
            <Route path="*" element={<Navigate to="/About" replace />}/>
            {/* <Route path="*" element={<Error404/>}/> */}
            {/* <Route path="/" element={<Home/>}/> */}
            {/* <Route exact path="/About/Name" element={<Name name="Nidhi Siani"/>}/> */}
        </Routes>
    </div>
  )
}
