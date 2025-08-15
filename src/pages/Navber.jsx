import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from "../userAsset/vishlogo.png"
import { FiMenu, FiX } from 'react-icons/fi';
export const Navber = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/project", label: "Projects" },
    { path: "/skills", label: "Skills" },
    { path: "/contact", label: "Contact Me" },
  ];
  return (
    <nav className="flex h-14 items-center justify-between border-b-[1px] border-b-richblack-700 bg-richblack-900 px-5 md:px-10 relative">
      
    {/* Logo */}
    <div className="flex items-center">
    <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wide 
  bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
 V/Portfolio
</h1>
    </div>

    {/* Desktop Menu */}
    <div className="hidden md:flex gap-x-10 text-sm text-white font-bold">
      {navItems.map(({ path, label }) => (
        <NavLink
          key={path}
          to={path}
          className={({ isActive }) =>
            `px-2 py-1 transition-all duration-300 ${
              isActive
                ? "text-blue-400 border-b-2 border-blue-400"
                : "hover:text-gray-400"
            }`
          }
        >
          {label}
        </NavLink>
      ))}
    </div>

    {/* Mobile Menu Button */}
    <div className="md:hidden">
  <button onClick={() => setIsOpen(!isOpen)} className="text-white text-3xl">
    {isOpen ? <FiX /> : <FiMenu />}
  </button>
</div>

{/* Mobile Menu */}
<div
  className={`fixed top-0 right-0 h-full w-2/4 bg-richblack-800 text-white shadow-2xl transform ${
    isOpen ? "translate-x-0" : "translate-x-full"
  } transition-transform duration-300 ease-in-out z-50`}
>
  {/* Close Button (Keep Only One) */}
  <button
    onClick={() => setIsOpen(false)}
    className="absolute top-4 right-4 text-white text-3xl"
  >
    <FiX />
  </button>

  {/* Menu Items */}
  <div className="flex flex-col gap-6 text-lg mt-16 px-8">
    <NavLink to="/" onClick={() => setIsOpen(false)} 
              className={({ isActive }) =>
                `px-2 py-1 transition-all duration-300 ${
                  isActive
                    ? "text-blue-400 border-b-2 border-blue-400"
                    : "hover:text-gray-400"
                }`
              }
    >Home</NavLink>
    <NavLink to="/about" onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `px-2 py-1 transition-all duration-300 ${
                  isActive
                    ? "text-blue-400 border-b-2 border-blue-400"
                    : "hover:text-gray-400"
                }`
              } 
    >About</NavLink>
    <NavLink to="/project" onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `px-2 py-1 transition-all duration-300 ${
                  isActive
                    ? "text-blue-400 border-b-2 border-blue-400"
                    : "hover:text-gray-400"
                }`
              }
    >Projects</NavLink>
    <NavLink to="/skills" onClick={() => setIsOpen(false)} 
              className={({ isActive }) =>
                `px-2 py-1 transition-all duration-300 ${
                  isActive
                    ? "text-blue-400 border-b-2 border-blue-400"
                    : "hover:text-gray-400"
                }`
              }
    >Skills</NavLink>
    <NavLink to="/contact" onClick={() => setIsOpen(false)} 
              className={({ isActive }) =>
                `px-2 py-1 transition-all duration-300 ${
                  isActive
                    ? "text-blue-400 border-b-2 border-blue-400"
                    : "hover:text-gray-400"
                }`
              }
    >Contact</NavLink>
  </div>
</div>
  </nav>
  )
}

