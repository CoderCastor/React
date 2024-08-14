import React from 'react'
import { useForm } from "react-hook-form"

function Form({handleFormSubmitData}) {

  const {register,handleSubmit} = useForm()

  return (
    <div className='mt-10 flex justify-center'>
        <form className='flex gap-10 ' onSubmit={handleSubmit(data=>handleFormSubmitData(data))}>
            <input {...register('name')} type="text" className='rounded-md px-2 py-1 text-base font-semibold outline-none' name="" id="" placeholder='Name'/>
            <input {...register('email')} type="text" className='rounded-md px-2 py-1 text-base font-semibold outline-none' name="" id="" placeholder='Email'/>
            <input {...register('image')} type="text" className='rounded-md px-2 py-1 text-base font-semibold outline-none' name="" id="" placeholder='image url'/>
            <input  className='rounded-md px-5 py-1 bg-blue-500 text-white font-semibold' type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default Form