import React from 'react'
import Box from './Box'

function Boxes({colors,handleClick}) {

  

  return (
    <div className='bg-white flex justify-evenly items-center bg-opacity-30 self-end gap-5 px-6 py-5 rounded-3xl flex-wrap'>
      {colors.map((item,index)=>{
        return <Box key={index} index={index} handleClick={handleClick} name={item.name} color={item.color} />
      })}
    </div>
  )
}

export default Boxes