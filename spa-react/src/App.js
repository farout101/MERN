import React, { useState } from 'react';
import Model from './components/Model/index';
import Navbar from './components/navbar/index';
import Postlist from './components/postlist/index';
import PostForm from './components/PostForm/index';

export default function App() {

  let [showModel,setShowModel] = useState(false);

  let [posts] = useState([
    {
      id : 1,
      title : 'first content'
    },
    {
      id : 2,
      title : 'second content'
    },
    {
      id : 3,
      title : 'third content'
    },
    {
      id : 4,
      title : 'fourth content'
    }
  ])

  return (
    // This thing is called the react fragment
    <> 
      <Navbar setShowModel={setShowModel}/>
      <Postlist posts={posts}/>
      {showModel && <Model setShowModel={setShowModel} Danger={true}>
        <PostForm/>
      </Model>}
    </>
  )
}