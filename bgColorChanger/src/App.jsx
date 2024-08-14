import React from 'react'
import Boxes from './components/Boxes'

function App() {

  const handleClick = (event) => {
    console.log(event.innerHTML)
  }

  const colors = [
    {color : "bg-red-700", name: "Red"},
    {color : "bg-green-700", name: "Green"},
    {color : "bg-white", name: "White"},
    {color : "bg-black", name: "Black"},
    {color : "bg-pink-700", name: "Pink"},
    {color : "bg-blue-700", name: "Blue"},
    {color : "bg-yellow-500", name: "Yellow"},
    {color : "bg-orange-600", name: "Orange"},
    {color : "bg-zinc-600", name: "Zinc"},
    {color : "bg-violet-900", name: "Violet"},
  ]

  return (
    <div className='h-screen w-full bg-black flex justify-center items-center py-28'>
      <Boxes colors={colors} handleClick={handleClick} />
    </div>
  )
}

export default App