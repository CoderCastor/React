import { useState } from 'react'
import Counterapp from './Counterapp'

// function App() {

//   const [data,setData] = useState({name: "Kaustubh" , isBanned: false})

//   return (


//     <div className='p-4'>

//       {/* <Counterapp /> */}

//       <h1>Name : {data.name}</h1>
//       <h2>Banned : {data.isBanned.toString()}</h2>
//       <button onClick={()=>setData({...data,isBanned : !data.isBanned})} className={`px-5 py-3 font-extrabold rounded-lg text-white mt-3 ${!data.isBanned ? "bg-red-600" : "bg-blue-600"}`}>{!data.isBanned ? "Block" : "Unblock"}</button>


//     </div>
//   )
// }

// export default App



import React from 'react'

function App() {


  const [val,setVal] = useState([1,2,3,4,5,6,7,8,9,10]);

  const [infoData,setInfoData] = useState(
    [
      {name: "Tejas", age: 32},
      {name: "Rohit", age: 36},
      {name: "Manav", age: 18} 
    ]
  )
  return (

    //last element removal
    // <div className='p-10'>
      
    //     {val.map(item => <h1>{item}</h1>)}

    //     <button onClick={()=>{setVal(val.filter((item,index)=> index !== val.length - 1 )
    //     )}} className='px-4 py-1 bg-red-500 rounded-full text-white mt-4'>Eraser</button>
    // </div>



    //remove element at position 2
    // <div className='p-10'>
      
    //     {val.map(item => <h1>{item}</h1>)}

    //     <button onClick={()=>{setVal(val.filter((item,index)=> index !== 2 )
    //     )}} className='px-4 py-1 bg-red-500 rounded-full text-white mt-4'>Eraser</button>
    // </div>





    //remove elements which are divided by 2
    // <div className='p-10'>
      
    //     {val.map(item => <h1>{item}</h1>)}

    //     <button onClick={()=>setVal(
    //       val.filter((item,index)=> item%2 != 0 )
    //     )} className='px-4 py-1 bg-red-500 rounded-full text-white mt-4'>Eraser</button>
    // </div>



    //array value addition
    // <div className='p-10'>
      
    //     {val.map(item => <h1>{item}</h1>)}

    //     <button onClick={()=>setVal([...val,(val[val.length-1]+1) ])} className='px-4 py-1 bg-red-500 rounded-full text-white mt-4'>Add</button>
    // </div>




    //change object array
    <div className='p-10'>

      {infoData.map(item=> <div>
        <span>{item.name} : </span>
        <span>{item.age}</span>
        <br/>
      </div>)}

        <button onClick={()=> setInfoData(infoData.map(item=> item.name === "Rohit" ? {name:"Rohit" , age: 50} : item ))} className='px-4 py-1 bg-red-500 rounded-full text-white mt-4'>Update</button>
    </div>

  )
}

export default App