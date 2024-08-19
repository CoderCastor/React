import { useState } from "react";
import Home from "./components/Home";
import { Link, Route, Routes } from "react-router-dom";
import User from "./components/User";
import About from "./components/About";

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      email: "john@gmail.com",
      username: "johnd",
      password: "m38rmF$",
    },
    {
      id: 2,
      email: "morrison@gmail.com",
      username: "mor_2314",
      password: "83r5^_",
    },
    {
      id: 3,
      email: "kevin@gmail.com",
      username: "kevinryan",
      password: "kev02937@",
    },
  ]);

  return (
    <div className="container bg-red-100 pt-1 m-auto">
      <nav className="mt-10 flex justify-center gap-5 font-semibold">
        <Link to="/">Home</Link>
        <Link to="/user">User</Link>
        <Link to="/about">About</Link>
      </nav>


    <Routes>

      <Route path="/" element={<Home/>} />
      <Route path="/user" element={<User/>} />
      <Route path="/about" element={<About/>} />


    </Routes>

    </div>
  );
}

export default App;
