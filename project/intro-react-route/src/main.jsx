import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Home from './Components/Home/Home.jsx';
import First from './Components/First/First.jsx';
import Friends from './Components/Friends/Friends.jsx';
import FriendDetails from './Components/FriendDetails/FriendDetails.jsx';
import Posts from './Components/Posts/Posts.jsx';
import Post from './Components/Post/Post.jsx';
import PostDetails from './Components/PostDetails/PostDetails.jsx';



// const router = createBrowserRouter([
//  {
//    path: '/',
//   element: <App></App>

//  } ,

//  {
//   path: '/about',
//   element:<About></About>
//  }, 

//  {
//   path: '/contact' ,
//   element: <Contact></Contact>
//  }
// ])

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children:[
      {path:'/',
    element: <First></First>},
      {
        path:'About',
        element:<About></About>
      },
      {
        path:'Friends' ,
        element: <Friends></Friends>,
        loader:()=> fetch('https://jsonplaceholder.typicode.com/users')

      },
      {
        path:'Friend/:FriendId',
        element:<FriendDetails></FriendDetails>,
        loader: ({params}) => fetch (`https://jsonplaceholder.typicode.com/users/${params.FriendId}`)

      },
      {
        path:'Posts',
        element:<Posts></Posts>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts')

      }, 

      {
        path:'Contact',
        element:<Contact></Contact>
      },

      {
        path:'Post/:PostId',
        element:<PostDetails></PostDetails>,
        loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.PostId}`)
      }, 
      {
        path:'*',
        element:<div>404</div>

      }
    ]
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
