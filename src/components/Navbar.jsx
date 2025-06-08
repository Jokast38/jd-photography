import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import './css/Navbar.css' // Import your CSS file here

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav style={{position: 'fixed', zIndex: 2 }} className="nav">
      {/* Logo */}
      <div className="logo"><img src="./src/assets/images/logo/jd-logo.png" alt="" srcset="" /></div>
      <div className="desktop-menu">
        <Link to="/">Accueil</Link>
        <Link className="hover:text-gray-400" to="/portfolio">Portfolio</Link>
        <Link className="hover:text-gray-400" to="/services">Services</Link>
        <Link className="hover:text-gray-400" to="/about">À propos</Link>
        <Link className="hover:text-gray-400" to="/contact">Contact</Link>
      </div>

      {/* Burger Icon */}
      <button
        className=" burger-icon md:hidden text-white focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <Link className="hover:text-gray-400" to="/" onClick={toggleMenu}>Accueil</Link>
          <Link className="hover:text-gray-400" to="/portfolio" onClick={toggleMenu}>Portfolio</Link>
          <Link className="hover:text-gray-400" to="/services" onClick={toggleMenu}>Services</Link>
          <Link className="hover:text-gray-400" to="/about" onClick={toggleMenu}>À propos</Link>
          <Link className="hover:text-gray-400" to="/contact" onClick={toggleMenu}>Contact</Link>
        </div>
      )}
    </nav>
  )
}