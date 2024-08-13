import React from 'react'
import { useRef, useState } from "react"
import {useForm} from "react-hook-form"

//Method 1
// function App() {

//   const name = useRef(null);
//   const age = useRef(null);

//   const handleSubmit = (event)=>{
//     event.preventDefault()
//     console.log(name.current.value,age.current.value);
    
//   }

//   return (
//     <>
//       <form action="" className="w-1/2 p-10 flex flex-col justify-center gap-3" onSubmit={handleSubmit}>
//         <input ref={name} className="border-2 px-2 py-1" type="text" placeholder="name" />
//         <input ref={age} className="border-2 px-2 py-1" type="text" placeholder="age"/>
//         <input className="bg-red-600 text-white font-semibold text-lg rounded-md py-2" type="submit" value="Submit" />
//       </form>
//     </>
//   )
// }


// Method 2 controlled components
// function App() {

//   const [val,setVal] = useState({name:"",email:""})

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(val);
//   }

//   return (
//     <>
//       <form action="" className="w-1/2 p-10 flex flex-col justify-center gap-3" onSubmit={handleSubmit}>
//         <input onChange={(event)=>setVal({...val,name: event.target.value})} className="border-2 px-2 py-1" type="text" placeholder="name" />
//         <input onChange={(event)=>setVal({...val,email: event.target.value})} className="border-2 px-2 py-1" type="email" placeholder="email" />
//         <input className="bg-blue-500 text-white font-semibold py-2 rounded-xl" type="submit" value="Submit" />      
//         </form>
//     </>
//   )
// }




// Method 3: react Hooks form


function App() {
  
  const {register, handleSubmit} = useForm()
  
  return (
    <div>
      <form onSubmit={handleSubmit(data => console.log(data))} className="w-1/2 p-10 flex flex-col justify-center gap-3" action="">
        <input {...register('name')} className="border-2 px-2 py-1" type="text" placeholder='Name' />
        <input {...register('email')} className="border-2 px-2 py-1" type="email" placeholder='Email' />
        <input className="bg-blue-500 text-white font-semibold py-2 rounded-xl" type="submit"/>
      </form>
    </div>
  )
}



export default App
