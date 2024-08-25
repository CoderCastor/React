import React from 'react'
import Stripe from './Stripe'

function Stripes() {
    const data = [
        {url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6666ed38989e70633b7658b5_Singularity_logo.svg",number: 48},
        {url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d485bb37c8fc880cdfad_bcgp-1.svg",number: 2},
        {url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8e7a169e0b41018de63_Intesneye-logo-black.svg",number: 11},{url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6666ed38989e70633b7658b5_Singularity_logo.svg",number: 48},
        {url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d485bb37c8fc880cdfad_bcgp-1.svg",number: 2},
        {url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8e7a169e0b41018de63_Intesneye-logo-black.svg",number: 11},
    ]
  return (
    <div className='flex items-center mt-24'>
        {data.map((elem,index)=>(
            <Stripe key={index} val={elem} />
            ))}
    </div>
  )
}

export default Stripes
