import React, { useState } from 'react'
import Navbar from './components/navbar/index'
import Postlist from './components/postlist/index'

export default function App() {

  let [posts] = useState([
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
    },
    {
      id : 4,
      title : 'this is the fourth content'
    }
  ])

  return (
    // This thing is called the react fragment
    <> 
      <Navbar />
      <Postlist posts={posts}/>
    </>
  )
}