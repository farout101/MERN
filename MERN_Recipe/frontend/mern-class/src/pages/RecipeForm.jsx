import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import plus from '../assets/plus.svg'
import Ingredients from '../components/ingredients'
import axios from '../helpers/axios'

export default function RecipeForm() {

  let {id} = useParams()
  console.log(id)
  let navigate = useNavigate()
  let [ingredients,setIngredients] = useState([])
  let [newingredients,setNewIngredients] = useState('')
  let [title,setTitle] = useState('')
  let [description,setDescription] = useState('')
  let [errors,setErrors] = useState([])
  let [file, setFile] = useState(null)
  let [preview,setPreview] = useState('')
  let [loading, setLoading] = useState(false)

  useEffect(() => {
    let fetchRecipe = async () => {
      if(id) {
        let res = await axios.get('/api/recipes/' + id)
        if(res.status === 200) {
          setTitle(res.data.title)
          setDescription(res.data.description)
          setIngredients(res.data.ingredients)
          setPreview(res.data.photo)
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

  let submit = async (e) => {
    try {
      e.preventDefault()
      setLoading(true)
      let recipe = {
        title,
        description,
        ingredients
      } 

      let res
      if(id) {
        res = await axios.patch('/api/recipes/' + id, recipe)
      } else {
        res = await axios.post('/api/recipes', recipe)
      }

      let formData = new FormData
      formData.set('photo',file)
    
      let uploadRes = await axios.post(`/api/recipes/${res.data._id}/upload`, formData, {
        headers: {
          Accept: "multipart/form-data"
        }
      })
      
      console.log(uploadRes)

      if(res.status === 200) {
        setLoading(false)
        navigate('/')
      }
    } catch(e) {
      setLoading(false)
      setErrors(Object.keys(e.response.data.errors))
    }
  }

  let upload = (e) => {
    let file = e.target.files[0]
    setFile(file)

    //preview (Use file reader from JS)
    let fileReader = new FileReader

    fileReader.onload = (e) => {
      setPreview(e.target.result)
    }

    fileReader.readAsDataURL(file)
  }

  return (
    <div className='mx-auto max-w-md border-2 border-white p-4 rounded-2xl'>
        <h1 className='mb-6 text-2xl font-bold text-orange-500 text-center'>Recipe {id? 'Edit' : 'Create'} Form</h1>
        <form action="" className='space-y-5' onSubmit={submit}>
            <ul className='list-disc pl-4'>
              {!!errors.length && errors.map((error,i) => (
                <li className='text-red-500 text-sm' key={i}>{error} is invalid value!</li>
              ))}
            </ul>
            <input type="file" onChange={upload}/>
            {!!preview && <img src={preview} alt="image" />}
            <input value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder='Recipe Title' className='w-full p-1'/>
            <textarea value={description} onChange={e => setDescription(e.target.value)} name="" id="" placeholder='Recipe Description' className='w-full p-1' rows="5"></textarea>
            <div className='flex space-x-2 items-center'>
              <input onChange={e => setNewIngredients(e.target.value)} type="text" placeholder='Recipe Ingredients' className='w-full p-1' value={newingredients}/>
              <img onClick={addIngredients} src={plus} alt="" className='w-6 h-6 cursor-pointer' />
            </div>
            <div>
              <Ingredients ingredients={ingredients}/>
            </div>
            <button type='submit' className='w-full px-3 py-1 rounded-xl border-2 bg-orange-500 hover:bg-white hover:text-orange-500 hover:border-orange-500 b- transaction duration-300 ease-in-out flex items-center justify-center'>
            {loading && <svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"></path>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"></path>
            </svg>}
            {id? 'Update' : 'Create'} Recipe</button>
        </form>
    </div>
  )
}
