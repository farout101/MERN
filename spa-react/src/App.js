import React, { useState } from 'react'

export default function App() {

  let [posts,setPost] = useState([
    {
      id : 1,
      title : 'this is the first content'
    },
    {
      id : 2,
      title : 'this is the second content'
    },
    {
      id : 3,
      title : 'this is the third content'
    }
  ])

  let deletePost = (id) => {
    setPost((prevState) => prevState.filter(post => post.id !== id))
  }

  return (
    <div className='App'>
      <h1>This is the current testing</h1>
      <h3>Posts</h3>
      <ul>
        {posts.map((post)=>(
          <li key={post.id}>
            {post.title}-
            <button onClick={() => deletePost(post.id)}>delete</button> 
            {/* This is just the function reference */}
          </li>
        ))}
      </ul>
    </div>
  )
}
