import React from 'react'
import Todolist from './components/Todolist'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router=createBrowserRouter([
    {
      path: '/todolist',
      element:<><Navbar/><Todolist/></>
    },
    {
      path:'/',
      element:<><Navbar/><Home/></>
    }
  ])
  return (
    <div>
       
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
