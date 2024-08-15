import React from 'react';
import { useForm } from 'react-hook-form';

function Form({ handleFormSubmitData }) {
  const { register, handleSubmit , reset} = useForm();

  const onSubmit = (data) => {
    // Call the handleFormSubmitData function passed via props
    handleFormSubmitData(data);
    reset();
  };

  return (
    <div className='mt-10 flex justify-center  p-4'>
      <form className='w-[60%] py-1 flex justify-center gap-10 flex-wrap' onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('name')}
          type="text"
          className='rounded-md px-2 py-1 text-base font-semibold outline-none'
          placeholder='Name'
        />
        <input
          {...register('email')}
          type="email"
          className='rounded-md px-2 py-1 text-base font-semibold outline-none'
          placeholder='Email'
        />
        <input
          {...register('image')}
          type="text"
          className='rounded-md px-2 py-1 text-base font-semibold outline-none'
          placeholder='Image URL'
        />
        <input
          className='rounded-md px-5 py-1 w-[48%] bg-blue-500 text-white font-semibold'
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
}

export default Form;
