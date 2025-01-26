import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import plus from '../assets/plus.svg'
import Ingredients from '../components/ingredients'

export default function RecipeForm() {

  let {id} = useParams()
  console.log(id)
  let navigate = useNavigate()
  let [ingredients,setIngredients] = useState([])
  let [newingredients,setNewIngredients] = useState('')
  let [title,setTitle] = useState('')
  let [description,setDescription] = useState('')
  let [errors,setErrors] = useState([])

  useEffect(() => {
    let fetchRecipe = async () => {
      if(id) {
        let res = await axios.get('http://localhost:4000/recipes/' + id)
        if(res.status === 200) {
          console.log(res.data)
        }
      }
    }
    // Don't forget to call the function 
    fetchRecipe()
  }, [id])

  let addIngredients = () => {
     setIngredients(prev => [newingredients,...prev])
     setNewIngredients('')
  }

  let createRecipe = async (e) => {
    try {
      e.preventDefault()
      let recipe = {
        title,
        description,
        ingredients
      } 
      let res = await axios.post('http://localhost:4000/api/recipes', recipe)
      if(res.status === 200) {
        navigate('/')
      }
    } catch(e) {
      setErrors(Object.keys(e.response.data.errors))
    }
  }

  return (
    <div className='mx-auto max-w-md border-2 border-white p-4 rounded-2xl'>
        <h1 className='mb-6 text-2xl font-bold text-orange-500 text-center'>Recipe Create Form</h1>
        <form action="" className='space-y-5' onSubmit={createRecipe}>
            <ul className='list-disc pl-4'>
              {!!errors.length && errors.map((error,i) => (
                <li className='text-red-500 text-sm' key={i}>{error} is invalid value!</li>
              ))}
            </ul>
            <input value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder='Recipe Title' className='w-full p-1'/>
            <textarea value={description} onChange={e => setDescription(e.target.value)} name="" id="" placeholder='Recipe Description' className='w-full p-1' rows="5"></textarea>
            <div className='flex space-x-2 items-center'>
              <input onChange={e => setNewIngredients(e.target.value)} type="text" placeholder='Recipe Ingredients' className='w-full p-1' value={newingredients}/>
              <img onClick={addIngredients} src={plus} alt="" className='w-6 h-6 cursor-pointer' />
            </div>
            <div>
              <Ingredients ingredients={ingredients}/>
            </div>
            <button type='submit' className='w-full px-3 py-1 rounded-xl border-2 bg-orange-500 hover:bg-white hover:text-orange-500 hover:border-orange-500 b- transaction duration-300 ease-in-out'>Create Recipe</button>
        </form>
    </div>
  )
}
