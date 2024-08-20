import React, { useContext } from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";



function Home() {
  const [products] = useContext(ProductContext);
  console.log(products);

  return products ? (
    <>
      <Nav />
      <div className="w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto gap-3">
        {products.map((p, i) => (
          <Link
            key={i}
            to={`/details/${p.id}`}
            className="card p-3 border shadow rounded w-[18%] h-[30vh] flex flex-col justify-center items-center"
          >
            <div
              className="hover:scale-110 w-full h-[80%] mb-3 bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  `url(${p.image})`,
              }}
            ></div>

            <h1 className="hover:text-blue-300">{p.title}</h1>
          </Link>
        ))}
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default Home;
