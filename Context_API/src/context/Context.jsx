import React, { createContext, useState } from "react";
import User from "../components/User";

export const userContext = createContext();

const usersData = [
  { id: 0, name: "John Doe", city: "USA" },
  { id: 1, name: "Krishna", city: "INDIA" },
  { id: 2, name: "Shang chick", city: "JAPAN" }
];

function Context(props) {
  const [users, setUsers] = useState(usersData);

  return (
    <userContext.Provider value={{ users, setUsers }}>
      {props.children}
    </userContext.Provider>
  );
}

export default Context;
