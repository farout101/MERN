import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Pagination from '../components/Pagination'
import RecipeCard from '../components/RecipeCard'

export default function Home() {

  let [links,setLinks] = useState(null)
  let [recipes,setRecipes] = useState([])
  let location = useLocation()
  let searchQuery = new URLSearchParams(location.search)
  let page = searchQuery.get('page')

  // The callback inside useEffe ct should not be async
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

  return (
    <div className='space-y-4'>
      {/* this should be condition instead of just looking for the length of the recipe */}
      {!!recipes.length && ( recipes.map(recipe => (
          <RecipeCard recipe={recipe}  key={recipe._id}/>
        ))
      )}
      {/* 1 is the defaut prop for page */}
      {/* !!links is used to prevent from looping the empty array of links */}
      {!!links && <Pagination links={links} page={page || 1}/>}
    </div>
  )
}