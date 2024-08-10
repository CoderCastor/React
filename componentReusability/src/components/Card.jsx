import React from "react";

function Card() {

        const data = [

                {image: 'https://media.istockphoto.com/id/1278778827/photo/profile-picture-of-young-male-employee-in-office.jpg?s=612x612&w=0&k=20&c=oVoC2F2Qgu5ZqfHftRRP3Soq-4uDxQe_4F-67OQrEj0=', name: "Prafull", description: "lorem ipsum dolor sit amet, consectetur adip occ occurence",available: true},
                {image: 'https://images.unsplash.com/photo-1584999734482-0361aecad844?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2ZpbGUlMjBwaG90b3N8ZW58MHx8MHx8fDA%3D', name: "Raghav", description: "lorem ipsum dolor sit amet, consectetur adip occ occurence",available: false},
                {image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBob3Rvc3xlbnwwfHwwfHx8MA%3D%3D', name: "Rashmika", description: "lorem ipsum dolor sit amet, consectetur adip occ occurence",available: true}

        ];

        const songsData = [
                {name: "Mahiya Ve", description: "lorem ipsum dolor sit amet, consectetur adip occurence"},
                {name: "Junoon", description: "lorem ipsum dolor sit amet, consectetur adip occurence"}
        ];

        const handleOnClickDownload = () => {
                alert("Downloading is Started...");
        }


  return (
//     <div className="w-full h-screen flex justify-center items-center gap-10 bg-zinc-200">
      
//       {data.map((elem,index)=>(
//         <div key={index} className="w-52 bg-zinc-100 rounded-md overflow-hidden">
//         <div className="w-full h-32 bg-zinc-300">
//           <img
//             className="h-full w-full object-cover"
//             src={elem.image}
//           />
//         </div>
//         <div className="w-full px-3 py-4">
//           <h2 className="font-semibold">{elem.name}</h2>
//           <p className="text-xs mt-5">
//             {elem.description}
//           </p>
//           <button className={`px-4 py-2 ${elem.available ? 'bg-blue-600 ' : 'bg-red-600 '} text-xs rounded font-extrabold text-zinc-100 mt-3`}>{elem.available ? "Available":"Unavailable"}</button>
//         </div>
//       </div>
//       ))}





//     </div>

        <div className="w-full h-screen bg-zinc-300 flex justify-center items-center flex-col gap-4">
                
                {songsData.map((items, index) =>(

                        <div className="w-90 px-3 py-2 bg-zinc-100 rounded-md">
                        <h3 className="font-semibold text-xl">{items.name}</h3>
                        <p className="text-xs mt-2">{items.description}</p>
                        <button onClick={handleOnClickDownload} className="px-2 py-1 bg-blue-400 text-xs font-semibold text-zinc-100 rounded mt-3">Download Now</button>
                        </div>

                ))}

        </div>

  );
}

export default Card;
