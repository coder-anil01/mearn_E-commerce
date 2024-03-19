import React from 'react'
import { IoMdCart } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import "../style/Navbar.css"
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
    <div className="navbar">
      <div className="navbar-container">
        <NavLink to='/'><img src="https://res.cloudinary.com/coderanil/image/upload/v1710757842/navlogo_weeu1h.png" alt="" className="navbar-logo" /></NavLink>
        
        <div className="navbar-search-card">
          <input type="text" className="navbar-search-input" placeholder='Search products...'/>
          <div className="navbar-search-icon"><FaSearch/></div>
        </div>
        <div className="navbar-item-card">
          <NavLink to='/wishlist' className="navbar-item"><FaHeart/><span>5</span></NavLink>
          <NavLink to='/cart' className="navbar-item"><IoMdCart/><span>3</span></NavLink>
          <NavLink to='/Login' className="navbar-item-login">Login / SignUp</NavLink>
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar
