import React from 'react'

function Stripe({val}) {
  return (
    <div className='w-[16.70%] px-5 py-5 border-t-[1.2px] border-b-[1.2px] border-r-[1.2px] border-zinc-900 flex justify-between items-center bg-zinc-300'>
        <img className='h-7' src={val.url} alt="" srcset="" />
        <span className='font-semibold text-black' >{val.number}</span>
    </div>

  )
}

export default Stripe
