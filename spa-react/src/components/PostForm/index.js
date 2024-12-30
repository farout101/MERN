import React, { useRef, useState } from 'react';
import './index.css';

export default function PostForm({addPost}) { //the function name can't be index anyway
  
    let refTitle = useRef();

    let [status,setStatus] = useState("upcoming")

    // let [title,setTitle] = useState("")

    // let onChangeHandler = (e) => {
    //     setTitle(e.target.value)
    // }

    let changeStatus = (e) => {
        setStatus(e.target.value)
        console.log(status)
    }

    let resetForm = () => {
        refTitle.current.value = ""
    }

    let uploadPost = (e) => { // refreshing is the html default nature and there's nothing to do with react
        e.preventDefault() // prevent refresh page

        // console.log(refTitle.current.value)

        let post = {
            id : Math.floor(Math.random()*10000),
            title : refTitle.current.value,
            status : status
        }

        console.log(post)
        resetForm()
        addPost(post)
    }

    return (
    <form className='post-form' onSubmit={uploadPost}>
        <h1>Create Post</h1>
        <div className='form-control'>
            <label htmlFor=''>Title</label>
            <input type="text" ref={refTitle} />
        </div>
        <div className='form-control'>
            <label htmlFor=''>Status</label>
            <select value={status} onChange={changeStatus}>
                <option value="dropped">Dropped</option>
                <option value="ongoing">Ongoing</option>
                <option value="upcoming">Upcoming</option>
            </select>
        </div>
        <button type="button" onClick={resetForm}>Reset Form</button>
        <div className='form-control'>
            <button type='submit'>Post Now</button>
        </div>
    </form>
  )
}
