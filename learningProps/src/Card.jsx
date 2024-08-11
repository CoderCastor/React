import React from 'react'

function Card({text,color}) {
  return (
    <button className={`px-4 py-1 ${color} m-5 rounded-md text-white`}>{text}</button>
  )
}

export default Card