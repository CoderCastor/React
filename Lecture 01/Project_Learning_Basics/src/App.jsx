import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  function add(){
    setCount(count+1)
  }

  function remove(){
    setCount(count-1)
  }
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex flex-col justify-evenly h-[30vw] items-center'>
        <h1 className='shadow-white '>COUNT</h1>
        <div className='bg-gray-600 h-[100px] w-[100px] font-extrabold text-4xl rounded-full text-center content-center margin-x-auto'>{count}</div>
        <div className='flex gap-7 bg-black p-8 rounded-lg'>
          <button onClick={add}>ADD</button>
          <button onClick={remove}>REMOVE</button>
        </div>
      </div>
    </>
  )
}

export default App
