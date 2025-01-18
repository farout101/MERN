import React, { useEffect, useState } from 'react'
import RecipeCard from '../components/RecipeCard'

export default function Home() {

  let [recipes,setRecipes] = useState([])

  // The callback inside useEffect should not be async
  useEffect(() => {
    // But if we make a new function by ourselves it can be async
    let fetchRecipes = async () => {
      // In fetch the http:// is required
      let response = await fetch('http://localhost:4000/api/recipes/')
      if(response.ok){
        // await is required for json because of the time it takes
        let data = await response.json()
        setRecipes(data)
      }
    }

    fetchRecipes()
  // The dependency array is empty to fetch the first ever data to the webpage
  },[])

  return (
    <div className='space-y-4'>
      {recipes.length && ( recipes.map(recipe => (
          <RecipeCard recipe={recipe}  key={recipe._id}/>
        ))
      )}
    </div>
  )
}
