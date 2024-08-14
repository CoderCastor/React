import React from 'react'

function Box({name,color,handleClick}) {
  return (
    <button onClick={(event)=>handleClick(event)} className={`h-20 w-36 rounded-3xl text-xl font-semibold ${name==="White" ? "text-black" : "text-white"} ${color} shadow-lg shadow-black`}>{name}</button>
  )
}

export default Box