import React from 'react'
import plus from '../assets/plus.svg'
import Ingredients from '../components/ingredients'

export default function RecipeForm() {
  return (
    <div className='mx-auto max-w-md border-2 border-white p-4'>
        <h1 className='mb-6 text-2xl font-bold text-orange-500 text-center'>Recipe Create Form</h1>
        <form action="" className='space-y-5'>
            <input type="text" placeholder='Recipe Title' className='w-full p-1'/>
            <textarea name="" id="" placeholder='Recipe Description' className='w-full p-1' rows="5"></textarea>
            <div className='flex space-x-2 items-center'>
              <input type="text" placeholder='Recipe Ingredients' className='w-full p-1'/>
              <img src={plus} alt="" className='w-6 h-6 cursor-pointer' />
            </div>
            <div>
              <Ingredients ingredients={[]}/>
            </div>
            <button className='w-full px-3 py-1 rounded-xl bg-orange-500'>Create Recipe</button>
        </form>
    </div>
  )
}
