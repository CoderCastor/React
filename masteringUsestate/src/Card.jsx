import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function Card() {

    const [val,setVal] = useState(false);

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="w-60 h-32 bg-zinc-500 rounded-md overflow-hidden flex relative">
        <img
          className={`w-full h-full shrink-0 transition-transform duration-700 ease-in-out ${val===false ? "-translate-x-[0%]" : "-translate-x-[100%]"} object-cover z-3`}
          src="https://images.unsplash.com/photo-1722888799634-c5093906feae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1M3x8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <img
          className={`w-full h-full shrink-0 transition-transform duration-700 ease-in-out ${val===false ? "-translate-x-[0%]" : "-translate-x-[100%]"} object-cover z-3`}
          src="https://images.unsplash.com/photo-1722648404139-fcebc9e9f2d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <nav onClick={()=>setVal(!val)} className="w-8 h-8 flex items-center justify-center rounded-full bg-[#dadada8b] absolute bottom-[0%] left-[45%] -translate-y-[50%]">
          <FaArrowRightLong size={".7em"}/>
        </nav>
      </div>
    </div>
  );
}

export default Card;
