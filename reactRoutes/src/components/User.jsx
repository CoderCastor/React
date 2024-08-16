import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function User() {
  return (
    <div className='w-full flex justify-center items-center flex-col gap-16'>
      <div className='p-5 w-[50%] flex flex-col justify-center items-center'>
        <h1 className='mb-10 text-5xl bg-zinc-300 p-4 rounded-3xl font-extrabold'>User</h1>
        <div className='mt-3 flex flex-col font-semibold'>
          <Link className='bg-red-200 rounded-lg mb-4 px-24 py-5 text-3xl text-zinc-900 hover:bg-red-300' to="/user/Castor">Castor</Link>
          <Link className='bg-red-200 rounded-lg mb-4 px-24 py-5 text-3xl text-zinc-900 hover:bg-red-300' to="/user/George">George</Link>
          <Link className='bg-red-200 rounded-lg mb-4 px-24 py-5 text-3xl text-zinc-900 hover:bg-red-300' to="/user/Tanhaji">Tanhaji</Link>

        </div>
    </div>

    <Outlet/>

    </div>
  )
}

export default User