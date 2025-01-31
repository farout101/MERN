import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'
import axios from '../helpers/axios'

export default function Navbar() {

    const navigate = useNavigate()

    let {name} = useContext(AuthContext)

    let logout = async () => {
        alert("logged out")
        let res = await axios.post('/api/users/logout')
        if(res.status === 200) {
            navigate('/sign-in')
        }
    }

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
                        <li><button onClick={logout} className="block px-4 py-2 hover:bg-gray-100">Logout</button></li>
                    </ul>
                </li>
            </ul>
        </nav>  
    )
}
