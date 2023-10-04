import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Nav from './Nav'

const Framer_pageTransition = () => {
  return (
      <BrowserRouter>
          <Nav/>
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/about' element={<About/>} />
          </Routes>
    </BrowserRouter>
  )
}

export default Framer_pageTransition