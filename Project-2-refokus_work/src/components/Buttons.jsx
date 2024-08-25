import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

function Buttons({title = "Get Started"}) {
  return (
    <div className='w-60 px-3 py-2 bg-zinc-100 text-black rounded-full flex items-center justify-between'>
        <span className='text-sm font-bold'>{title}</span>
        <IoIosReturnRight />
    </div>
  )
}

export default Buttons
