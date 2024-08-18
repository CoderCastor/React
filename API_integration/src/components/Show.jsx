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
      <ul>
        {products.length > 0 ? (
          products.map((item, index) => (
            <li key={index} className="rounded-md mb-2 p-5 bg-red-200">
              {item.title}
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
