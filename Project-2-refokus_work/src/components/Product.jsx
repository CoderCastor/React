import React from 'react'
import Buttons from './Buttons'

function Product({val}) {
  return (
    <div className='w-full py-20'>
        <div className='max-w-screen-xl mx-auto flex items-center justify-between'>
            <h1 className='text-6xl capitalize font-bold'>{val.title}</h1>
            <div className="det w-1/3">
            <p className='mb-10'>{val.description}</p>
            <div className='flex items-center gap-10'>
            {val.live && <Buttons/>}
            {val.case && <Buttons title="Case Study"/>}
            </div>

            </div>
        </div>
    </div>
  )
}

export default Product
