import React, { useState } from 'react';
import Model from './components/Model/index';
import Navbar from './components/navbar/index';
import PostForm from './components/PostForm/index';
import Postlist from './components/postlist/index';

export default function App() {

  let [showModel,setShowModel] = useState(false);

  let [posts,setPosts] = useState([
    {
      id : 1,
      title : 'first content'
    },
    {
      id : 2,
      title : 'second content'
    },
  ])

  let addPost = (post) => {
    setPosts((prevState) => [...prevState,post])
    setShowModel(false)
  }

  return (
    // This thing is called the react fragment
    <> 
      <Navbar setShowModel={setShowModel}/>
      <Postlist posts={posts}/>
      {showModel && <Model setShowModel={setShowModel} Danger={true}>
        <PostForm addPost={addPost}/>
      </Model>}
    </>
  )
}