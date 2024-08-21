import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import axios from "../utils/axios";
import Loading from "./Loading";

function Details() {
  const navigate = useNavigate();
  const [products, setproducts] = useContext(ProductContext);
    const [product, setProduct] = useState(null)

    const {id} = useParams();
    console.log(id);
    



  // const getsingleproduct = async () => {
  //   try {
  //     const { data } = await axios.get(`/products/${id}`);
  //     setProduct(data)
      
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };




  useEffect(() => {
    if(!product){
      setProduct(products.filter((p) => p.id ==id)[0])
    }
    // getsingleproduct();
  }, []);

  const ProductDeleteHandler = (id) => {

    const FilteredProducts = products.filter((p) => p.id !== id);
    setproducts(FilteredProducts);
    localStorage.setItem("products", JSON.stringify(FilteredProducts));
    navigate("/details")

  }

  return product ? (
    <div className="w-[70%] flex justify-between items-center h-full m-auto p-[10%]">
      <img
        className="w-[40%] h-[80%] object-contain"
        src={`${product.image}`}
        alt=""
      />
      <div className="content w-[50%]">
        <h1 className="text-4xl">
          {product.title}
        </h1>
        <h2 className="text-zinc-400 my-5">{product.category}</h2>
        <h2 className="text-red-300 mb-3">$ {product.price}</h2>
        <p className="mb-[10%]">
          {product.description}
        </p>
        <Link className="mr-5 py-2 px-5 border rounded border-blue-200 text-blue-400">
          Edit
        </Link>
        
        <button onClick={ProductDeleteHandler(product.id)} className="py-2 px-5 border rounded border-red-200 text-red-400">
          Delete
        </button>
      </div>
    </div> ) : ( <Loading/>
  );
}

export default Details;
