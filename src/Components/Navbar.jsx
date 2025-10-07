import React from 'react'
import logo from "../assets/logo.png"
import { NavLink } from 'react-router'
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-purple-800">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        
        <NavLink to="/" className={({ isActive }) =>
            isActive
              ? "text-blue-500 border-b-2 border-blue-500 pb-1"
              : "text-gray-600 hover:text-blue-500 font-semibold "
          }>Home</NavLink>
        <NavLink to="/apps" className={({ isActive }) =>
            isActive
              ? "text-blue-500 border-b-2 border-blue-500 pb-1"
              : "text-gray-600 hover:text-blue-500 font-semibold "
          }>Apps</NavLink>
        <NavLink to="/installations" className={({ isActive }) =>
            isActive
              ? "text-blue-500 border-b-2 border-blue-500 pb-1"
              : "text-gray-600 hover:text-blue-500 font-semibold "
          }>Installation</NavLink>
        
      </ul>
    </div>
    
    <NavLink to="/" className="btn btn-ghost text-xl text-purple-700"><img className='w-10' src={logo} alt="" /> HERO.IO</NavLink>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="flex gap-5">
      <NavLink  to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 border-b-2 border-blue-500 pb-1"
              : "text-gray-600 hover:text-blue-500 font-semibold "
          }>Home</NavLink>
      <NavLink to="/apps"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 border-b-2 border-blue-500 pb-1"
              : "text-gray-600 hover:text-blue-500 font-semibold "
          }>Apps</NavLink>
      <NavLink to="/installations"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 border-b-2 border-blue-500 pb-1"
              : "text-gray-600 hover:text-blue-500 font-semibold "
          }>Installation</NavLink>
      
    </ul>
  </div>
  <div className="navbar-end">
    <a href='https://github.com/Asha-08' className="btn text-white" style={{
        background:
          "linear-gradient(90deg, #632EE3 0% , #9F62F2 100%)",
      }}><FaGithub />Contribute</a>
  </div>
</div>
  )
}

export default Navbar