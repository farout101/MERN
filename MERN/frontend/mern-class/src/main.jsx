import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Home from './pages/Home.jsx';
import RecipeForm from './pages/RecipeForm.jsx'

import App from './App.jsx';

import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
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
        element: <RecipeForm />
      }
    ]
  }
]);

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);