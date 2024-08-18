import { Link } from "react-router-dom"
import { Route,Routes } from "react-router-dom"
import Home from "./components/Home"
import Show from "./components/Show"
import Services from "./components/Services"

function App() {


  return (
    <div className="flex items-center flex-col px-4 pt-10 bg-violet-200">
      <nav className="flex justify-center gap-10 font-semibold py-10">
        <Link to="/">Home</Link>
        <Link to="/Services">Services</Link>
        <Link to="/Show">Show</Link>
      </nav>

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Show" element={<Show />} />
        <Route path="/Services" element={<Services />} />

        
      </Routes>
    </div>
  )
}

export default App
