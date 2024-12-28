import React from 'react'
import './index.css'

export default function Postlist({posts}) {

  return (
    <div className='postlist-component'>
      <div className='postList'>
        {posts.map(post=> (
          <div className='single-post' key={post.id}>{post.title}</div>
        ))}
      </div>
    </div>
  )
}