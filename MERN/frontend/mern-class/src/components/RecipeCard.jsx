import axios from 'axios'
import React from 'react'
import Ingredients from './ingredients'

export default function RecipeCard({recipe, onDeleted}) {

  let deleteRecipe = async () => {
    // API request
    let res = await axios.delete('http://localhost:4000/api/recipes/' + recipe._id)
    if(res.status === 200){
      onDeleted(recipe._id) 
    }
  }

  return (
    <div className='bg-white p-5 rounded-2xl'>
      <div className='space-y-4'>
        <div className='flex justify-between'>
          <h3 className='text-xl font-bold text-orange-500'>{recipe.title}</h3>
          <button onClick={deleteRecipe} className='bg-red-500 font-mono px-4 py-0.5 rounded-xl hover:bg-red-800 text-white transaction duration-300 ease-in-out'>Delete</button>
        </div>
        <p>{recipe.description}</p>
        <Ingredients ingredients={recipe.ingredients}/>
        <p className='text-gray-500'>Published at - {recipe.createdAt}</p>
      </div>
    </div>
  )
}
