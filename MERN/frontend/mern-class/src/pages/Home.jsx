import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Pagination from '../components/Pagination'
import RecipeCard from '../components/RecipeCard'

export default function Home() {

  let [links,setLinks] = useState(null)
  let [recipes,setRecipes] = useState([])
  let location = useLocation()
  let navigate = useNavigate()
  let searchQuery = new URLSearchParams(location.search)
  let page = searchQuery.get('page') // The data from URL bar comes as a string
  page = parseInt(page)

  // The callback inside useEffect should not be async
  useEffect(() => {
    // But if we make a new function by ourselves it can be async
    let fetchRecipes = async () => {
      // In fetch the http:// is required
      let response = await fetch('http://localhost:4000/api/recipes/?page='+page)
      if(response.ok){
        // await is required for json because of the time it takes
        let data = await response.json()
        setLinks(data.links)
        setRecipes(data.data)

        //Scroll to top function
        //Use this along with Pagination
        window.scroll({top:0, left:0, behavior: "smooth"})
      }
    }

    fetchRecipes()
  // The dependency array is empty to fetch the first ever data to the webpage
  },[page])

  // setRecipe auto trigger the state component
  let onDeleted = (_id) => {
    if(recipes.length == 1 && page > 1){
      navigate('/?page=' + (page - 1))
    } else {
      setRecipes(prev => prev.filter(r => r._id !== _id))
    }
  }

  return (
    <div className='space-y-4'>
      {/* this should be condition instead of just looking for the length of the recipe */}
      {!!recipes.length && ( recipes.map(recipe => (
          <RecipeCard recipe={recipe}  key={recipe._id} onDeleted={onDeleted}/>
        ))
      )}
      {/* 1 is the defaut prop for page */}
      {/* !!links is used to prevent from looping the empty array of links */}
      {!!links && <Pagination links={links} page={page || 1}/>}
    </div>
  )
}