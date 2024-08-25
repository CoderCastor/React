import Navbar from "./components/Navbar"
import Stripes from "./components/Stripes"
import Work from "./components/Work"


function App() {

  return (
    <div className="h-screen w-screen bg-[#1C1C1C] text-white">
        <Navbar/>
        <Work/>
        <Stripes/>
    </div>
  )
}

export default App
