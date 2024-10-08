import React, { useState } from "react";
import axios from "axios";

function Show() {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    const api = "https://fakestoreapi.com/products";

    axios
      .get(api)
      .then((products) => {
        // console.log(products);
        setProducts(products.data);
      })
      .catch((error) => console.log(error));
  };

  const removeProducts = () => {
    setProducts([]);
    console.log("All products removed");
  };

  console.log(products);
  

  return (
    <div className="flex flex-col items-center px-8">
      <div className="w-full flex justify-center gap-8">
        <button
          onClick={getProducts}
          className="px-5 py-3 bg-blue-500 rounded-md m-4 text-white font-semibold"
        >
          Get Products
        </button>
        <button
          onClick={removeProducts}
          className="px-5 py-3 bg-red-500 rounded-md m-4 text-white font-semibold"
        >
          Remove Products
        </button>
      </div>

      <hr className="w-full my-8" />
      <ul className="flex flex-wrap gap-10 items-center justify-center">
        {products.length != 0 ? (
          products.map((item, index) => (
            <li key={index} className="w-80 h-48 bg-zinc-300 shadow-xl overflow-hidden border-2 rounded-md">
            <div>
                <div className="w-full h-32 flex justify-between bg-zinc-300">
                    <div className="w-full p-3 flex flex-col justify-between">
                        <div className="font-semibold overflow-hidden h-20 text-zinc-900 leading-none">{item.title}</div>
                        <div className="flex gap-3 border  text-white px-4 font-semibold">Price : <nav className="tracking-wider font-normal text-[14px] flex justify-center items-center" >{item.price}</nav></div>
                        <div className="">
                          <button className="px-5 py-1 bg-red-600 rounded-lg my-2 text-xs text-white hover:bg-red-700">Add to Cart</button>
                        </div>
                    </div>
                    <div className="w-[50%] h-32 bg-white flex justify-center items-center p-4">
                        <img className="w-full h-full object-cover" src={item.image}/>
                    </div>
                </div>
                <div className="overflow-auto p-1 h-16 text-xs text-white leading-none text-justify tracking-tighter bg-zinc-500">{item.description} </div>
            </div>
            <div>

            </div>
        </li>
          ))
        ) : (
          <h1>Loading...</h1>
        )}

        

        
      </ul>
    </div>
  );
}

export default Show;
