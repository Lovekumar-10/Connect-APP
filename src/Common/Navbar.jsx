import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo2 from '../assets/logo-1.png';

import './Navbar.css'
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  const closeDrawer = () => {
    setIsOpen(false);
  }

  return (
    <>
      <div className='navbar'>
        <div className='nav-logo'>
          <NavLink to="/"><img src={logo2} alt="Logo" /></NavLink>
        </div>

        <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
          <button className='close-drawer' onClick={closeDrawer}>
            <RxCross1 />
          </button>

          <li>
            <NavLink to="/about" className={({ isActive }) => `ancher ${isActive ? "active" : ""}`} onClick={closeDrawer}>About</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => `ancher ${isActive ? "active" : ""}`} onClick={closeDrawer}>Contact</NavLink>
          </li>
          <li>
            <NavLink to="/blog" className={({ isActive }) => `ancher ${isActive ? "active" : ""}`} onClick={closeDrawer}>Blog</NavLink>
          </li>
          <li>
            <button className='btn'>
              <NavLink to="/Login" className={({ isActive }) => `btn-link ${isActive ? "active" : ""}`} onClick={closeDrawer}>Login</NavLink>
            </button>
          </li>
        </ul>

        <div className='menu-icon' onClick={toggleMenu}>
          <RxHamburgerMenu />
        </div>
      </div>
    </>
  )
}

export default Navbar;
