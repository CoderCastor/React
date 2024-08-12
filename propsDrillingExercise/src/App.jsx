import { useState } from "react";
import Card from "./components/Card"
import Navbar from "./components/Navbar"


function App() {

    const data = [
      {image:"https://images.unsplash.com/photo-1723404102067-ee64a8548ad0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8", name: "Challenger", artist: "Castor George", added: false},
      {image:"https://plus.unsplash.com/premium_photo-1664303000625-9da917c7fcfe?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D", name: "One love", artist: "John Smith", added: false},
      {image:"https://images.unsplash.com/photo-1723083661302-ca5b3459e278?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDl8fHxlbnwwfHx8fHw%3D", name: "Believer", artist: "Jasprit Singh", added: false},
      {image:"https://plus.unsplash.com/premium_photo-1700727327215-d29fdfcbb3f7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMTd8fHxlbnwwfHx8fHw%3D", name: "Tum Kya Mile", artist: "Arjit Singh", added: false},
    ];


    const handleClick = (index) => {
        setSongData((prev)=>{
          return prev.map((item,itemIndex)=>{
            if(itemIndex == index) return {...item, added: !item.added};
            return item;
          })
        })
    }

    const [songData,setSongData] = useState(data)

  return (
    <>
      <div className="w-full h-screen bg-zinc-300">
      <Navbar/>
      <div className="px-20 flex gap-10 mt-10 flex-wrap">
        
        {data.map((obj,index)=>{
          return <Card data={obj} handleClick={handleClick} index={index} key={index}/>
        })}
        

      </div>
      </div>
    </>
  )
}

export default App
