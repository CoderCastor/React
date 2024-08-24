import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Users from "./Users";
import Products from "./Products";

function Navbar() {
  return (
    <div className="">
      <nav className="flex gap-10 font-semibold mb-10 justify-center">
        <Link to="/" className="">
          Home
        </Link>
        <Link to="/users" className="">
          Users
        </Link>
        <Link to="/products" className="">
          Products
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default Navbar;
