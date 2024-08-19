import React, { useContext } from 'react'
import { userContext } from '../context/Context'

function Details() {
  
  const {users} = useContext(userContext)
  console.log(users);
  

  return (
    <div>Details</div>
  )
}

export default Details