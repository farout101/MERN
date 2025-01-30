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
            <li className="relative group">
                <button className="hover:text-orange-500 transaction duration-300 ease-in-out">Account</button>
                <ul className="absolute left-1/2 transform -translate-x-1/2 hidden group-hover:block bg-white shadow-lg">
                    <li><Link to="/sign-up" className="block px-4 py-2 hover:bg-gray-100">Register</Link></li>
                    <li><Link to="/sign-in" className="block px-4 py-2 hover:bg-gray-100">Login</Link></li>
                </ul>
            </li>
        </ul>
    </nav>  
  )
}
