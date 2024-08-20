import React from 'react'

function Nav() {
  return (
    <nav className="w-[15%] h-full bg-zinc-50 flex flex-col items-center pt-5">
        <a
          className="py-2 px-5 border rounded border-blue-200 text-blue-400"
          href="/create"
        >
          Add New Product
        </a>
        <hr className="w-[80%] my-3" />
        <h1 className="text-2xl mb-3 w-[80%]">Category Filter</h1>
        <ul className="w-[80%]">
          <li className="flex items-center mb-3">
            <span className="w-[15px] h-[15px] bg-blue-100 rounded-full mr-2"></span>{" "}
            Cat 1
          </li>

          <li className="flex items-center mb-3">
            <span className="w-[15px] h-[15px] bg-green-100 rounded-full mr-2"></span>{" "}
            Cat 1
          </li>

          <li className="flex items-center mb-3">
            <span className="w-[15px] h-[15px] bg-red-100 rounded-full mr-2"></span>{" "}
            Cat 1
          </li>
        </ul>
      </nav>
  )
}

export default Nav