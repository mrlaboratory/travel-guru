import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Booking from './components/Booking.jsx'
import Register from './pages/Register.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element : <App></App>,
    children : [
      {
        path:'/',
        element : <Home></Home>,
       
      },
      {
        path:'/booking/:id',
        element: <Booking></Booking>,
        loader : ({params})=> fetch(`https://travel-guru-server-coral-nine.vercel.app/${params.id}`)
      }
    ]
  },
  {
    path:'/register',
    element : <Register></Register>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router}></RouterProvider>
)
