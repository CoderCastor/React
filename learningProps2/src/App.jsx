import { useState } from "react";
import Card from "./Card";

function App() {

    const data = [
      {name: "John", profession: "Painter", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",friends:false},
      {name: "Wasco", profession: "Artist", image: "https://plus.unsplash.com/premium_photo-1672239496412-ab605befa53f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbGV8ZW58MHx8MHx8fDA%3D",friends:false},
      {name: "Jonathan", profession: "Barber", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbGV8ZW58MHx8MHx8fDA%3D",friends:false},
      {name: "Rahul", profession: "Mechanic", image: "https://images.unsplash.com/photo-1492288991661-058aa541ff43?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbGV8ZW58MHx8MHx8fDA%3D",friends:false}
    ];


    const [realData, setRealData] = useState(data);
    const handleFriendsButton = (cardIndex)=>{

      
      setRealData((previous)=>{
        return previous.map((item, index)=>{
          if(index === cardIndex){
            return {...item, friends:!item.friends}
          }
          return item;
        })
      })

    }

  return (
    <>
      
      <div className="w-full h-screen bg-zinc-300 flex gap-4 items-center justify-center">
        {realData.map((items,index)=>(
          // <Card image={items.image} name={items.name} profession={items.profession}/>
          <Card key={index} index={index} handleClick={handleFriendsButton} values={items}/>
        ))}
      </div>
        
    </>
  )
}

export default App
