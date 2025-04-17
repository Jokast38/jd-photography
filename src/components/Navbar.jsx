import { Link } from 'react-router-dom'
import React from 'react'


export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4 flex gap-6">
      <Link to="/">Accueil</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/services">Services</Link>
      <Link to="/about">À propos</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  )
}
