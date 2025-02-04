import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Pagination from '../components/Pagination';
import RecipeCard from '../components/RecipeCard';
import axios from '../helpers/axios';

export default function Home() {
  const [links, setLinks] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const searchQuery = new URLSearchParams(location.search);
  let page = searchQuery.get('page')
  page = parseInt(page) ? parseInt(page) : 1

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios(`/api/recipes/?page=${page}`);
        if (response.status === 200) {
          const data = response.data;
          setLinks(data.links);
          setRecipes(data.data);
          window.scroll({ top: 0, left: 0, behavior: 'smooth' });
        }
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, [page]);

  const onDeleted = (_id) => {
    if (recipes.length === 1 && page > 1) {
      navigate(`/?page=${page - 1}`);
    } else {
      setRecipes((prev) => prev.filter((r) => r._id !== _id));
    }
  };

  return (
    <>
      <div className='grid grid-cols-3 space-y-4'>
      {!!recipes.length && recipes.map((recipe) => (
        <RecipeCard recipe={recipe} key={recipe._id} onDeleted={onDeleted} />
      ))}
      </div>
      {!!links && <Pagination links={links} page={page} />}
    </>
  );
}
