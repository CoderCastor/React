import React from 'react'

// function Card({image,name,profession}) {
//   return (
//     <div className='w-52 bg-white rounded-md overflow-hidden border-none'>
//         <div className='w-full h-52 bg-sky-200'>
//             <img className='w-full h-full object-cover object-[center_top]' src={image}/>
//         </div>
//         <div className='w-full p-3'>
//             <h3 className='text-xl font-semibold'>{name}</h3>
//             <h5 className='text-xs'>{profession}</h5>
//             <button className='px-3 mt-4 py-1 text-xs text-white bg-blue-500 font-semibold rounded-md'>Add Friend</button>
//         </div>
//     </div>
//   )
// }

function Card({values,handleClick,index}) {
    const {name,image,profession,friends} = values
    return (
      <div className='w-52 bg-white rounded-md overflow-hidden border-none'>
          <div className='w-full h-52 bg-sky-200'>
              <img className='w-full h-full object-cover object-[center_top]' src={image}/>
          </div>
          <div className='w-full p-3'>
              <h3 className='text-xl font-semibold'>{name}</h3>
              <h5 className='text-xs'>{profession}</h5>
              <button onClick={()=>handleClick(index)} className={`px-3 mt-4 py-1 text-xs text-white border-none ${friends ? "bg-green-500" : "bg-blue-500"} font-semibold rounded-md`}>{friends===true ? "Friends" : "Add Friend"}</button>
          </div>
      </div>
    )
  }

export default Card