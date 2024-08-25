import React from 'react'
import Buttons from './Buttons'

function Navbar() {
  return (
    <div className='max-w-screen-xl mx-auto p-4 flex items-center justify-between border-b-[1px] border-zinc-700'>
        <div className='nleft flex items-center'>
        <img className='w-[95px] ' src="https://cdn.popsy.co/images/https%3A%2F%2Fwww.notion.so%2Fimage%2Fhttps%253A%252F%252Fassets-global.website-files.com%252F6024cb0edb66de5e830d3665%252F60343177940d0b566d3991b7_og.png%3Ftable%3Dblock%26id%3Db2e7d1d1-485c-4f4b-bcfc-857e10e196f3%26cache%3Dv2?width=1500&optimizer=image" alt="" />
        <div className="links flex gap-14 ml-20">
            {["Home","Work","Culture","","News"].map((elem,index)=>(
                elem.length == "" ? <span className='w-[2px] h-8 bg-zinc-700'></span>: <a className='text-sm flex items-center gap-1 font-semibold'> {index === 1 && <span style={{boxShadow: "0 0 0.45em #00FF19"}} className='inline-block w-1 h-1 bg-green-500 rounded-full'></span>} {elem}</a>
                ))}
        </div>
        </div>
        <Buttons/>
    </div>
  )
}

export default Navbar
