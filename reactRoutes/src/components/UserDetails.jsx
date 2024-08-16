import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function UserDetails() {

    const { name } = useParams();
    
    const navigate = useNavigate()
    const GoBackHandler = ()=>{
        navigate("/user");
        // navigate(-1);

    }
    
    

  return (
    <div className='w-full flex flex-col justify-center items-center gap-6'>
        <h1 className='text-5xl font-semibold'>User Details</h1>
        <h1 className='text-3xl'>Welcome {name}</h1>
        <button onClick={GoBackHandler} className='px-5 py-3 bg-red-500 rounded-lg font-bold text-white'>Go Back</button>
    </div>
    
  )
}

export default UserDetails