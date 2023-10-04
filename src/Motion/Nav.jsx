import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className=" flex justify-around text-xl font-semibold w-[400px] mx-auto">
      <NavLink
        to="/"
        className="w-[120px] py-2 text-center bg-gray-400 rounded-md shadow-md"
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className="w-[120px] py-2 text-center bg-gray-400 rounded-md shadow-md"
      >
        About
      </NavLink>
    </nav>
  );
}

export default Nav