import React, { useState } from 'react'

function Counterapp() {

    const [val,setVal] = useState(0);

    function increment(){
        setVal((prev)=>prev+1)
    }

    function decrement(){
        setVal((prev)=>prev-1)
    }


  return (
    <div className='w-full h-screen flex flex-col justify-center items-center bg-blue-200'>
        <div className='h-[40%] w-[40%] px-12 py-20 flex flex-col justify-center items-center bg-blue-300 rounded-xl'>
            <div className='h-32 w-32 bg-yellow-50 rounded-lg flex justify-center items-center text-6xl'>{val}</div>
            <div className='flex justify-center items-center mt-10 gap-10'>
                <button onClick={decrement} className='h-24 w-24 px-8 py-6 bg-red-600 rounded-lg text-4xl'>-</button>
                <button onClick={increment} className='h-24 w-24 px-8 py-6 bg-red-600 rounded-lg text-4xl'>+</button>
            </div>
        </div>
    </div>
  )
}

export default Counterapp