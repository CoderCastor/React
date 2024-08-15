import React from 'react'

function Box({name,color,handleClick,index}) {
  return (
    <button onClick={()=>handleClick(index)} className={`h-20 w-36 rounded-3xl text-xl font-semibold ${name==="White" ? "text-black" : "text-white"} ${color} shadow-lg shadow-black transition duration-0 hover:duration-150`}>{name}</button>
  )
}

export default Box