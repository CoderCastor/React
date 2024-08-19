import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { userContext } from '../context/Context'


function User() {

  const {users, setUsers } = useContext(userContext)

  return (
    <div>
        <h1 className='mt-10 mb-5 text-3xl font-semibold'>User List</h1>
        <div className=' flex flex-col gap-3'>
          {users.map((u,index)=> <Link key={index} to={`user/${u.id}`} className=' bg-blue-100 px-5 py-2 font-semibold rounded-md text-center'>{u.name}</Link>)}
          
        </div>
    </div>
  )
}

export default User