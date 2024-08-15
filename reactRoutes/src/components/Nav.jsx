import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className='w-full mt-7 flex justify-center items-center gap-8 text-lg font-semibold mb-8'>

      <Link to="/">Home</Link>
      <Link to="/User">User</Link>
      <Link to="/About">About</Link>


    </nav>
  )
}

export default Nav