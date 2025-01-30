import { createRoot } from 'react-dom/client';
import './index.css';

import { AuthContextProvider } from './contexts/AuthContext.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Home from './pages/Home.jsx';
import RecipeForm from './pages/RecipeForm.jsx';
import SigninForm from './pages/SigninForm.jsx';
import SignupForm from './pages/SignupForm.jsx';

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
      },
      {
        path: "/recipes/edit/:id",
        element: <RecipeForm/>
      },
      {
        path: "/sign-up",
        element: <SignupForm/>
      },
      {
        path: "sign-in",
        element: <SigninForm/>
      }
    ]
  }
]);

const root = createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <RouterProvider router={router} />
  </AuthContextProvider>
);