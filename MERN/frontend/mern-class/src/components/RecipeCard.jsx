import React from 'react'

export default function RecipeCard({recipe}) {
  return (
    <div className='bg-white p-5 rounded-2xl space-y-4'>
        <h3 className='text-xl font-bold text-orange-500'>{recipe.title}</h3>
        <p>{recipe.description}</p>
        <div className='space-x-2'>
            <span>Ingredients - </span>
            {recipe.ingredients.length ? (
            recipe.ingredients.map((ingredient, index) => (
                <span className='bg-orange-500 text-white px-2 py-1 text-sm rounded-full' key={index}>{ingredient}</span>
            ))
            ) : (
            <span className='bg-red-600 text-white px-2 py-1 text-sm rounded-full'>No ingredients provided!</span>
            )}
        </div>
        <p className='text-gray-500'>Published at - {recipe.createdAt}</p>
    </div>
  )
}
