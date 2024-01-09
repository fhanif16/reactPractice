import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Header from './Components/Header/Header.jsx';
import Home from './Components/Home/Home.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Menu from './Components/Menu/Menu.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Header></Header>,
    children:[
      {
        path:"home",
        element:<Home></Home>,
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata'),
      },
      {path:"menu",
      element:<Menu></Menu>

      },
      {path:"contact",
      element:<Contact></Contact>

      }
    ]
  },
 
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />  
  </React.StrictMode>,
)
