import { useState } from "react"
import Cards from "./components/Cards"
import Form from "./components/Form"

function App() {

  const [users,setUsers] = useState([1]);

  return (
    <>
      <div className="w-full h-screen bg-zinc-200 flex justify-center items-center">
        <div className="container mx-auto">
          <Cards users={users}/>
          <Form/>
        </div>
      </div>
    </>
  )
}

export default App
