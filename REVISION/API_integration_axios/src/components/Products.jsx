import React, { useEffect, useState } from "react";
import axios from "axios";

function Products() {
  const [productsList, setProductsList] = useState(null);

  useEffect(() => {
    const api = "https://fakestoreapi.com/products";
    axios
      .get(api)
      .then((p) => {
        setProductsList(p.data);
      })
      .catch((error) => {
        console.log(error);
      });

    console.log("Products Mounted");

    return () => {
      // cleanup
      console.log("Products Unmounted");
    };
  }, []);

  console.log(productsList);

  return <div className="">
   

    <h1 className="text-3xl text-center text-black mb-4">Product List</h1>
    <div className="flex flex-col items-center gap-2">
      {productsList ? (productsList.map((p,i)=> {
        return <h3 key={i} className="w-80 bg-zinc-200 rounded-xl py-1 px-2">{p.title}</h3>
 
        
      })) : (<h1>Loading... <br /> Please wait</h1>) }

    </div>



  </div>;
}

export default Products;
