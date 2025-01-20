import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-5 bg-white">
        <div>
            <h1 className="font-bold text-2xl text-orange-500">Logo</h1>
        </div>
        <ul className="flex space-x-10">
            <li><Link to="/" className="hover:text-orange-500 transaction duration-300 ease-in-out">Home</Link></li>
            <li><Link to="/about" className="hover:text-orange-500 transaction duration-300 ease-in-out">About</Link></li>
            <li><Link to="/contact" className="hover:text-orange-500 transaction duration-300 ease-in-out">Contact</Link></li>
            <li><Link to="/recipe/create" className="hover:text-orange-500 transaction duration-300 ease-in-out">Create Recipe</Link></li>
        </ul>
    </nav>  
  )
}
