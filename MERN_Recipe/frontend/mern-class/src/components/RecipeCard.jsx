import React from 'react'
import { Link } from 'react-router-dom'
import axios from '../helpers/axios'
import Ingredients from './ingredients'

export default function RecipeCard({recipe, onDeleted}) {

  let deleteRecipe = async () => {
    // API request
    let res = await axios.delete('/api/recipes/' + recipe._id)
    if(res.status === 200){
      onDeleted(recipe._id) 
    }
  }

  return (
    <div className='bg-white p-5 rounded-2xl'>
      <img className='mx-auto h-64 object-contain' src={import.meta.env.VITE_BACKEND_URL + recipe.photo} alt="" />
      <div className='space-y-4'>
        <div className='flex justify-between'>
          <h3 className='text-xl font-bold text-orange-500'>{recipe.title}</h3>
          <div className='space-x-2'>
            <Link to={`/recipes/edit/${recipe._id}`} className='bg-yellow-500 font-mono px-4 py-0.5 rounded-xl hover:bg-yellow-800 text-white transaction duration-300 ease-in-out'>Edit</Link>
            <button onClick={deleteRecipe} className='bg-red-500 font-mono px-4 py-0.5 rounded-xl hover:bg-red-800 text-white transaction duration-300 ease-in-out'>Delete</button>
          </div>
        </div>
        <p>{recipe.description}</p>
        <Ingredients ingredients={recipe.ingredients}/>
        <p className='text-gray-500'>Published at - {recipe.createdAt}</p>
      </div>
    </div>
  )
}
