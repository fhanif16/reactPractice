import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './Componets/Header/Header.jsx';
import Error from './Componets/Error/Error.jsx';
import Home from './Componets/HOme/Home.jsx';
import Contact from './Componets/Contact/Contact.jsx';
import Country from './Componets/Country/Country.jsx';
import CountryDetails from './Componets/CountryDetails/CountryDetails.jsx';
import User from './Componets/User/User.jsx';
import Show from './Componets/Show/Show.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    errorElement:<Error></Error>,
    children:[
      {
        path:"home",
        element: <Home></Home>
      },

      {
        path:"contact",
        element: <Contact></Contact>,
        loader: ()=>fetch('https://jsonplaceholder.typicode.com/posts'),
        
      },
      {
        path:"country/:id",
        element: <CountryDetails></CountryDetails>,
        loader : ({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
       
        
      },
      {
        path:"country",
        element: <CountryDetails></CountryDetails>,
       
        
      },
      {
        path:"user",
        element:<User></User>,
        loader:() => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path:"show/:id",
        element:<Show></Show>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      }
      
      
      

    ]
    

  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
