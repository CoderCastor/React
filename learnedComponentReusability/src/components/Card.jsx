import React from 'react'

function Card() {

    const data = [
        {image: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YW1hem9ufGVufDB8fDB8fHww',name: "Amazon Basics", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis atque illo quod officiis"},

        {image: 'https://images.unsplash.com/photo-1607041409099-bd92431680a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW1hem9ufGVufDB8fDB8fHww', name: "Daily Objects", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis atque illo quod officiis"},

        {image: 'https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFtYXpvbnxlbnwwfHwwfHx8MA%3D%3D', name: "Amazon Speaker", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis atque illo quod officiis"}
    ]



  return (
    <div className='w-full h-screen flex gap-10 items-center justify-center bg-zinc-200'>

    {data.map((elem,index)=>(
        <div key={index} className='w-52 bg-zinc-100 rounded-md overflow-hidden'>
        
        <div className='w-full h-32 bg-zinc-300'>
            <img className='w-full h-full object-cover' src={elem.image}/>
        </div>
        <div className='w-full px-3 py-4'>
            <h2 className='font-semibold'>{elem.name}</h2>
            <p className='text-xs mt-5'> {elem.description} </p>
        </div>
            
        </div>))}

        

    </div>
  )
}

export default Card