import React from 'react'

function Card({text,color}) {
  return (
    <button className={`px-5 py-2 ${color} m-2 font-extrabold rounded-full text-white`}>{text}</button>
  )
}

export default Card