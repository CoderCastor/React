import Maruees from "./components/Maruees"
import Navbar from "./components/Navbar"
import Products from "./components/Products"
import Stripes from "./components/Stripes"
import Work from "./components/Work"


function App() {

  return (
    <div className="h-screen w-[100vw] bg-[#1C1C1C] text-white overflow-x-hidden">
        <Navbar/>
        <Work/>
        <Stripes/>
        <Products/>
        <Maruees/>
    </div>
  )
}

export default App
