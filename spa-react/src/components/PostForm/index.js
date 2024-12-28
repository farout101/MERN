import React, { useState } from 'react'
import './index.css'

export default function PostForm() { //the function name can't be index anyway
  
    let [title,setTitle] = useState("")

    let onChangeHandler = (e) => {
        setTitle(e.target.value)
    }

    return (
    <form className='post-form'>
        <h1>Create Post</h1>
        <div className='form-control'>
            <label htmlFor=''>Title</label>
            <input type="text" onChange={onChangeHandler}/>
        </div>
        <p>{title}</p>
        <div className='form-control'>
            <button>Post Now</button>
        </div>
    </form>
  )
}
