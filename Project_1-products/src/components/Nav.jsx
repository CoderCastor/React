import React, { useContext } from "react";
import { ProductContext } from "../utils/Context";
import { Link } from "react-router-dom";

function Nav() {
  const [products] = useContext(ProductContext);

  let distinct_category =
    products && products.reduce((acc, cv) => [...acc, cv.category], []);

  distinct_category = [...new Set(distinct_category)];
  // console.log(distinct_category);

  //color balls
  const color = () => {
    return `rgb(${(Math.random() * 255).toFixed()},${(
      Math.random() * 255
    ).toFixed()},${(Math.random() * 255).toFixed()},0.4)`;
  };
  // console.log(color());
  

  return (
    <nav className="w-[15%] min-w-40 h-full bg-zinc-50 flex flex-col items-center pt-5">
      <a
        className="py-2 px-5 border rounded border-blue-200 text-blue-400"
        href="/create"
      >
        Add New Product
      </a>
      <hr className="w-[80%] my-3" />
      <h1 className="text-2xl mb-3 w-[80%]">Category Filter</h1>
      <div className="w-[80%]">
        {distinct_category.map((c, i) => (
          <Link to={`/?category=${c}`} className="flex items-center mb-3">
            <span style={{backgroundColor: color()}} className="w-[15px] h-[15px] rounded-full mr-2"></span>{" "}
            {c}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Nav;