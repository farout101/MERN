import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Pagination from '../components/Pagination'
import RecipeCard from '../components/RecipeCard'

export default function Home() {

  let [recipes,setRecipes] = useState([])
  let location = useLocation()
  let searchQuery = new URLSearchParams(location.search)
  let page = searchQuery.get('page')

  console.log(location)

  // The callback inside useEffe ct should not be async
  useEffect(() => {
    // But if we make a new function by ourselves it can be async
    let fetchRecipes = async () => {
      // In fetch the http:// is required
      let response = await fetch('http://localhost:4000/api/recipes/?page='+page)
      if(response.ok){
        // await is required for json because of the time it takes
        let data = await response.json()
        setRecipes(data)
      }
    }

    fetchRecipes()
  // The dependency array is empty to fetch the first ever data to the webpage
  },[page])

  let links = {
    nextPage : true,
    previousPage : false,
    currentPage : 1,
    loopableLinks : [
      {number : 1},
      {number : 2},
      {number : 3}
    ]
  }

  return (
    <div className='space-y-4'>
      {recipes.length && ( recipes.map(recipe => (
          <RecipeCard recipe={recipe}  key={recipe._id}/>
        ))
      )}
      <Pagination links={links}/>
    </div>
  )
}
