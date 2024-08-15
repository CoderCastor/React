import React from 'react'
import Home from '../Home'
import User from '../User'
import About from '../About'

function Routing() {
  return (
    <Routes>
      
      <Route path='/' element={<Home/>} />
      <Route path='/user' element={<User/>} />
      <Route path='/about' element={<About/>} />

    </Routes>
  )
}

export default Routing