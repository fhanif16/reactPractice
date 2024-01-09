import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Main/Main.jsx';
import Statistic from './Components/Statistic/Statistic.jsx';
import Nav from './Components/Nav/Nav.jsx';
import AppliedJob from './Components/AppliedJob/AppliedJob.jsx';
import Blog from './Components/Blog/Blog.jsx';
import ViewDetails from './Components/ViewDetails/ViewDetails.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element:<Nav></Nav> ,
    children:[
      {
        path: "/",
        element:<Main></Main>

      },
      {
        path: "home",
        element:<Main></Main>
       
      },
      {
        path: "statistic",
        element:<Statistic></Statistic>
       
      },
      {
        path:"applied",
        element:<AppliedJob></AppliedJob>
      },
      {
        path:"blog",
        element:<Blog></Blog>
      },

      {
        path:"/featureJob/:id" ,
        element:<ViewDetails></ViewDetails>,
        loader:({params})=>(fetch (`jobs.jsonn/${params.id}`))

      },
      {
        path:"/featureJob/:id" ,
        element:<ViewDetails></ViewDetails>,
        loader: () => fetch('jobs.json')

      },

      
    ]
   
  },
  
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
