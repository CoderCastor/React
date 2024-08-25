import React from 'react'

function Work() {
    const images = [
        {url: "data:image/jpeg;base64,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", top: "50%", left: "50%", isActive: false},
        {url: "data:image/jpeg;base64,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", top: "56%", left: "44%", isActive: false},
        {url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDmKBivwJTuxVx6RkPkahRh4-R5C0drZnEkQ&s", top: "45%", left: "56%", isActive: false},
        {url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4037Ta_PoI4gGKyEgzaglUatwOvuppbcwEQ&s", top: "60%", left: "53%", isActive: false},
        {url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIOcjT8u2oIsJr83lkyhDdS1flY8IpqWe5hQ&s", top: "43%", left: "40%", isActive: false},
        {url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIO11741JAbrHFqVc4MXXtdxHoZMgfIrXWOw&s", top: "65%", left: "55%", isActive: false},
    ]
  return (


    <div className='w-full mt-20'>
        <div className='relative max-w-screen-xl mx-auto text-center'>
            <h1 className='text-[30vw] leading-none font-semibold select-none tracking-tight'>work</h1>
            <div className='absolute top-0 w-full h-full'>
                {images.map((elem,index)=>(elem.isActive && (
                    <img className='w-60 absolute rounded-lg -translate-x-[50%] -translate-y-[50%]' src={elem.url} style={{top: elem.top, left: elem.left}} alt="" srcset="" />
                )))}
            </div>
        </div>
    </div>
  )
}

export default Work