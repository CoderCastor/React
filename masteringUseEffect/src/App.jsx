import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  // setInterval(()=>{
  //   console.log("Hello world")
  // },1000)

  // const [count, setCount] = useState(0);

  // const clickHandler = () => {
  //   setCount((c) => c + 1);
  // };

  // console.log("hello");

  // useEffect(() => {
  //   console.log("Use Effect called");
  //   setCount((c) => c + 1);
  // }, []);

  return (
    <div className="w-screen h-screen bg-zinc-300 flex flex-col items-center py-12 font-semibold">
      <div className="flex gap-6 mb-10">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />

      </Routes>
    </div>
  );
}

export default App;
