import React, { useContext } from 'react';

import App from '../App.jsx';
import About from '../pages/About.jsx';
import Contact from '../pages/Contact.jsx';
import Home from '../pages/Home.jsx';
import RecipeForm from '../pages/RecipeForm.jsx';
import SigninForm from '../pages/SigninForm.jsx';
import SignupForm from '../pages/SignupForm.jsx';

import {
    Navigate,
    RouterProvider,
    createBrowserRouter
} from "react-router-dom";
import { AuthContext } from '../contexts/AuthContext.jsx';


export default function Index() {

    let {user} = useContext(AuthContext)

    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            children: [
                {
                    path: "/",
                    element: user? <Home /> : <Navigate to={'/sign-in'}/>
                },
                {
                    path: "/about",
                    element: <About />
                },
                {
                    path: "/contact",
                    element: <Contact />
                },
                {
                    path: "/recipe/create",
                    element: user? <RecipeForm /> : <Navigate to={'/sign-in'}/>
                },
                {
                    path: "/recipes/edit/:id",
                    element: <RecipeForm/>
                },
                {
                    path: "/sign-up",
                    element: !user ? <SignupForm/> : <Navigate to={'/'}/>
                },
                {
                    path: "sign-in",
                    element: !user ? <SigninForm/> : <Navigate to={'/'}/>
                }
            ]
        }
    ])

  return (
    <RouterProvider router={router} />
  )
}
