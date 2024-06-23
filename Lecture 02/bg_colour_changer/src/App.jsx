import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,  setColor] = useState("olive")

  return (
    <>
      <div className='w-full h-[800px] box-border duration-300' style={{backgroundColor:color}}>
        <div className='bg-black py-4 fixed bottom-12 inset-x-10 rounded-3xl flex gap-8 justify-center' id="wrapper">
          <button duration-400 onClick={()=> setColor("Red")} className='py-4 px-10 bg-red-700 outline-none rounded-full text-white text bold'>Red</button>
          <button onClick={()=> setColor("Blue")} className='py-3 px-10 bg-blue-900 outline-none rounded-full text-white text bold'>Blue</button>
          <button onClick={()=> setColor("Yellow")} className='py-3 px-10 bg-yellow-800 outline-none rounded-full text-white text bold'>Yellow</button>
          <button onClick={()=> setColor("Violet")} className='py-3 px-10 bg-violet-900 outline-none rounded-full text-white text bold'>Violet</button>
        </div>
      </div>
    </>
  )
}

export default App
