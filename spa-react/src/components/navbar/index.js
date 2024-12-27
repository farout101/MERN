import React from 'react'
import './index.css'

export default function Navbar({setShowModel}) {
  return (
    <nav>
        <div className='container'>
            <h1>Logo</h1>
            <ul>
                <li>Home</li>
                <li>Posts</li>
                <li><button onClick={() => setShowModel(true)}>Sign in</button></li>
            </ul>
        </div>
    </nav>
  )
}
