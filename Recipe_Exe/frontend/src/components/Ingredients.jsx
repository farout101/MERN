import React from 'react'

export default function Ingredients({ingredients}) {
  return (
    <div className='space-x-2'>
        <span>Ingredients - </span>
            {ingredients.length ? (
            ingredients.map((ingredient, index) => (
                <span className='bg-orange-500 text-white px-2 py-1 text-sm rounded-full' key={index}>{ingredient}</span>
            ))
            ) : (
        <span className='bg-red-600 text-white px-2 py-1 text-sm rounded-full'>No ingredients provided!</span>
        )}
    </div>
  )
}
