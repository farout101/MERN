import React, { useState } from 'react'
import './index.css'

export default function PostForm() { //the function name can't be index anyway
  
    let [title,setTitle] = useState("")

    let onChangeHandler = (e) => {
        setTitle(e.target.value)
    }

    let resetForm = () => {
        setTitle("")
    }

    let uploadPost = (e) => {
        e.preventDefault() // prevent refresh page

        let post = {
            id : Math.floor(Math.random()*10000),
            title : title
        }

        console.log(post)
    }

    return (
    <form className='post-form' onSubmit={uploadPost}>
        <h1>Create Post</h1>
        <div className='form-control'>
            <label htmlFor=''>Title</label>
            <input type="text" onChange={onChangeHandler} value={title}/>
        </div>
        {!!title.length}
        {title ? <p>{title}</p> : <p>Nothing is here</p>}
        <button type="button" onClick={resetForm}>rest form</button>
        <div className='form-control'>
            <button type='submit'>Post Now</button>
        </div>
    </form>
  )
}
