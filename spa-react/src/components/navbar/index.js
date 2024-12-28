import React from 'react'
import './index.css'

export default function Navbar({setShowModel}) {
  return (
    <div className='navbar'>
      <nav>
        <div className='container'>
            <h1>Logo</h1>
            <ul>
                <li>Home</li>
                <li>Posts</li>
                <li><button onClick={() => setShowModel(true)}>Create post</button></li>
            </ul>
        </div>
      </nav>
    </div>
  )
}
