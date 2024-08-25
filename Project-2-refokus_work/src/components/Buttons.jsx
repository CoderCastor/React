import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

function Buttons() {
  return (
    <div className='w-60 px-3 py-2 bg-zinc-100 text-black rounded-full flex items-center justify-between'>
        <span className='text-sm font-bold'>Get Started</span>
        <IoIosReturnRight />
    </div>
  )
}

export default Buttons
