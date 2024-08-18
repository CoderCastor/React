// import React from "react";
// import { useState } from "react";
// import axios from "axios";

// function Show() {
//   const [data, getData] = useState([]);

//   const getProducts = () => {
//     const api = "https://fakestoreapi.com/products";

//     axios
//       .get(api)
//       .then((products) => {
//         console.log(products);
//         getData(products.data);
//       })
//       .catch((error) => console.log(error));
//   };

//   const addProducts = () => {
//     const api = "https://fakestoreapi.com/products";

//     axios
//       .post(api, {
//         title: "test product",
//         price: 13.5,
//         description: "lorem ipsum set",
//         image: "https://i.pravatar.cc",
//         category: "electronic",
//       })
//       .then((products) => {
//         console.log(products);
//       })
//       .catch((error) => console.log(error));
//   };

//   return (
//     <>
//       <button
//         onClick={getProducts}
//         className="px-4 py-2 bg-red-400 text-white rounded-md m-10"
//       >
//         Get DATA
//       </button>

//       <button
//         onClick={addProducts}
//         className="px-4 py-2 bg-blue-400 text-white rounded-md m-10"
//       >
//         ADD DATA
//       </button>

//       <hr className="my-10" />

//       <ul className="font-bold p-5  rounded-md text-nowrap box-content flex flex-col gap-2">
//         {data.length > 0 ? (
//           data.map((product) => (
//             <li className="bg-red-200 py-2 px-1 overflow-hidden">
//               {product.title}
//             </li>
//           ))
//         ) : (
//           <h1>Loading...</h1>

//       </ul>
//     </>
//   );
// }

// export default Show;


import React from 'react'

function Show() {
  return (
    <div>Show</div>
  )
}

export default Show