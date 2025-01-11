import {
    createBrowserRouter
} from "react-router-dom";

import App from "../App";
import About from "../pages/about";
import BlogDetail from "../pages/blogDetail";
import Contact from "../pages/contact";
import Home from "../pages/home";


const router = createBrowserRouter([
    {
        path: "/", // localhost:3000
        element: <App/>,
        children: [
            {
                path: '', // localhost:3000
                element: <Home/> 
            },
            {
                path: '/about', // localhost:3000/about
                element: <About/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                // Can accept dynamic routes with ":" in react
                path: '/blogs/:id',
                element: <BlogDetail/>
            }
        ]
    }
])

export default router