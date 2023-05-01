import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Booking from './components/Booking.jsx'
import Register from './pages/Register.jsx'
import AuthProvider from './components/AuthProvider.jsx'
import Login from './pages/Login.jsx'
import PrivateRoute from './components/PrivateRoute.jsx'

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
        element: <PrivateRoute><Booking></Booking></PrivateRoute>,
        loader : ({params})=> fetch(`https://travel-guru-server-coral-nine.vercel.app/${params.id}`)
      }
    ]
  },
  {
    path:'/register',
    element : <Register></Register>
  },
  {
    path : '/login',
    element : <Login></Login>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
<AuthProvider><RouterProvider router={router}></RouterProvider></AuthProvider>
)
