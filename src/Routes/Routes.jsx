import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Details from "../pages/Details/Details";
import App from "../App";
  
  
 export  const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout>,
      children: [
        {
            path: '/',
            element: <App></App>
        },
        {
          path: '/details/:id',
          element: <Details></Details>,
          loader: () => fetch('project.json')
        }
      ]
    },
  ]);